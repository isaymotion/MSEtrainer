# MSE Trainer

A web app for psychiatry residents to practice recognizing mental status exam (MSE) and psychopathology findings, along with the interviewing techniques and concepts in Shea's *Psychiatric Interviewing: The Art of Understanding*, 3rd ed. (2016). Each case presents a short vignette or interview excerpt, and the resident picks the term that fits best from four options chosen to be easily confused with one another (for example, circumstantiality vs. tangentiality, or a process response vs. sidetracking). It runs entirely in the browser, works offline after the first visit, and can be installed on phones and desktops.

**Live site:** https://isaymotion.github.io/MSEtrainer/

After each answer the app explains the answer and gives a rule for telling it apart from its look-alikes. MSE cases show a sample line for documenting the finding in the chart; interviewing-skills cases show a practical tip or sample phrasing for the bedside. Every term points to the relevant Shea chapter for further reading.

## Features

- 1,269 fictional cases covering 625 terms, including 56 original Tagalog cases; every interviewing term has at least two cases
- Mental status: ten MSE domains, from appearance and attitude toward the examiner to insight and judgment
- Clinical interviewing, Parts 1 to 4 (Shea Ch. 1–21), collaborative interviewing (motivational interviewing, Medication Interest Model, Ch. 22–23), and the appendices (facilic schematics drawn with Shea's own symbols, the written document)
- Mastery: a term counts as mastered after two correct answers on different cases; term cards, domain pages and My progress show it
- Tagalog and Filipino culture: Tagalog cases across the MSE domains (English shown after answering, "Ask it in Tagalog", recorded audio from Usap Tayo when online) and a Culture or pathology? domain of Filipino look-alikes; a Sa Tagalog card points to the matching Usap Tayo section
- Sessions keep their place, so you can leave and continue at the same case later; Quick session, Review misses, Custom session (domains, language, unseen or missed only, length), Drill this term
- Glossary of every term with its own filter, and My progress by domain with terms to revisit
- Menu: the ☰ button (phones and tablets) or the docked sidebar (desktop, with a hide/show button) lists Practice, Mental status, Interviewing · Shea, Tagalog and Filipino culture, and App (Back up or restore, What's new, About). Bottom tab bar on phones: Home, Practice, Glossary, Progress, Menu
- Search from the top bar (press `/` or Ctrl+K): every term, domain and page, with suggestions and a full results page at `#/search/<query>`
- Back and forward buttons in the top bar, `Alt+Left` / `Alt+Right`, and scroll position restored when you go back
- Light, dark or match-device theme, a text-size control (Aa), and an English / Tagalog interface switch (About > Settings; the Tagalog interface strings are a draft)
- What's new page with a "new" badge for entries you have not seen
- Backup in the footer: export progress and any session in progress to a file, import it elsewhere, undo the last import; uses the share sheet in installed phone apps. Backup files from v5 still import
- Keyboard shortcuts in a session: 1 to 4 to answer, Enter for the next case
- Deep links: `#/domain/<domain key>` (e.g. `#/domain/tp`), `#/tagalog`, `#/misses`, `#/quick`, `#/practice?lang=tl&dom=fc`, `#/practice?drill=<term key>`

## Files to upload

Upload everything in this folder to the root of the repository, keeping the folder structure:

```
.nojekyll               (empty file; tells GitHub Pages not to run Jekyll)
README.md
index.html              App shell (top bar, menu, screens, footer with backup, bottom tabs, custom-session sheet)
favicon.ico             Browser tab icon (browsers request it at the root)
css/app.css             Styles (shared design tokens, light and dark themes, MSE screens)
js/app.js               Shell (menu, history, search, theme, text size, language, backup) and the MSE screens
js/data.js              Domains, terms, Shea chapter titles, and the English cases
js/data-tl.js           Tagalog cases and the Culture or pathology? domain and terms
js/audio-key.js         Maps a Tagalog line to its audio file in Usap Tayo's pack
data/app-meta.js        App name, version, attribution (window.APP_META), menu links (window.APP_LINKS)
data/changelog.js       What's new entries (window.APP_CHANGELOG)
data/hospital.js        Hospital and program details shared across the apps (window.HOSPITAL)
data/strings.js         Interface strings in English and Tagalog (window.STRINGS)
icons/                  icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, favicon-32.png
manifest.webmanifest    Install metadata
sw.js                   Offline cache
```

## Publish on GitHub Pages

1. Upload all files in this folder to the `MSEtrainer` repository, keeping the folder structure.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://isaymotion.github.io/MSEtrainer/`.
5. On a phone, open that link, then use **Add to Home Screen** (iPhone Safari) or **Install app** (Android Chrome).

There is no build step and no dependencies. To preview locally, run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Upgrading from v5

- Progress (`mse-trainer-v1`) and the resumable session (`mse-trainer-session`) are kept exactly where they were; nothing is migrated or lost.
- Theme, text size and the sidebar setting move once from the old keys to the new `mse:v1:` prefix.
- Old backup files (made with "Back up progress" in the old ☰ menu) still restore through **Import backup**.
- `css/style.css` and `js/news.js` are removed (replaced by `css/app.css` and `data/changelog.js`), and the root-level icons moved into `icons/` (`favicon.ico` stays at the root as well). Delete the old files from the repository.

## Adding cases

Add an object to the `V` array in `js/data.js`:

```js
{id:'tp15', t:'tang', d:['circ','loose','foi'], q:`Optional question text`, x:`C: Clinician line
P: Patient line
O: Observation line`, w:`Explanation shown after answering.`}
```

- `id` must be unique; `t` is the correct term key and `d` three distractor keys (all must exist in `TERMS`); `q` replaces the default question.
- Lines beginning `C:`, `P:`, `O:` render as clinician, patient and observation lines; `S:` lines draw a facilic schematic (Appendix I notation: `[Content/3]`, `(Process)`, `{Scout}`, gates `-spont->` `-nat->` `-ref->` `-imp->` `-phan->` `-intro->` `-obs->`, optional `@b` or `@10:41`).
- `dom:'fs'` (or any domain key) places a case in a domain other than its answer's.

New terms: `T(key, name, domain, [chapters], definition, tellingApart, chartLine)`. New domains go in `DOMAINS`; chapter titles in `CH`.

Tagalog cases go in `js/data-tl.js` with `lang:'tl'`; write lines as `Tagalog || English` and add `ask:'Tagalog question || English'`. A case with `rev:0` shows a "Draft translation" tag. After changing Tagalog lines, run `node tools/import-msetrainer.js /path/to/MSEtrainer` in the Usap Tayo repo so its audio job records them.

## Version and What's new

- Versions are semantic (`6.0.0`) and must agree in `data/app-meta.js` (`version`), the first entry of `data/changelog.js`, and `sw.js` (`VERSION`).
- For every release: add an entry at the top of `data/changelog.js` (`{version, date:'YYYY-MM-DD', title, items:[{type, text}]}`, type `feature | update | correction | content`), bump the version in `data/app-meta.js` and `sw.js` (so returning users get the new files), and update "Latest version" in `index.html`, `data/app-meta.js` and this README.
- Storage keys: `mse-trainer-v1`, `mse-trainer-session`, and `mse:v1:*` for settings. Cache names start with `mse-trainer-`. All isaymotion apps share one origin, so keep these unique and unchanged.

## Disclaimer

All cases are fictional teaching vignettes written for training. Not clinical guidance. Progress is saved in this browser only. Tagalog cases are original teaching cases, not from Shea; cultural look-alikes are generalizations, so always ask the patient and family what an experience means to them.

## Attribution

App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com
