# MSE Trainer

A web app for psychiatry residents to practice recognizing mental status exam (MSE) and psychopathology findings, along with the interviewing techniques and concepts in Shea's *Psychiatric Interviewing: The Art of Understanding*, 3rd ed. (2016). Each case presents a short vignette or interview excerpt, and the resident picks the term that fits best from four options chosen to be easily confused with one another (for example, circumstantiality vs. tangentiality, or a process response vs. sidetracking).

After each answer the app explains the answer and gives a rule for telling it apart from its look-alikes. MSE cases show a sample line for documenting the finding in the chart; interviewing-skills cases show a practical tip or sample phrasing for the bedside. Every term points to the relevant Shea chapter for further reading.

## Features

- 462 fictional cases covering 419 terms, including 42 original Tagalog cases
- Mental status: eight MSE domains, from thought process to insight and judgment
- Clinical interviewing, Part 1 (Ch. 1–8): engagement and empathy, safety and the alliance, interview structure, facilics, validity techniques, the person beneath the diagnosis, assessment and planning, and nonverbal behavior
- Clinical interviewing, Part 2 (Ch. 9–15): mood disorders, the person beneath the mood disorder, psychotic disorders, the person beneath the psychosis, and personality disorders (core concepts, differential diagnosis, and psychodynamics)
- Clinical interviewing, Ch. 19–21: anger and disengagement, culture and identity, and vantage points
- Tagalog and Filipino culture: Tagalog cases across all eight MSE domains (patient lines in Tagalog, English shown after answering, "Ask it in Tagalog" for each), and a Culture or pathology? domain with 10 Filipino look-alikes (hiya, deferential gaze, dropped po, shared kulam/usog/engkanto beliefs, grief-related sensing, sama ng loob, nerbiyos, lutang, agreeable opo, sanib)
- Sa Tagalog card on every MSE and culture case, linking to the matching Usap Tayo section or lesson
- Tagalog audio in the recorded Filipino voice from Usap Tayo (isaymotion.github.io/Tagalog), played when online
- Sidebar with every MSE domain and Shea chapter (with your score); each domain has its own page with its terms and a Practice button
- Home page with one Start or Continue button, overall progress, weak spots, Review misses, and Tagalog shortcuts
- Sessions keep their place, so you can leave and continue at the same case later
- Custom session panel: choose domains, language (English, Tagalog, or both), only unseen or previously missed cases, and length (10, 20, 40, or all)
- Glossary search from the top bar (/ on a keyboard), with a "Drill this term" option
- Progress by domain and a list of terms to revisit, saved in the browser (no account or server); back up and restore progress from the ☰ menu
- Installs as a home-screen app (Share > Add to Home Screen on iPhone and iPad; Install app in Chrome) and opens offline after the first visit; Tagalog audio still needs a connection
- Keyboard shortcuts: 1 to 4 to answer, Enter for the next case
- Back and forward buttons (Alt+← / Alt+→), What's New and About pages
- Plum and rose theme: light, dark, or match device. Works on iPhone, iPad, and desktop (the sidebar becomes a drawer on narrow screens)
- Deep links: `#/domain/<domain key>` (e.g. `#/domain/tp`), `#/tagalog`, `#/misses`, `#/quick`, `#/practice?lang=tl&dom=fc` (Tagalog culture cases), `#/practice?drill=<term key>`

## Run it locally

Open `index.html` in any modern browser. No build step or installation is needed.

## Publish with GitHub Pages

1. Create a new repository on GitHub and upload all files in this folder, keeping the folder structure.
2. In the repository, go to **Settings > Pages**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. After a minute or two, the app will be live at `https://<your-username>.github.io/<repository-name>/`.

## Project structure

```
index.html      Page structure
favicon.ico, favicon-32.png   Browser tab icons (caduceus)
apple-touch-icon.png   iPhone and iPad home-screen icon
icon-192.png, icon-512.png, icon-maskable-512.png   Install icons (Android, desktop)
manifest.webmanifest   Lets the app install to the home screen
sw.js           Offline support: network first, cached copy when offline
css/style.css   Styles, including light and dark themes
js/data.js      Domains, terms, Shea chapter titles, and the English cases
js/data-tl.js   Tagalog cases and the Culture or pathology? domain and terms
js/audio-key.js Maps a Tagalog line to its audio file in Usap Tayo's pack (same as Usap Tayo's js/audio-key.js)
js/news.js      What's New entries
js/app.js       App logic: sidebar, home and domain pages, sessions (saved so they can be resumed), scoring, glossary, progress, navigation, theme, backup, audio
.nojekyll       Tells GitHub Pages to serve files as-is
```

## Adding cases

Add an object to the `V` array in `js/data.js`:

```js
{id:'tp15', t:'tang', d:['circ','loose','foi'], q:`Optional question text`, x:`C: Clinician line
P: Patient line
O: Observation line`, w:`Explanation shown after answering.`}
```

- `id` must be unique.
- `q` is optional; it replaces the default question, "Which term fits best?"
- `t` is the key of the correct term, and `d` lists three distractor term keys. All keys must exist in `TERMS`.
- Lines beginning `C:`, `P:`, or `O:` render as clinician, patient, and observation lines. A vignette with no `C:` or `P:` lines renders as a single narrative paragraph.

New terms are added with `T(key, name, domain, [chapters], definition, tellingApart, chartLine)`. For interviewing domains, the last field is shown as "At the bedside" instead of "In the chart." New domains go in the `DOMAINS` list with a group (`mse`, `p1`, `p2`, or `skill`), and new chapter titles go in `CH`.

### Tagalog cases

Add them to `js/data-tl.js` with `lang:'tl'`. Write clinician and patient lines as `Tagalog || English` (the English stays hidden until the case is answered), and add `ask:'Tagalog question || English'`. Use `dom:'fc'` to place a case in Culture or pathology? when its answer is a standard MSE term. Stage directions in parentheses, like `(ngumiti)`, are shown but not spoken.

Audio: Tagalog lines play from Usap Tayo's audio pack. After adding or changing Tagalog lines, run `node tools/import-msetrainer.js /path/to/MSEtrainer` in the Usap Tayo repo and push; its audio job records the new lines in a few minutes.

## Disclaimer

For education only. All cases are fictional and do not describe real patients. This app is not a clinical decision tool. Tagalog cases are original teaching cases, not from Shea; cultural look-alikes are generalizations, so always ask the patient and family what an experience means to them.

## Author

Made by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com
