# JADE // CREATOR OS
### Your Personal AI-Powered Creator Command System

---

## What's in this zip

```
jade_os/
├── index.html      ← The entire app (all 7 screens)
├── manifest.json   ← Makes it installable as a real app
├── sw.js           ← Service worker (offline support)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md       ← You're reading this
```

---

## How to run it

### Option A — Just open it (simplest)
Double-click `index.html` → opens in Chrome → done.
All AI features work, localStorage saves your data.

### Option B — Install as a real app on Android
1. Copy the whole `jade_os` folder to your phone
2. You need a local server running. In Termux:
```bash
pkg install python
cd /sdcard/jade_os
python -m http.server 8080
```
3. Open Chrome on your phone → go to `http://localhost:8080`
4. Tap the 3-dot menu → "Add to Home Screen" → Install
5. JADE OS appears on your home screen like a real app ✦

### Option C — Host it online (permanent web app)
Upload the folder to any static host:
- **Netlify**: drag the folder to netlify.com/drop → instant URL
- **GitHub Pages**: push to a repo → enable Pages in settings
- **Vercel**: `vercel --prod` from the folder

---

## What each screen does

| Dot | Screen | What it does |
|-----|--------|-------------|
| 1 | Intro | Cinematic landing, customise your name/tagline |
| 2 | Command Hub | 40+ AI prompt techniques with one-tap sends |
| 3 | Idea Lab | Claude generates startup ideas live |
| 4 | Blueprint | Your income projections — fully editable |
| 5 | Inbox Intel | Email + social DMs organised by category |
| 6 | AI Mirror | Transform any content in 7 different modes |
| 7 | Guide | Step-by-step setup guide |

---

## Features that need internet
- Idea Lab (Claude API)
- AI Mirror (Claude API)
- Inbox AI Draft replies (Claude API)
- Google Fonts (loads once then cached)

## Features that work offline
- Everything visual (particles, synapses, animations)
- Command Hub + all prompt pills
- Blueprint editing
- localStorage (saves all your data)
- Sound (Web Audio — pure maths, no files)

---

## Your data is saved automatically
Every time you type, the app saves to localStorage:
- Your intro name, tagline, eyebrow
- Blueprint numbers and stream notes
- IMAP host and email (never your password)
- AI Mirror session history (last 20)

---

## JADE // CREATOR OS · 2025
*where bold ideas become inevitable realities*
