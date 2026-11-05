/* What's new. Newest entry FIRST. version = semver string (also the key for the unseen badge),
   date = ISO YYYY-MM-DD. Item type: feature | update | correction | content.
   Optional per entry: teaser (shown on Home while it is the newest entry). Optional per item: href ('#/...') shown as "Open".
   Every entry below the newest is a release listed in js/news.js before the design refresh (titles and text unchanged).
   Versions were assigned oldest to newest, starting from "Earlier releases". The old list gave only a month ("November 2026")
   or a year ("2026"), so those dates are written as the first of that month ("2026-11-01") or of that year ("2026-01-01").
   For every release: add an entry here, then bump APP_META.version, VERSION in sw.js, and "Latest version" in the footer / README. */
window.APP_CHANGELOG = [
  {
    "version": "6.0.0",
    "date": "2026-11-05",
    "title": "Design refresh",
    "teaser": "New look: the same top bar, menu, search, theme, text size and backup as the other isaymotion apps. Your progress and any session in progress are kept.",
    "items": [
      {
        "type": "feature",
        "text": "Same look and controls as the other isaymotion apps: menu button opens the section list, back/forward with Alt+arrows, match-device theme, text size, backup with undo, offline support."
      },
      {
        "type": "feature",
        "text": "Backup and restore moved from the old menu to the footer and the App section of the menu."
      },
      {
        "type": "feature",
        "text": "Language switch on the About page (Tagalog interface strings are a draft)."
      }
    ]
  },
  {
    "version": "5.0.0",
    "date": "2026-11-01",
    "title": "The missing chapters, and a second case for every term",
    "items": [
      {
        "type": "update",
        "text": "Suicide assessment (Shea Ch. 17): risk factors versus warning signs, static and dynamic factors, protective factors, the mnemonics, chronic versus immediate risk, the tetrad of lethality, reflected intent, roadblocks, the elicitation triad, the CASE Approach region by region, the verbal video, the validity techniques as used in CASE, apparent and not-so-apparent motivations, and safety contracting with its caveats. 38 terms, 76 cases."
      },
      {
        "type": "update",
        "text": "Violence assessment (Ch. 18): affective, predatory and biologically induced violence, risk factors and the HCR-20, the violence tetrad of lethality, dangerous psychotic process, domestic violence caveats, and the CADE Approach. 24 terms, 48 cases."
      },
      {
        "type": "update",
        "text": "Motivational interviewing (Ch. 22): the spirit of MI, the guiding principles, OARS, the four processes, elicit-provide-elicit, ambivalence, sustain talk and DARN change talk, with substance-use scenarios (alcohol, tobacco, nganga, shabu). 28 terms, 56 cases. The Sa Tagalog card links to the MI flow in Usap Tayo's substance use module."
      },
      {
        "type": "update",
        "text": "Medication Interest Model (Ch. 23): intentional and unintentional nonadherence, medication interest, collaborative exploration, the Choice Triad, the Medication and Prescriber Passports, and the named techniques of the three toolboxes. 42 terms, 84 cases."
      },
      {
        "type": "update",
        "text": "Two new mental status domains from Ch. 16: Appearance (12 terms) and Attitude and rapport (10 terms, including the impact status). Insight and judgment, Mood and affect, and Speech each gained new terms; 14 new Tagalog cases cover these five domains."
      },
      {
        "type": "update",
        "text": "Facilic schematics (Appendix I): maps drawn with Shea's own symbols, from the gate glyphs to corner slashes and re-entry rectangles, plus counter settings and circled-letter notes. 16 terms, 39 cases."
      },
      {
        "type": "update",
        "text": "The written document (Appendix III): the practical tips and quality-assurance prompts for the EHR, with chart excerpts to judge. 18 terms, 36 cases."
      },
      {
        "type": "update",
        "text": "Every interviewing term now has at least two cases, so a lucky guess cannot pass for mastery. A term shows Mastered once you get it right on two different cases; each term card carries a pill, each domain page shows how many terms you have mastered, and My progress keeps the total. Sessions give a little more weight to terms you have not mastered."
      },
      {
        "type": "update",
        "text": "Sidebar groups: Clinical interviewing Parts 1 to 4, Collaborative interviewing, and Appendices, with appendix labels where chapter numbers were. Your saved custom-session domains are kept; if you had all domains selected, the new ones are included."
      },
      {
        "type": "update",
        "text": "Totals: 1,269 cases covering 625 terms, including 56 Tagalog cases."
      }
    ]
  },
  {
    "version": "4.0.0",
    "date": "2026-11-01",
    "title": "Text size",
    "items": [
      {
        "type": "update",
        "text": "Text size: tap Aa in the top bar to make text smaller or larger. Your choice is saved on this device."
      }
    ]
  },
  {
    "version": "3.0.0",
    "date": "2026-10-01",
    "title": "A new look and easier navigation",
    "items": [
      {
        "type": "update",
        "text": "New plum and rose theme in light and dark, with the same layout as the other study companions."
      },
      {
        "type": "update",
        "text": "A sidebar lists every mental status domain and Shea chapter, with your score for each. On phones and iPad portrait it opens from the sidebar button."
      },
      {
        "type": "update",
        "text": "Each domain has its own page: case count, your accuracy, its terms, and a Practice this domain button."
      },
      {
        "type": "update",
        "text": "Home shows one Start or Continue button, your overall progress, weak spots, and shortcuts to Review misses and Tagalog cases."
      },
      {
        "type": "update",
        "text": "Sessions now keep their place: leave mid-session and pick up at the same case later, even after closing the app."
      },
      {
        "type": "update",
        "text": "Custom session opens in a panel with collapsible domain groups, so the practice screen shows only the case."
      },
      {
        "type": "update",
        "text": "Search the glossary from the top bar (press / on a keyboard). Sessions default to 20 cases, with a 40-case option."
      },
      {
        "type": "update",
        "text": "Fixed: the Usap Tayo menu link, the Sa Tagalog links, and Tagalog audio now point to the right address (isaymotion.github.io/Tagalog)."
      },
      {
        "type": "update",
        "text": "Install it as a home-screen app: on iPhone or iPad tap Share, then Add to Home Screen. It opens full screen with the caduceus icon and works offline after your first visit (Tagalog audio still needs a connection)."
      }
    ]
  },
  {
    "version": "2.0.0",
    "date": "2026-10-01",
    "title": "Tagalog cases",
    "items": [
      {
        "type": "update",
        "text": "42 original Tagalog cases: patient and clinician lines in Tagalog, with the English translation shown after you answer (or tap Show English)."
      },
      {
        "type": "update",
        "text": "Tagalog cases cover all eight MSE domains, with extra practice on thought process in Tagalog speech: circumstantiality, tangentiality, flight of ideas, clanging, neologisms, blocking, and loosening of associations."
      },
      {
        "type": "update",
        "text": "New domain, Culture or pathology?: Filipino look-alikes such as hiya vs blunted affect, deferential gaze vs guardedness, dropped po as a sign of irritability, shared kulam beliefs vs delusions, grief vs hallucinations, sama ng loob, nerbiyos, lutang, agreeable opo, and sanib."
      },
      {
        "type": "update",
        "text": "Ask it in Tagalog: each Tagalog case shows a question that would elicit the finding."
      },
      {
        "type": "update",
        "text": "Sa Tagalog: every MSE and culture case, English ones included, links to the matching section of Usap Tayo (for example, hallucination questions or idioms of distress)."
      },
      {
        "type": "update",
        "text": "Tagalog audio in the recorded Filipino voice from Usap Tayo, played when you are online."
      },
      {
        "type": "update",
        "text": "Language filter: English cases, Tagalog cases, or both."
      },
      {
        "type": "update",
        "text": "Light, dark, or match-device theme button; back and forward buttons (Alt+← and Alt+→); What's New and About pages; back up and restore progress from the ☰ menu."
      },
      {
        "type": "update",
        "text": "Links to and from Usap Tayo, the Tagalog for clinicians app."
      }
    ]
  },
  {
    "version": "1.0.0",
    "date": "2026-01-01",
    "title": "Earlier releases",
    "items": [
      {
        "type": "update",
        "text": "420 cases covering 409 terms across mental status, clinical interviewing (Shea Ch. 1–15 and 19–21), and culture and identity."
      },
      {
        "type": "update",
        "text": "Look-alike distractors, telling-apart rules, chart lines or bedside tips, glossary with Drill this term, and progress by domain."
      }
    ]
  }
];
