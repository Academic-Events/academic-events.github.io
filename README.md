# Event websites — hub page

This repository is the landing page that lists every event website on this account.

The repository must be named exactly `YOUR-ACCOUNT.github.io` (your account or organization name, in lower case). It is then published at `https://YOUR-ACCOUNT.github.io/`, and each event repository appears beneath it, for example `https://YOUR-ACCOUNT.github.io/women-in-ai-forum-2026/`.

## Add an event to the list

1. Open `events.js` and click the pencil icon.
2. Copy an existing `{ … }` block, paste it after the last one, and put a comma between the two blocks.
3. Change `title`, `date` (YYYY-MM-DD), `dateLabel`, `venue`, `summary`, and set `url` and `image` to the new repository name.
4. Click **Commit changes…**.

Upcoming events appear first. Once the date has passed, an event moves to **Past events** automatically.

## Files

```
YOUR-ACCOUNT.github.io/
├── index.html    Hub page layout
├── events.js     ← list of events: edit this
├── 404.html      Shown for any address that doesn't exist on the account
├── favicon.svg
├── .nojekyll
└── assets/fonts/ Archivo font (SIL Open Font License)
```
