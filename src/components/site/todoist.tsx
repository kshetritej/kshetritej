import { getTodoistTasks } from "@/lib/todoist";
import {ArrowUpRight} from "lucide-react";
async function Todoist() {
  const { connected, tasks } = await getTodoistTasks();

  return (
    <div className="border-b border-border p-5">
      <div className="flex items-center justify-between">
        <span className="label">Todoist</span>
        <a
          href="https://todoist.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-[14px] text-muted-foreground transition hover:text-ink"
        >
          Open Todoist <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {connected ? (
        tasks.length > 0 ? (
          <ul className="mt-5 divide-y divide-border">
            {tasks.map((t) => (
              <li key={t.id} className="flex items-baseline gap-3 py-2.5">
                <span
                  className={
                    t.overdue
                      ? "inline-block h-1.5 w-1.5 shrink-0 translate-y-[-1px] rounded-full bg-destructive"
                      : "inline-block h-1.5 w-1.5 shrink-0 translate-y-[-1px] rounded-full bg-primary"
                  }
                />
                <span className="flex-1 text-[14px] text-ink">{t.content}</span>
                <span className="text-[12px] tabular-nums text-muted-foreground">
                  {t.overdue ? "overdue" : "today"}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-[13px] text-muted-foreground">Nothing due today.</p>
        )
      ) : (
        <p className="mt-5 text-[13px] text-muted-foreground">
          Todoist isn&apos;t connected yet — set the TODOIST_TOKEN value and today&apos;s tasks
          land here automatically.
        </p>
      )}
    </div>
  );
}
