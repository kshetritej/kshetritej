export type TodoistTask = {
  id: string;
  content: string;
  date: string;
  overdue: boolean;
};

type SyncItem = {
  id: string;
  content: string;
  checked: boolean;
  is_deleted: boolean;
  due: { date: string } | null;
  priority: number;
};

export async function getTodoistTasks(): Promise<{ connected: boolean; tasks: TodoistTask[] }> {
  const token = process.env.TODOIST_TOKEN;
  if (!token) return { connected: false, tasks: [] };

  try {
    const res = await fetch("https://api.todoist.com/api/v1/sync", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        sync_token: "*",
        resource_types: JSON.stringify(["items"]),
      }),
      next: { revalidate: 300 },
    });
    if (!res.ok) return { connected: true, tasks: [] };

    const data = (await res.json()) as { items?: SyncItem[] };
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kathmandu" }).format(
      new Date(),
    );

    const tasks = (data.items ?? [])
      .filter((i) => !i.checked && !i.is_deleted && i.due && i.due.date <= today)
      .map((i) => ({
        id: i.id,
        content: i.content,
        date: i.due!.date,
        overdue: i.due!.date < today,
      }))
      .sort((a, b) => Number(b.overdue) - Number(a.overdue) || a.date.localeCompare(b.date));

    return { connected: true, tasks };
  } catch {
    return { connected: true, tasks: [] };
  }
}
