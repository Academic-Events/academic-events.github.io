# Event websites — hub

This repository is the home page that lists every event, published at `https://academic-events.github.io/`. It also holds the **Past events** pages.

## Pages

| Address | What it shows |
|---|---|
| `/` | Upcoming events, then past events |
| `/past-events/` | All past events |
| `/past-events/event.html?id=…` | One past event: details and its flyer |

Events move from "Upcoming" to "Past" automatically the day after their date.

## Add an event

Open `events.js`, click the pencil icon, copy an existing `{ … }` block, paste it, keep a comma between blocks, change the values, and commit.

* **An event with its own website** (for example a new forum repository): set `url` to its address, such as `/women-in-ai-forum-2027/`, and `image` to its preview image.
* **A past event with only a flyer:** leave out `url`. Give it a unique `id` (lower case, hyphens), and set `flyer` and `thumb`:
  1. Upload the flyer to `past-events/flyers/` (JPG, about 1000 px wide).
  2. Upload a preview to `past-events/flyers/thumbs/` with the **same file name**. It should be 800 × 420 px and show the top of the flyer.
  3. Its page is created automatically at `past-events/event.html?id=YOUR-ID`.

## Files

```
academic-events.github.io/
├── index.html              Home page
├── events.js               ← list of events: edit this
├── 404.html                Shown for addresses that don't exist
├── favicon.svg
├── assets/
│   ├── hub.css             Styles for all hub pages
│   ├── hub.js              Builds the pages from events.js
│   └── fonts/              Archivo font (SIL Open Font License)
└── past-events/
    ├── index.html          List of past events
    ├── event.html          Page for one past event
    └── flyers/             Flyer images, plus thumbs/ previews
```
