# MSE Trainer

A web app for psychiatry residents to practice recognizing mental status exam (MSE) and psychopathology findings, along with the interviewing techniques and concepts in Shea's *Psychiatric Interviewing: The Art of Understanding*, 3rd ed. (2016). Each case presents a short vignette or interview excerpt, and the resident picks the term that fits best from four options chosen to be easily confused with one another (for example, circumstantiality vs. tangentiality, or a process response vs. sidetracking).

After each answer the app explains the answer and gives a rule for telling it apart from its look-alikes. MSE cases show a sample line for documenting the finding in the chart; interviewing-skills cases show a practical tip or sample phrasing for the bedside. Every term points to the relevant Shea chapter for further reading.

## Features

- 420 fictional cases covering 409 terms
- Mental status: eight MSE domains, from thought process to insight and judgment
- Clinical interviewing, Part 1 (Ch. 1–8): engagement and empathy, safety and the alliance, interview structure, facilics, validity techniques, the person beneath the diagnosis, assessment and planning, and nonverbal behavior
- Clinical interviewing, Part 2 (Ch. 9–15): mood disorders, the person beneath the mood disorder, psychotic disorders, the person beneath the psychosis, and personality disorders (core concepts, differential diagnosis, and psychodynamics)
- Clinical interviewing, Ch. 19–21: anger and disengagement, culture and identity, and vantage points
- Filter by domain, practice only unseen or previously missed cases, and choose session length
- Searchable glossary with a "Drill this term" option
- Progress by domain and a list of terms to revisit, saved in the browser (no account or server)
- Keyboard shortcuts: 1 to 4 to answer, Enter for the next case
- Works on phones and desktops, in light and dark mode

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
favicon-32.png, apple-touch-icon.png   Browser tab and home-screen icons (caduceus)
icon-512.png    Large icon, e.g., for a repository or profile image
css/style.css   Styles, including light and dark themes
js/data.js      Domains, terms, Shea chapter titles, and all cases
js/app.js       App logic: sessions, scoring, glossary, progress
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

## Disclaimer

For education only. All cases are fictional and do not describe real patients. This app is not a clinical decision tool.

## Author

Made by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com
