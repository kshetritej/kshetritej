# Tej Kshetri — Portfolio

Personal portfolio built with [Next.js](https://nextjs.org) (App Router, Server Components) and
Tailwind CSS v4.

## Development

```sh
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Env vars

Copy `.env.example` to `.env.local` and fill in what you have:

- `TODOIST_TOKEN` — Todoist API token (https://app.todoist.com/app/settings/integrations). Enables the Todoist widget showing tasks due today/overdue.
- `LETTERBOXD_USERNAME` — defaults to `kshetritej`.

## Stack

- Next.js 16, App Router
- React 19, Tailwind CSS v4, shadcn/ui kit
- Server Components fetch the live data: Letterboxd RSS, Spotify oEmbed + embed, Todoist Sync API

## Scripts

| Script     | Description              |
| ---------- | ------------------------ |
| `dev`      | Start dev server         |
| `build`    | Production build         |
| `start`    | Run production build     |
| `lint`     | ESLint                   |
| `format`   | Prettier                 |
