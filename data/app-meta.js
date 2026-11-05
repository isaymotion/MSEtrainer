/* App identity. */
window.APP_META = {
  name: 'MSE Trainer',
  short: 'MSE',
  tagline: 'Mental Status & Interviewing Practice',
  version: '6.0.0',
  repo: 'MSEtrainer',
  attribution: 'App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com'
};

/* Other isaymotion apps, listed as the last group ("Other apps") in the menu. External links only:
   they are not added to the home tiles, search or the tab bar. The entry whose URL ends in this
   app's own repo slug (APP_META.repo) is skipped automatically, so the same list can be copied to every app. */
/* Show the "Other apps" group in the menu? Off for now: the apps are not interlinked yet.
   Set to true when ready; the list below is already in place. */
window.SHOW_OTHER_APPS = false;

window.APP_LINKS = [
  { name: 'MSE Trainer', href: 'https://isaymotion.github.io/MSEtrainer/' },
  { name: 'Usap Tayo (Tagalog)', href: 'https://isaymotion.github.io/Tagalog/' },
  { name: 'DSM-5-TR Study Companion', href: 'https://isaymotion.github.io/DSMVapp/' },
  { name: 'Stahl Study Companion', href: 'https://isaymotion.github.io/Stahl/' },
  { name: 'Kaplan Study', href: 'https://isaymotion.github.io/KaplanStudy/' },
  { name: 'Shea Trainer', href: 'https://isaymotion.github.io/sheatrainer/' }
];

/* Key migration is NOT used here. Saved progress stays exactly where v5 kept it:
   the progress store under "mse-trainer-v1" and the resumable session under "mse-trainer-session" are read and
   written under those same names. The old theme, text-size and sidebar keys ("mse-trainer-theme",
   "mse-trainer-textSize", "mse-trainer-sidebar") are read once by js/app.js as a fallback and moved under the new
   "mse:v1:" prefix. Leave window.MIGRATE_KEYS undefined. */
