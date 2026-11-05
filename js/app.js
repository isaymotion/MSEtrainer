/* MSE Trainer - app shell and screens.
   Shell (menu, back/forward, search, theme, text size, language, backup, What's new) comes from the shared isaymotion starter
   (as in Shea Trainer); the screens, case pools, sessions, mastery, glossary, Tagalog cases and audio are MSE v5's, unchanged
   in behaviour. Views are the static <section id="v-..."> panels in index.html, shown by show()/route().
   Content lives in js/data.js and js/data-tl.js (globals CH, DOMAINS, GROUPS, DOM, DOMG, TERMS, V). */
(function () {
'use strict';

/* ===== Storage (try/catch so the app works with storage blocked) ===== */
var PREFIX = 'mse:v1:';
var store = {
  get: function (k, d) { try { var v = localStorage.getItem(PREFIX + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set: function (k, v) { try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  del: function (k) { try { localStorage.removeItem(PREFIX + k); } catch (e) {} }
};
function rawGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

/* v5 kept theme, text size and the sidebar as raw strings under "mse-trainer-theme", "mse-trainer-textSize" and
   "mse-trainer-sidebar". If the new key is empty, take the old value once, store it under PREFIX, and drop the old key.
   Progress ("mse-trainer-v1") and the resumable session ("mse-trainer-session") are NOT moved: they stay where v5 kept them. */
(function legacyPrefs() {
  try {
    var oldT = localStorage.getItem('mse-trainer-theme');
    if (oldT != null) {
      if (localStorage.getItem(PREFIX + 'theme') == null && (oldT === 'light' || oldT === 'dark')) store.set('theme', oldT);
      localStorage.removeItem('mse-trainer-theme');
    }
    var oldZ = localStorage.getItem('mse-trainer-textSize');
    if (oldZ != null) {
      if (localStorage.getItem(PREFIX + 'textSize') == null && (oldZ === '90' || oldZ === '112.5' || oldZ === '125')) store.set('textSize', oldZ);
      localStorage.removeItem('mse-trainer-textSize');
    }
    var oldS = localStorage.getItem('mse-trainer-sidebar');
    if (oldS != null) {
      if (localStorage.getItem(PREFIX + 'navCollapsed') == null) store.set('navCollapsed', oldS === 'closed');
      localStorage.removeItem('mse-trainer-sidebar');
    }
  } catch (e) { /* storage unavailable */ }
})();

var META = window.APP_META || {};
var CHANGELOG = window.APP_CHANGELOG || [];
var ATTRIBUTION = META.attribution || '';
var APP_NAME = META.name || document.title;
var APP_LINKS = window.APP_LINKS || [];

/* ===== Language: 'en' (default) or 'tl' (Tagalog). Shell UI strings live in data/strings.js. ===== */
var STRINGS = window.STRINGS || {};
var lang = store.get('lang', 'en') === 'tl' ? 'tl' : 'en';
function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
function t(key) {
  var s = STRINGS[lang] && has(STRINGS[lang], key) ? STRINGS[lang][key] : null;
  if (typeof s !== 'string' || !s) s = STRINGS.en && has(STRINGS.en, key) ? STRINGS.en[key] : null;
  return typeof s === 'string' && s ? s : key;
}
function tf(key, vars) { return t(key).replace(/\{(\w+)\}/g, function (m, k) { return vars && has(vars, k) ? String(vars[k]) : m; }); }
function rich(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\[\[(.+?)\]\]/g, '<kbd>$1</kbd>'); }
function locale() { return lang === 'tl' ? 'fil' : undefined; }

/* ===== Helpers ===== */
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function pad2(n) { return String(n).padStart(2, '0'); }
function fmtDate(iso) {
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso));
  if (!m) return String(iso);
  return new Date(+m[1], +m[2] - 1, +m[3]).toLocaleDateString(locale(), { month: 'long', day: 'numeric', year: 'numeric' });
}

var sidenav = document.getElementById('sidenav');
var backdrop = document.getElementById('nav-backdrop');
var menuBtn = document.getElementById('menu-btn');
var tabMenu = document.getElementById('tab-menu');
var qInput = document.getElementById('q');
var suggestBox = document.getElementById('suggest');

/* ===== Icons (inline SVG, 24x24, stroke = currentColor) ===== */
var ICONS = {
  home: '<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
  bolt: '<path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z"/>',
  redo: '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4h4"/>',
  sliders: '<path d="M5 6h9M18 6h1M5 12h3M12 12h7M5 18h11M20 18h-1"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  book: '<path d="M5 4.5h10a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h10"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  chat: '<path d="M5 5h14v10H10l-4 4v-4H5z"/>',
  news: '<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h6M9 16h6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  save: '<path d="M12 3v11m0 0l-4-4m4 4l4-4M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>'
};
function icon(name, cls) {
  return '<svg class="' + (cls || 'nav-ico') + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || ICONS.info) + '</svg>';
}

/* ===== Theme: auto (match device) / light / dark. No data-theme attribute = match device. ===== */
var THEME_ICONS = {
  auto: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
  dark: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  light: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
};
var darkMQ = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
function getTheme() {
  var cur = store.get('theme', 'auto');
  return cur === 'light' || cur === 'dark' ? cur : 'auto';
}
function applyTheme(mode) {
  var root = document.documentElement;
  if (mode === 'light' || mode === 'dark') root.setAttribute('data-theme', mode); else root.removeAttribute('data-theme');
  var dark = mode === 'dark' || (mode !== 'light' && darkMQ && darkMQ.matches);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#200E18' : '#6E1C4C');
  var btn = document.getElementById('theme-btn');
  if (btn) {
    var label = tf('theme.label', { name: t('theme.' + mode) });
    btn.innerHTML = THEME_ICONS[mode];
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }
  var radios = document.querySelectorAll('input[name="theme"]');   // the Theme segment on the About page
  for (var j = 0; j < radios.length; j++) radios[j].checked = radios[j].value === mode;
}
function setTheme(mode) {
  if (mode !== 'light' && mode !== 'dark') mode = 'auto';
  if (mode === 'auto') store.del('theme'); else store.set('theme', mode);
  applyTheme(mode);
}
applyTheme(getTheme());
(function () {
  var btn = document.getElementById('theme-btn');
  if (btn) btn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') || 'auto';
    setTheme({ auto: 'light', light: 'dark', dark: 'auto' }[cur]);
  });
  function onDeviceChange() { applyTheme(document.documentElement.getAttribute('data-theme') || 'auto'); }
  if (darkMQ) { if (darkMQ.addEventListener) darkMQ.addEventListener('change', onDeviceChange); else if (darkMQ.addListener) darkMQ.addListener(onDeviceChange); }
})();

/* ===== Header height -> --top ===== */
function headerH() { var el = document.querySelector('.topbar'); return el ? el.offsetHeight : 64; }
function setTopVar() { document.documentElement.style.setProperty('--top', headerH() + 'px'); }
window.addEventListener('resize', setTopVar);
setTopVar();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(setTopVar);

/* ===== Text size (Aa panel) ===== */
var TEXT_SIZES = [['90', 'textsize.smaller'], ['100', 'textsize.default'], ['112.5', 'textsize.larger'], ['125', 'textsize.largest']];
function syncSizeRadios(v) {
  var radios = document.querySelectorAll('input[name="aboutTextSize"]');
  for (var i = 0; i < radios.length; i++) radios[i].checked = radios[i].value === v;
}
function applyTextSize(v) {
  var ok = TEXT_SIZES.some(function (z) { return z[0] === v; });
  document.documentElement.style.fontSize = ok && v !== '100' ? v + '%' : '';
  setTopVar();
}
applyTextSize(String(store.get('textSize', '100')));
(function () {
  var btn = document.getElementById('textSizeBtn');
  if (!btn) return;
  var panel = document.createElement('div');
  panel.className = 'text-size-panel'; panel.id = 'textSizePanel'; panel.hidden = true;
  panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', t('textsize.title'));
  document.body.appendChild(panel);
  function build() {
    var cur = String(store.get('textSize', '100'));
    panel.setAttribute('aria-label', t('textsize.title'));
    panel.innerHTML = '<p class="text-size-panel__title">' + esc(t('textsize.title')) + '</p><div class="seg">' + TEXT_SIZES.map(function (z, i) {
      return '<label><input type="radio" name="textSize" value="' + z[0] + '"' + (cur === z[0] ? ' checked' : '') + '><span style="font-size:' + (0.82 + i * 0.1).toFixed(2) + 'rem">' + esc(t(z[1])) + '</span></label>';
    }).join('') + '</div>';
  }
  function open() { build(); panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); var f = panel.querySelector('input:checked'); if (f) f.focus(); }
  function close() { if (panel.hidden) return; panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
  btn.addEventListener('click', function (e) { e.stopPropagation(); if (panel.hidden) open(); else close(); });
  panel.addEventListener('change', function (e) {
    if (e.target.name === 'textSize') { store.set('textSize', e.target.value); applyTextSize(e.target.value); syncSizeRadios(e.target.value); }
  });
  document.addEventListener('click', function (e) { if (!panel.hidden && !panel.contains(e.target) && e.target !== btn && !btn.contains(e.target)) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { close(); btn.focus(); } });
  window.addEventListener('hashchange', close);
})();

/* ===== In-app back/forward buttons (index-stamped history) ===== */
var HIST_KEY = PREFIX + 'hist';
var hist = (function () { try { return JSON.parse(sessionStorage.getItem(HIST_KEY)) || { cur: 0, max: 0 }; } catch (e) { return { cur: 0, max: 0 }; } })();
function saveHist() { try { sessionStorage.setItem(HIST_KEY, JSON.stringify(hist)); } catch (e) {} }
function stamp(i) { try { history.replaceState({ spIdx: i }, ''); } catch (e) {} }
function syncHist() {
  var st = history.state;
  if (st && typeof st.spIdx === 'number') {
    hist.cur = st.spIdx;
    if (hist.cur > hist.max) hist.max = hist.cur;
  } else {
    hist.cur = hist.cur + 1;     // a new page: anything that was ahead is discarded
    hist.max = hist.cur;
    stamp(hist.cur);
  }
  saveHist(); paintHist();
}
function paintHist() {
  var b = document.getElementById('nav-back'), f = document.getElementById('nav-fwd');
  if (b) b.disabled = hist.cur <= 0;
  if (f) f.disabled = hist.cur >= hist.max;
}
(function initHist() {
  var st = history.state;
  if (st && typeof st.spIdx === 'number') { hist.cur = st.spIdx; if (hist.max < hist.cur) hist.max = hist.cur; }
  else { hist = { cur: 0, max: 0 }; stamp(0); }
  saveHist(); paintHist();
  var b = document.getElementById('nav-back'), f = document.getElementById('nav-fwd');
  if (b) b.addEventListener('click', function () { if (!b.disabled) history.back(); });
  if (f) f.addEventListener('click', function () { if (!f.disabled) history.forward(); });
})();

/* Alt+Left / Alt+Right (ignores typing in fields and other modifiers) */
document.addEventListener('keydown', function (e) {
  var tag = (e.target.tagName || '').toLowerCase();
  var typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;
  if (e.altKey && !typing && !e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    e.preventDefault();
    if (e.key === 'ArrowLeft') history.back(); else history.forward();
  }
});

/* ===== Scroll restoration (only on back/forward, not on ordinary link clicks) ===== */
var scrollMemo = {}, scrollKey = location.hash || '#/', fromHistory = false, scrollPending = false;
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('scroll', function () {
  if (scrollPending) return;
  scrollPending = true;
  setTimeout(function () { scrollPending = false; scrollMemo[scrollKey] = window.scrollY; }, 120);
}, { passive: true });
window.addEventListener('popstate', function (e) { fromHistory = !!(e.state && typeof e.state.spIdx === 'number'); });

/* ===== Menu: docked sidebar on desktop, drawer on phones/tablets ===== */
function isDrawerMode() { return window.matchMedia('(max-width: 1099px)').matches; }
function setMenuExpanded(v) { [menuBtn, tabMenu].forEach(function (b) { if (b) b.setAttribute('aria-expanded', v ? 'true' : 'false'); }); }
function openDrawer() {
  if (!isDrawerMode()) return;
  document.body.classList.add('drawer-open');
  backdrop.hidden = false;
  setMenuExpanded(true);
  var target = sidenav.querySelector('.sidenav__close');
  setTimeout(function () { if (target) target.focus(); }, 60);
}
function closeDrawer() {
  if (!document.body.classList.contains('drawer-open')) return;
  document.body.classList.remove('drawer-open');
  backdrop.hidden = true;
  setMenuExpanded(false);
}
if (menuBtn) menuBtn.addEventListener('click', function () { openDrawer(); });
if (tabMenu) tabMenu.addEventListener('click', function () { if (document.body.classList.contains('drawer-open')) closeDrawer(); else openDrawer(); });
document.getElementById('nav-close').addEventListener('click', function () { closeDrawer(); if (menuBtn) menuBtn.focus(); });
backdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('drawer-open')) { closeDrawer(); if (menuBtn) menuBtn.focus(); } });
sidenav.addEventListener('click', function (e) { var a = e.target.closest('a'); if (a) closeDrawer(); });
var collapseBtn = document.getElementById('collapse-btn');   // desktop: hide/show the docked sidebar
function labelCollapse() {
  var c = document.documentElement.classList.contains('nav-collapsed');
  collapseBtn.setAttribute('aria-label', t(c ? 'sidebar.show' : 'sidebar.hide'));
  collapseBtn.setAttribute('title', t(c ? 'sidebar.show' : 'sidebar.hide'));
  collapseBtn.setAttribute('aria-expanded', c ? 'false' : 'true');
}
document.documentElement.classList.toggle('nav-collapsed', !!store.get('navCollapsed', false));
collapseBtn.addEventListener('click', function () {
  var c = !document.documentElement.classList.contains('nav-collapsed');
  document.documentElement.classList.toggle('nav-collapsed', c);
  store.set('navCollapsed', c); labelCollapse(); setTopVar();
});
labelCollapse();

/* APP_LINKS minus this app's own entry (matched on the repo slug at the end of the URL). Menu only: never tiles, search or tabs. */
function otherApps() {
  if (!window.SHOW_OTHER_APPS) return [];   // off until she is ready to interlink the apps (data/app-meta.js)
  var me = String(META.repo || '').toLowerCase();
  return APP_LINKS.filter(function (a) {
    if (!a || !a.name || !/^https?:\/\//i.test(String(a.href || ''))) return false;
    var slug = String(a.href).replace(/[?#].*$/, '').replace(/\/+$/, '').split('/').pop().toLowerCase();
    return !me || slug !== me;
  });
}

/* ===== What's new: unseen badge keyed on the version string ===== */
function latestNewsVersion() { return CHANGELOG.length ? String(CHANGELOG[0].version) : ''; }
function seenNewsVersion() {
  var s = store.get('seenNews', null);
  if (s == null) { s = rawGet('mse-trainer-v1') ? '5.0.0' : latestNewsVersion(); store.set('seenNews', s); }   // new visitors start up to date; v5 users see what changed since v5
  return s;
}
function unseenNews() {
  var seen = seenNewsVersion(), out = [];
  for (var i = 0; i < CHANGELOG.length; i++) {
    if (String(CHANGELOG[i].version) === seen) return out;
    out.push(CHANGELOG[i]);
  }
  return out;
}
function updateNavBadges() {
  var n = unseenNews().length;
  var els = document.querySelectorAll('[data-badge="news"]');
  for (var i = 0; i < els.length; i++) { els[i].textContent = n; els[i].hidden = !n; }
}

/* ===== MSE progress store and resumable session: kept EXACTLY where v5 saved them, so nobody loses anything ===== */
const STORE='mse-trainer-v1', SESS_KEY='mse-trainer-session';
function load(){try{const s=JSON.parse(localStorage.getItem(STORE)||'{}');return{items:s.items||{},prefs:s.prefs||{}}}catch(e){return{items:{},prefs:{}}}}
let stats=load();
function save(){try{localStorage.setItem(STORE,JSON.stringify(stats))}catch(e){}}

/* prefs v4 had 26 domains and v5 had 27; a saved full list means "all", so domains added later are included. */
const savedDoms=(stats.prefs.dv===6||stats.prefs.dv===5||stats.prefs.dv===4)&&stats.prefs.doms&&stats.prefs.doms.length&&!(stats.prefs.dv===4&&stats.prefs.doms.length>=26)&&!(stats.prefs.dv===5&&stats.prefs.doms.length>=27)?stats.prefs.doms.filter(k=>DOM[k]):null;
const ALL=()=>new Set(DOMAINS.map(d=>d.k));
const settings={
  doms:new Set(savedDoms&&savedDoms.length?savedDoms:DOMAINS.map(d=>d.k)),
  mode:stats.prefs.mode||'mix', len:+(stats.prefs.len||20), lang:stats.prefs.lang||'all'
};
const domOf=v=>v.dom||TERMS[v.t].dom;
const VBYID=Object.fromEntries(V.map(v=>[v.id,v]));
function savePrefs(){stats.prefs={dv:6,doms:[...settings.doms],mode:settings.mode,len:settings.len,lang:settings.lang};save();}

/* ---------- case pools and sessions ---------- */
let session=null, view='home', domView=null;
function pool(o){
  o=Object.assign({doms:settings.doms,lang:settings.lang,mode:settings.mode,drill:null},o||{});
  let p=V.filter(v=>o.drill?(v.t===o.drill||v.d.includes(o.drill)):o.doms.has(domOf(v)));
  if(o.lang==='tl')p=p.filter(v=>v.lang==='tl');
  if(o.lang==='en')p=p.filter(v=>!v.lang);
  if(o.mode==='new')p=p.filter(v=>!stats.items[v.id]);
  if(o.mode==='missed')p=p.filter(v=>{const s=stats.items[v.id];return s&&s.l===0});
  return p;
}
function weightOf(v){const s=stats.items[v.id];const m=termMastery(v.t).mastered?1:1.4;if(!s)return 2.5*m;const miss=(s.a-s.c)/s.a;return m*(s.l===0?3:1)*(1+2*miss);}
function pick(p,len){return p.map(v=>({v,k:Math.pow(Math.random(),1/weightOf(v))})).sort((a,b)=>b.k-a.k).map(o=>o.v).slice(0,len);}
const missedCount=()=>V.filter(v=>{const s=stats.items[v.id];return s&&s.l===0}).length;
function describeDoms(doms){
  if(doms.size===DOMAINS.length)return 'All domains';
  if(doms.size===1)return DOM[[...doms][0]];
  const gs=GROUPS.filter(G=>DOMAINS.filter(d=>d.g===G.g).every(d=>doms.has(d.k)));
  if(gs.length===1&&DOMAINS.filter(d=>doms.has(d.k)).every(d=>d.g===gs[0].g))return gs[0].n;
  return doms.size+' domains';
}
/* o: {list, doms, drill, mode, lang, len, label} */
function startSession(o){
  o=o||{};
  const items=o.list||pick(pool(o),o.len||settings.len);
  session={items,i:0,right:0,log:[],cur:null,done:false,label:o.label||describeDoms(o.doms||settings.doms),drill:o.drill||null};
  if(items.length)setCur();
  saveSession();
  if(view==='practice')renderPractice();else show('practice');
  scrollTop();
}
function setCur(){const v=session.items[session.i];session.cur={v,opts:shuffle([v.t,...v.d]),picked:null};}
function saveSession(){
  try{
    if(!session||session.done||!session.items.length){localStorage.removeItem(SESS_KEY);return;}
    const c=session.cur;
    localStorage.setItem(SESS_KEY,JSON.stringify({ids:session.items.map(v=>v.id),i:session.i,right:session.right,label:session.label,drill:session.drill,
      log:session.log.map(l=>({id:l.v.id,p:l.picked,ok:l.ok})),opts:c.opts,picked:c.picked}));
  }catch(e){}
}
function loadSession(){
  try{
    const s=JSON.parse(localStorage.getItem(SESS_KEY)||'null');
    if(!s||!Array.isArray(s.ids)||!s.ids.every(id=>VBYID[id])||s.i>=s.ids.length)return;
    const items=s.ids.map(id=>VBYID[id]), v=items[s.i];
    session={items,i:s.i,right:s.right||0,label:s.label||'Session',drill:s.drill||null,done:false,
      log:(s.log||[]).filter(l=>VBYID[l.id]).map(l=>({v:VBYID[l.id],picked:l.p,ok:l.ok})),
      cur:{v,opts:Array.isArray(s.opts)&&s.opts.length===4&&s.opts.every(k=>TERMS[k])?s.opts:shuffle([v.t,...v.d]),picked:s.picked&&TERMS[s.picked]?s.picked:null}};
  }catch(e){}
}
const inProgress=()=>session&&!session.done&&session.items.length;

/* ---------- chapter labels, mastery ---------- */
const chNum=c=>typeof c==='number'?c:100+(['AI','AII','AIII'].indexOf(c)+1);
const chShort=c=>typeof c==='number'?`Ch. ${c}`:`Appendix ${c.slice(1)}`;
const SHEA_G=d=>d.g!=='mse'&&d.g!=='tl';
const sheaDoms=()=>DOMAINS.filter(SHEA_G).sort((a,b)=>chNum(a.ch)-chNum(b.ch));
/* A term counts as mastered when its last answer was correct on at least two different cases and no case of it is currently missed. */
const CASES_BY_TERM={};V.forEach(v=>(CASES_BY_TERM[v.t]||(CASES_BY_TERM[v.t]=[])).push(v));
function termMastery(k){
  const vs=CASES_BY_TERM[k]||[];let ok=0,miss=0,seen=0;
  vs.forEach(v=>{const s=stats.items[v.id];if(!s)return;seen++;if(s.l===1)ok++;else miss++;});
  return {n:vs.length,seen,ok,miss,mastered:ok>=2&&miss===0};
}
function masteryPill(k){
  const m=termMastery(k);
  if(m.mastered)return `<span class="pill ok">Mastered</span>`;
  if(m.miss)return `<span class="pill miss">Missed ${m.miss} of ${m.n}</span>`;
  if(m.ok)return `<span class="pill part">${m.ok} of ${Math.min(2,m.n)} needed</span>`;
  return `<span class="pill none">Not yet seen</span>`;
}
const masteredCount=ks=>ks.filter(k=>termMastery(k).mastered).length;


/* ---------- facilic schematic renderer (Appendix I notation) ----------
   An S: line holds one row of a facilic map, tokens separated by spaces:
     [Label]      content region (rectangle)      (Label)   process region (circle)      {Label}  scouting region (capsule)
     [Label/3]    three corner slashes (expansion depth, 1–4; 5–6 = overexpansion)        ...      ellipsis
     -spont->  -nat->  -ref->  -imp->  -phan->  -intro->  -obs->    the seven gates (Fig. AI.1); -?-> an unlabeled arrow
     a gate may carry an annotation: -ref->@b (circled letter) or -phan->@10:41 (counter time)
   Several S: lines are drawn as stacked rows. */
function renderSchematic(rows){
  const W=640,RH=96,PAD=12;let out='',y=0;
  const node=(tok,x,cy)=>{
    const m=tok.match(/^([\[\({])(.+?)(?:\/(\d))?([\]\)}])$/);if(!m)return null;
    const kind=m[1],label=m[2].replace(/_/g,' '),sl=+(m[3]||0);
    const lines=label.split('|'),w=Math.max(70,Math.min(150,10+Math.max(...lines.map(l=>l.length))*7.2)),h=lines.length>1?56:48;
    let g='';
    if(kind==='[')g+=`<rect x="${x}" y="${cy-h/2}" width="${w}" height="${h}" rx="2"/>`;
    else if(kind==='(')g+=`<ellipse cx="${x+w/2}" cy="${cy}" rx="${w/2}" ry="${h/2+4}"/>`;
    else g+=`<rect x="${x}" y="${cy-h/2}" width="${w}" height="${h}" rx="${h/2}"/>`;
    const sx=[[x,cy-h/2,1],[x+w,cy-h/2,-1],[x,cy+h/2,1],[x+w,cy+h/2,-1],[x+w/2,cy-h/2,0],[x+w/2,cy+h/2,0]];
    for(let i=0;i<Math.min(sl,6);i++){const [px,py,d]=sx[i];g+=d?`<line x1="${px-8*d}" y1="${py+(i<2?-9:9)}" x2="${px+8*d}" y2="${py+(i<2?9:-9)}"/>`:`<line x1="${px-7}" y1="${py+(i===4?-9:9)}" x2="${px+7}" y2="${py+(i===4?9:-9)}"/>`;}
    lines.forEach((l,i)=>{g+=`<text x="${x+w/2}" y="${cy+(i-(lines.length-1)/2)*15+5}" text-anchor="middle">${esc(l)}</text>`;});
    return {g,w};
  };
  const gate=(tok,x,cy)=>{
    const m=tok.match(/^-(spont|nat|ref|imp|phan|intro|obs|\?)->(?:@(\S+))?$/);if(!m)return null;
    const k=m[1],ann=m[2],w=78,x2=x+w;let g='';
    const arrow=`<path d="M${x2-9} ${cy-6} L${x2} ${cy} L${x2-9} ${cy+6}" fill="none"/>`;
    if(k==='spont')g+=`<path d="M${x+2} ${cy} c6 -14 12 -14 12 0 c0 14 6 14 12 0 c0 -14 6 -14 12 0 c0 14 6 14 12 0 L${x2} ${cy}" fill="none"/>`+arrow;
    else if(k==='nat')g+=`<line x1="${x}" y1="${cy-5}" x2="${x2}" y2="${cy-5}"/><line x1="${x}" y1="${cy+5}" x2="${x2-12}" y2="${cy+5}"/><path d="M${x2-9} ${cy-11} L${x2} ${cy-5} L${x2-9} ${cy+1}" fill="none"/>`;
    else if(k==='ref')g+=`<line x1="${x}" y1="${cy-5}" x2="${x2}" y2="${cy-5}" stroke-dasharray="7 5"/><line x1="${x}" y1="${cy+5}" x2="${x2-12}" y2="${cy+5}"/><path d="M${x2-9} ${cy-11} L${x2} ${cy-5} L${x2-9} ${cy+1}" fill="none"/>`;
    else if(k==='imp')g+=`<path d="M${x+22} ${cy-26} L${x+28} ${cy+2} L${x2-6} ${cy+10} L${x2-14} ${cy+22}" fill="none"/><path d="M${x2-14} ${cy+1} L${x2-6} ${cy+10} L${x2-18} ${cy+13}" fill="none"/>`;
    else if(k==='phan')g+=`<line x1="${x}" y1="${cy}" x2="${x+26}" y2="${cy}"/><rect x="${x+26}" y="${cy-10}" width="20" height="20"/><line x1="${x+26}" y1="${cy-10}" x2="${x+46}" y2="${cy+10}"/><line x1="${x+46}" y1="${cy-10}" x2="${x+26}" y2="${cy+10}"/><line x1="${x+46}" y1="${cy}" x2="${x2}" y2="${cy}"/>`+arrow;
    else if(k==='intro')g+=`<line x1="${x}" y1="${cy}" x2="${x+26}" y2="${cy}"/><rect x="${x+26}" y="${cy-10}" width="20" height="20"/><line x1="${x+46}" y1="${cy}" x2="${x2}" y2="${cy}"/>`+arrow;
    else if(k==='obs')g+=`<line x1="${x}" y1="${cy}" x2="${x+24}" y2="${cy}"/><ellipse cx="${x+38}" cy="${cy}" rx="14" ry="9"/><circle cx="${x+38}" cy="${cy}" r="3.5"/><line x1="${x+52}" y1="${cy}" x2="${x2}" y2="${cy}"/>`+arrow;
    else g+=`<line x1="${x}" y1="${cy}" x2="${x2}" y2="${cy}"/>`+arrow;
    if(ann){if(/^[a-z]$/.test(ann))g+=`<circle cx="${x+w/2}" cy="${cy+26}" r="9"/><text x="${x+w/2}" y="${cy+30}" text-anchor="middle" class="small">${esc(ann)}</text>`;else g+=`<text x="${x+w/2}" y="${cy-20}" text-anchor="middle" class="small">${esc(ann)}</text>`;}
    return {g,w};
  };
  let maxW=0;
  rows.forEach(row=>{
    const toks=row.trim().split(/\s+/).filter(Boolean);let x=PAD;const cy=y+RH/2;let g='';
    toks.forEach(t=>{if(t==='...'){g+=`<text x="${x+4}" y="${cy+6}">· · ·</text>`;x+=36;return;}const n=node(t,x,cy)||gate(t,x,cy);if(n){g+=n.g;x+=n.w+8;}else{g+=`<text x="${x}" y="${cy+5}">${esc(t)}</text>`;x+=t.length*7+8;}});
    out+=g;maxW=Math.max(maxW,x+PAD);y+=RH;
  });
  const vw=Math.max(W,maxW);
  return `<div class="facilic-wrap"><svg class="facilic" width="${vw}" height="${y}" viewBox="0 0 ${vw} ${y}" role="img" aria-label="Facilic schematic">${out}</svg></div>`;
}


/* ---------- domain page ---------- */
function termCard(t){return `<article class="term" data-term="${t.k}">
  <h3>${esc(t.n)} ${masteryPill(t.k)}</h3><p>${esc(t.def)}</p><p><mark>${esc(t.tell)}</mark></p>
  <p class="chartline">${esc(t.chart)}</p>
  <p class="refs">Shea ${t.ch.map(chShort).join(', ')}</p>
  <button class="btn btn--small" data-drill="${t.k}">Drill this term</button></article>`;}
function renderDomain(k){
  const d=DOMAINS.find(x=>x.k===k);if(!d){show('home');return;}
  const st=domStats(k), G=GROUPS.find(g=>g.g===d.g);
  const terms=Object.values(TERMS).filter(t=>t.dom===k);
  const extraTerms=k==='fc'?[...new Set(V.filter(v=>v.dom==='fc').map(v=>v.t))].filter(t=>TERMS[t].dom!=='fc').map(t=>TERMS[t]):[];
  let ch=d.ch;if(!ch){const cnt={};terms.forEach(t=>t.ch.forEach(c=>cnt[c]=(cnt[c]||0)+1));ch=+Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0]?.[0]||16;}
  const mastered=masteredCount(terms.map(t=>t.k));
  $('#v-domain').innerHTML=`
  <div class="domhero"><div class="wrap">
    <p class="eyebrow">${esc(G.n)}</p>
    <h1 class="pagetitle">${esc(d.n)}</h1>
    <p class="chap">Shea ${chShort(ch)}: ${esc(CH[ch])}</p>
    <div class="domstats">
      <div><strong>${st.n}</strong>cases</div>
      <div><strong>${st.seen}</strong>seen</div>
      <div><strong>${st.pct===null?'—':st.pct+'%'}</strong>correct</div>
      <div><strong>${terms.length+extraTerms.length}</strong>terms</div>
      <div><strong>${mastered}</strong>mastered</div>
    </div>
    <div class="domactions">
      <button class="btn btn--solid btn--big" id="dPractice">Practice this domain</button>
      ${st.miss?`<button class="btn" id="dMiss">Review ${st.miss} missed</button>`:''}
      ${st.tl&&st.tl<st.n?`<button class="btn" id="dTl">Tagalog cases only (${st.tl})</button>`:''}
    </div>
  </div></div>
  <div class="pagepad">
    <h2 class="sectionh">Terms in this domain</h2>
    <div class="terms">${terms.map(termCard).join('')}</div>
    ${extraTerms.length?`<h2 class="sectionh">Mental status findings these look-alikes are confused with</h2><div class="terms">${extraTerms.map(termCard).join('')}</div>`:''}
  </div>`;
  const doms=new Set([k]);
  $('#dPractice').onclick=()=>startSession({doms,mode:'mix',label:d.n});
  const m=$('#dMiss');if(m)m.onclick=()=>startSession({doms,mode:'missed',len:999,lang:'all',label:d.n+': misses'});
  const t=$('#dTl');if(t)t.onclick=()=>startSession({doms,mode:'mix',lang:'tl',label:d.n+' in Tagalog'});
  bindDrill($('#v-domain'));
}


/* ---------- practice ---------- */
const UT='https://isaymotion.github.io/Tagalog/#/';
const UT_DOM={tp:['psych/s/mse-describe','MSE: describing observations'],sp:['psych/s/mse-describe','MSE: describing observations'],be:['psych/s/mse-describe','MSE: describing observations'],
  tc:['psych/s/delusions','Psychosis: delusions and thought disturbances'],pe:['psych/s/hallucinations','Psychosis: hallucinations and perceptual disturbances'],
  af:['psych/s/depression','Mood and depression'],cg:['psych/s/mse-cog','MSE: orientation, attention, memory'],in:['psych/s/mse-abstract','MSE: abstraction, judgment, insight'],
  md:['psych/s/depression','Mood and depression'],po:['psych/s/hallucinations','Psychosis: hallucinations and perceptual disturbances'],fc:['lessons/folk','Folk beliefs, spirits, and cultural explanations'],
  aa:['psych/s/mse-describe','MSE: describing observations'],at:['psych/s/mse-describe','MSE: describing observations'],
  su:['psych/s/suicide','Suicide risk assessment'],mi:['psych/s/mi','Motivational interviewing (substance use module)'],mm:['psych/discharge','Discharge and medication counseling']};
const UT_TERM={hiya:['lessons/values','Hiya, utang na loob, pakikisama, bahala na'],pakikisama:['lessons/values','Hiya, utang na loob, pakikisama, bahala na'],
  galang:['lessons/politeness','Po, opo, and respectful address'],podrop:['lessons/politeness','Po, opo, and respectful address'],
  samangloob:['lessons/idioms-distress','Idioms of distress'],nerbiyos:['lessons/idioms-distress','Idioms of distress'],lutang:['lessons/idioms-distress','Idioms of distress'],
  shared:['lessons/folk','Folk beliefs, spirits, and cultural explanations'],sanib:['lessons/folk','Folk beliefs, spirits, and cultural explanations'],grief:['lessons/folk','Folk beliefs, spirits, and cultural explanations'],
  command:['psych/s/suicide','Suicide and self-harm risk'],mania:['psych/s/mania','Mania and hypomania'],pressured:['psych/s/mania','Mania and hypomania'],foi:['psych/s/mania','Mania and hypomania'],clang:['psych/s/mania','Mania and hypomania'],grand:['psych/s/mania','Mania and hypomania']};
function utCard(v){const l=UT_TERM[v.t]||UT_DOM[domOf(v)]||UT_DOM[TERMS[v.t].dom];return l?`<div class="satagalog"><h3>Sa Tagalog</h3><p>Questions to ask about this in Tagalog: <a href="${UT+l[0]}" target="_blank" rel="noopener">${esc(l[1])}</a> in Usap Tayo.</p></div>`:'';}
function splitTL(t){const i=t.indexOf(' || ');return i<0?[t,'']:[t.slice(0,i),t.slice(i+4)];}
/* Audio skips stage directions in parentheses, e.g. "(ngumiti)". Usap Tayo's tools/import-msetrainer.js uses the same rule. */
function speakable(t){return String(t).replace(/\([^)]*\)/g,' ').replace(/\s+/g,' ').trim();}
function sayBtn(t){t=speakable(t);return t&&AUDIO.can(t)?`<button class="say" data-say="${esc(t)}" aria-label="Play Tagalog audio" title="Play">▶</button>`:'';}
function renderVig(x){
  const lines=x.split('\n');
  /* S: lines hold a facilic schematic (monospace, spacing kept); several consecutive S: lines form one block. */
  const sch=l=>renderSchematic([l.replace(/^S:\s?/,'')]);
  if(lines.some(l=>/^S:/.test(l))&&!lines.some(l=>/^[CP]:/.test(l))){
    let out='',buf=[];const flush=()=>{if(buf.length){out+=renderSchematic(buf);buf=[];}};
    lines.forEach(l=>{if(/^S:/.test(l))buf.push(l.replace(/^S:\s?/,''));else{flush();if(l.trim())out+=`<p class="obs">${esc(l.replace(/^O:\s*/,''))}</p>`;}});flush();return out;
  }
  if(!lines.some(l=>/^[CP]:/.test(l)))return `<p class="obs">${esc(x.replace(/^O:\s*/,''))}</p>`;
  const line=(cls,txt)=>{const [tl,en]=splitTL(txt);return `<div class="ln ${cls}">${en?`<p class="tlline"><span>${esc(tl)}</span>${sayBtn(tl)}</p><p class="en" hidden>${esc(en)}</p>`:`<p>${esc(tl)}</p>`}</div>`;};
  return `<div class="tx">`+lines.map(l=>{
    if(l.startsWith('C:'))return `<span class="sp">Clin.</span>`+line('cl',l.slice(2).trim());
    if(l.startsWith('P:'))return `<span class="sp">Pt.</span>`+line('pt',l.slice(2).trim());
    if(l.startsWith('S:'))return sch(l);
    return `<p class="ln note">${esc(l.replace(/^O:/,'').trim())}</p>`;
  }).join('')+`</div>`;
}
function showEnglish(){$$('.case .en').forEach(e=>e.hidden=false);const b=$('#showEn');if(b)b.remove();}
function bindSay(root){(root||document).querySelectorAll('[data-say]').forEach(b=>b.onclick=e=>{e.stopPropagation();AUDIO.play(b.dataset.say,b);});}
function renderSessBar(){
  const sb=$('#sessbar');
  if(!inProgress()){sb.innerHTML='';sb.hidden=true;return;}
  sb.hidden=false;const n=session.items.length;
  sb.innerHTML=`<div class="sessbar__inner"><div class="sessrow"><span class="what">${esc(session.label)}</span>
    <span class="count">Case <b>${session.i+1}</b> of ${n} · <b id="nright">${session.right}</b> correct</span>
    <a class="iconbtn" href="#/home" aria-label="Exit session (you can continue it later)" title="Exit (you can continue later)">${icon('x','')}</a></div>
    <div class="meter" aria-hidden="true"><span style="width:${(session.i+(session.cur&&session.cur.picked?1:0))/n*100}%"></span></div></div>`;
}
function renderPractice(){
  renderSessBar();
  const st=$('#stage');
  if(!session){
    st.innerHTML=`<div class="empty"><p class="eyebrow">Practice</p><h1 class="pagetitle">No session in progress</h1>
      <div class="actions"><a class="btn btn--solid" href="#/fresh">Start a ${settings.len}-case session</a><a class="btn" href="#/quick">Quick 10</a><a class="btn" href="#/custom">Custom session</a></div></div>`;return;
  }
  if(!session.items.length){
    st.innerHTML=`<div class="empty"><h1 class="pagetitle">No cases match</h1><p class="muted">Nothing fits these settings. Try "Focus on misses", a different language, or more domains.</p>
      <div class="actions"><a class="btn btn--solid" href="#/custom">Change settings</a><a class="btn" href="#/home">Home</a></div></div>`;return;
  }
  if(session.done)return renderSummary();
  const {v,opts}=session.cur;
  st.innerHTML=`
    ${session.drill?`<div class="drill"><span>Drilling <strong>${esc(TERMS[session.drill].n)}</strong> and the terms it gets confused with.</span></div>`:''}
    <article class="case" aria-label="Case vignette">${v.lang==='tl'?'<span class="langtag">Tagalog</span>':''}${v.lang==='tl'&&v.rev===0?'<span class="langtag draft" title="This Tagalog wording has not yet been reviewed">Draft translation</span>':''}${renderVig(v.x)}${v.lang==='tl'&&v.x.includes(' || ')?'<button class="btn btn--small" id="showEn">Show English</button>':''}</article>
    <p class="prompt" id="prompt">${esc(v.q||'Which term fits best?')}</p>
    <div class="opts" role="group" aria-labelledby="prompt">${opts.map((k,i)=>`<button class="opt" data-k="${k}"><span class="key" aria-hidden="true">${i+1}</span><span>${esc(TERMS[k].n)}</span></button>`).join('')}</div>
    <div id="fb" aria-live="polite"></div>`;
  st.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(b.dataset.k));
  const se=$('#showEn');if(se)se.onclick=showEnglish;
  bindSay(st);
  if(session.cur.picked)showFeedback();
}
function answer(k){
  const c=session.cur;if(!c||c.picked)return;
  c.picked=k;const ok=k===c.v.t;
  const s=stats.items[c.v.id]||{a:0,c:0,l:0};s.a++;if(ok)s.c++;s.l=ok?1:0;stats.items[c.v.id]=s;save();
  session.log.push({v:c.v,picked:k,ok});if(ok)session.right++;
  saveSession();renderSessBar();buildNav();
  showFeedback(true);
}
function showFeedback(focus){
  const {v,picked}=session.cur, T0=TERMS[v.t], P=TERMS[picked], ok=picked===v.t, n=session.items.length;
  showEnglish();
  const ask=v.ask?splitTL(v.ask):null;
  $$('.opt').forEach(b=>{
    b.disabled=true;const k=b.dataset.k;
    if(k===v.t)b.classList.add('correct');else if(k===picked)b.classList.add('wrong');else b.classList.add('dim');
  });
  $('#fb').innerHTML=`<div class="fbwrap ${ok?'ok':'no'}">
    <p class="verdict">${ok?'Correct':'Not quite'}: ${esc(T0.n)}<span class="domtag">${esc(DOM[domOf(v)])}</span></p>
    <p class="why">${esc(v.w)}</p>
    <div class="apart"><h3>Telling it apart</h3><p><mark>${esc(T0.tell)}</mark></p>
      ${ok?'':`<p class="picked"><strong>You chose ${esc(P.n)}.</strong> ${esc(P.def)}</p>`}</div>
    <div class="chart"><h3>${DOMG[T0.dom]!=='mse'?'At the bedside':'In the chart'}</h3><p class="chartline">${esc(T0.chart)}</p></div>
    ${ask?`<div class="ask"><h3>Ask it in Tagalog</h3><p class="tlline"><span>${esc(ask[0])}</span>${sayBtn(ask[0])}</p><p class="muted">${esc(ask[1])}</p></div>`:''}
    <p class="read"><strong>Further reading in Shea:</strong> ${T0.ch.map(c=>`${chShort(c)}, ${esc(CH[c])}`).join('; ')}.${v.lang==='tl'?' This Tagalog case is original, not from the book.':''}</p>
    ${utCard(v)}
    <div class="nextrow"><button class="btn btn--solid btn--big" id="next">${session.i+1<n?'Next case':'See results'}</button></div>
  </div>`;
  $('#next').onclick=next;
  bindSay($('#fb'));
  if(focus)$('#next').focus({preventScroll:true});
}
function next(){
  if(!session.cur||!session.cur.picked)return;
  session.i++;
  if(session.i>=session.items.length){session.done=true;}else setCur();
  saveSession();renderPractice();buildNav();
  const first=$('.opt')||$('.summary button');
  if(first)first.focus({preventScroll:true});
  scrollTop();
}
function scrollTop(){window.scrollTo({top:0,behavior:'auto'});}
function renderSummary(){
  const n=session.items.length, missed=session.log.filter(l=>!l.ok);
  $('#stage').innerHTML=`<section class="summary">
    <p class="eyebrow">${esc(session.label)} · results</p>
    <h2>You named ${session.right} of ${n} findings correctly.</h2>
    ${missed.length?`<h3>Worth another look</h3><ul class="missed">${missed.map(l=>`<li><strong>${esc(TERMS[l.v.t].n)}</strong><span>you chose ${esc(TERMS[l.picked].n)}</span></li>`).join('')}</ul>`
      :`<p>Every finding named. Try another domain or a longer session.</p>`}
    <div class="actions">${missed.length?`<button class="btn btn--solid" id="retry">Retry missed cases</button>`:''}<a class="btn" href="#/fresh">New session</a><a class="btn ghost" href="#/home">Home</a></div>
  </section>`;
  const r=$('#retry');if(r)r.onclick=()=>startSession({list:shuffle(missed.map(l=>l.v)),label:session.label+': retry'});
}

/* ---------- glossary ---------- */
function renderGlossary(){
  const q=($('#gq').value||'').trim().toLowerCase();
  let lastG=null;
  const html=DOMAINS.map(d=>{
    const ts=Object.values(TERMS).filter(t=>t.dom===d.k&&(!q||(t.n+' '+t.def+' '+t.tell).toLowerCase().includes(q)));
    if(!ts.length)return '';
    const gh=d.g!==lastG?`<p class="grouplabel">${esc(GROUPS.find(G=>G.g===d.g).n)}</p>`:'';lastG=d.g;
    return gh+`<div class="group"><h2>${esc(d.n)}</h2><div class="terms">${ts.map(termCard).join('')}</div></div>`;
  }).join('');
  $('#gloss').innerHTML=html||`<p class="muted" style="margin-top:20px">No terms match "${esc(q)}". Try a shorter search.</p>`;
  bindDrill($('#gloss'));
}
function bindDrill(root){root.querySelectorAll('[data-drill]').forEach(b=>b.onclick=()=>startDrill(b.dataset.drill));}
function startDrill(k){
  const p=shuffle(pool({drill:k,mode:'mix',lang:'all'}));
  startSession({list:p.slice(0,Math.max(settings.len,Math.min(p.length,12))),drill:k,label:'Drill: '+TERMS[k].n});
}

/* ---------- progress ---------- */
function renderProgress(){
  const it=stats.items, seen=V.filter(v=>it[v.id]);
  if(!seen.length){$('#prog').innerHTML=`<p class="stat-lead">Finish a few cases and your accuracy by domain will show up here.</p><a class="btn btn--solid" href="#/fresh">Start a session</a>`;return;}
  let A=0,C=0;seen.forEach(v=>{A+=it[v.id].a;C+=it[v.id].c});
  let lastPG=null;
  const rows=DOMAINS.map(d=>{
    const s=domStats(d.k), pct=s.pct||0;
    const gh=d.g!==lastPG?`<p class="section-h">${esc(GROUPS.find(G=>G.g===d.g).n)}</p>`:'';lastPG=d.g;
    return gh+`<a class="domrow" href="#/domain/${d.k}"><span>${esc(d.n)}</span><div class="bar" role="img" aria-label="${pct} percent"><span style="width:${pct}%"></span></div><span class="muted">${s.a?pct+'%':'not started'}</span></a>`;
  }).join('');
  const byTerm={};seen.forEach(v=>{const s=it[v.id],b=byTerm[v.t]||(byTerm[v.t]={a:0,c:0});b.a+=s.a;b.c+=s.c});
  const weak=Object.entries(byTerm).filter(([,s])=>s.c<s.a).sort((x,y)=>(x[1].c/x[1].a)-(y[1].c/y[1].a)||y[1].a-x[1].a).slice(0,8);
  $('#prog').innerHTML=`
    <p class="stat-lead">You've worked through ${seen.length} of ${V.length} cases, answering ${Math.round(C/A*100)}% correctly overall. Terms mastered: <strong>${masteredCount(Object.keys(TERMS))}</strong> of ${Object.keys(TERMS).length} (a term is mastered once you get it right on two different cases).</p>
    ${rows}
    <p class="section-h">Terms to revisit</p>
    ${weak.length?`<ul class="weak">${weak.map(([k,s])=>`<li><span><strong>${esc(TERMS[k].n)}</strong><br><span class="muted">${s.c} of ${s.a} correct</span></span><button class="btn btn--small" data-drill="${k}">Drill</button></li>`).join('')}</ul>`
      :`<p class="muted">No misses yet.</p>`}
    <button class="btn" id="reset">Reset progress</button>`;
  bindDrill($('#prog'));
  $('#reset').onclick=()=>{if(confirm('Clear all saved progress in this browser?')){stats.items={};save();session=null;saveSession();renderProgress();buildNav();}};
}


/* ---------- custom session sheet ---------- */
const dlg=$('#custom');
function renderPicker(){
  const groups=[{n:'Mental status',ds:DOMAINS.filter(d=>d.g==='mse')},{n:'Interviewing · Shea',ds:sheaDoms()},{n:'Tagalog and Filipino culture',ds:DOMAINS.filter(d=>d.g==='tl')}];
  $('#domPick').innerHTML=groups.map((G,gi)=>{
    const on=G.ds.filter(d=>settings.doms.has(d.k)).length;
    return `<details class="pickgrp" ${gi===0?'open':''}><summary>${esc(G.n)}<span class="cnt" data-cnt="${gi}">${on} of ${G.ds.length}</span></summary><div class="picklist">
      <label class="pick all"><input type="checkbox" data-grp="${gi}" ${on===G.ds.length?'checked':''}>Select all</label>
      ${G.ds.map(d=>`<label class="pick"><input type="checkbox" data-k="${d.k}" data-g="${gi}" ${settings.doms.has(d.k)?'checked':''}>${d.g!=='mse'&&d.ch?`<span class="ch">${chShort(d.ch)}</span>`:''}<span>${esc(d.n)}</span></label>`).join('')}
    </div></details>`;
  }).join('');
  const sync=()=>{
    groups.forEach((G,gi)=>{const boxes=[...dlg.querySelectorAll(`[data-g="${gi}"]`)],on=boxes.filter(b=>b.checked).length;
      dlg.querySelector(`[data-cnt="${gi}"]`).textContent=`${on} of ${boxes.length}`;const a=dlg.querySelector(`[data-grp="${gi}"]`);a.checked=on===boxes.length;a.indeterminate=on>0&&on<boxes.length;});
    const n=pool(readPicker()).length;
    $('#poolCount').textContent=n?`${n} matching case${n===1?'':'s'}`:'No cases match';
    $('#customStart').disabled=!n;
  };
  dlg.querySelectorAll('[data-grp]').forEach(a=>a.onchange=()=>{dlg.querySelectorAll(`[data-g="${a.dataset.grp}"]`).forEach(b=>b.checked=a.checked);sync();});
  dlg.querySelectorAll('[data-k]').forEach(b=>b.onchange=sync);
  sync();
}
function readPicker(){return{doms:new Set([...dlg.querySelectorAll('[data-k]:checked')].map(b=>b.dataset.k)),mode:$('#mode').value,lang:$('#lang').value};}
function openCustom(){$('#mode').value=settings.mode;$('#lang').value=settings.lang;$('#len').value=String(settings.len);renderPicker();closeDrawer();if(!dlg.open)dlg.showModal();}
['#mode','#lang','#len'].forEach(s=>$(s).addEventListener('change',()=>renderPickerCount()));
function renderPickerCount(){const n=pool(readPicker()).length;$('#poolCount').textContent=n?`${n} matching case${n===1?'':'s'}`:'No cases match';$('#customStart').disabled=!n;}
$('#customForm').addEventListener('submit',e=>{
  const sub=e.submitter;if(!sub||sub.value!=='start')return;
  const r=readPicker();if(!r.doms.size){e.preventDefault();return;}
  settings.doms=r.doms;settings.mode=r.mode;settings.lang=r.lang;settings.len=+$('#len').value;savePrefs();
  setTimeout(()=>startSession({doms:settings.doms}),0);
});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});


/* ---------- Tagalog audio: Usap Tayo's recorded pack, then a Filipino device voice ---------- */
const AUDIO=(()=>{
  const BASE='https://isaymotion.github.io/Tagalog/audio/';
  let keys=null, cur=null;
  const fil=()=>('speechSynthesis' in window)?speechSynthesis.getVoices().find(v=>/^(fil|tl)/i.test(v.lang)):null;
  fetch(BASE+'manifest.json',{cache:'no-cache'}).then(r=>r.ok?r.json():null).then(m=>{
    if(m&&Array.isArray(m.keys)){keys=new Set(m.keys);if(view==='practice'&&session&&session.cur&&session.cur.v.lang==='tl')renderPractice();}
  }).catch(()=>{});
  return {
    can:t=>!!(keys&&keys.has(AudioKey(t)))||!!fil(),
    play(t,btn){
      if(cur){cur.pause();cur=null;}
      if('speechSynthesis' in window)speechSynthesis.cancel();
      if(keys&&keys.has(AudioKey(t))){cur=new Audio(BASE+AudioKey(t)+'.mp3');if(btn)btn.classList.add('playing');cur.onended=cur.onerror=()=>btn&&btn.classList.remove('playing');cur.play().catch(()=>btn&&btn.classList.remove('playing'));return;}
      const v=fil();if(v){const u=new SpeechSynthesisUtterance(t);u.voice=v;u.lang=v.lang;u.rate=.9;speechSynthesis.speak(u);}
    }
  };
})();

document.addEventListener('keydown',e=>{
  if(view!=='practice'||!session||session.done||dlg.open)return;
  if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;
  if(e.key>='1'&&e.key<='4'&&session.cur&&!session.cur.picked){const b=$$('.opt')[+e.key-1];if(b){e.preventDefault();answer(b.dataset.k);}}
  else if(e.key==='Enter'&&session.cur&&session.cur.picked&&e.target.id!=='next'&&!e.target.closest('a,button')){e.preventDefault();next();}
});

/* ===== Menu (NAV groups): MSE's v5 sidebar sections, now the shared sidenav (docked >=1100px, drawer below) ===== */
function domStats(k){
  const vs=V.filter(v=>domOf(v)===k);let a=0,c=0,seen=0,miss=0;
  vs.forEach(v=>{const s=stats.items[v.id];if(s){seen++;a+=s.a;c+=s.c;if(s.l===0)miss++;}});
  return {n:vs.length,seen,a,c,miss,pct:a?Math.round(c/a*100):null,tl:vs.filter(v=>v.lang==='tl').length};
}
function navKey(){return view==='domain'?'domain/'+domView:view;}
function buildNav(){
  const cur=navKey(), mc=missedCount();
  const item=(r,ic,label,extra,raw)=>{const on=cur===r;return `<li><a class="nav-item${on?' is-active':''}" href="#/${raw||r}"${on?' aria-current="page"':''}>${icon(ic)}<span>${esc(label)}</span>${extra||''}</a></li>`;};
  const dlink=(d,num)=>{const st=domStats(d.k),on=cur==='domain/'+d.k;return `<li><a class="nav-item nav-item--sub${on?' is-active':''}" href="#/domain/${d.k}"${on?' aria-current="page"':''}><span class="nav-num">${esc(num)}</span><span>${esc(d.n)}</span>${st.pct!==null?`<span class="nav-pct">${st.pct}%</span>`:''}</a></li>`;};
  const group=(label,items)=>`<div class="nav-group"><div class="nav-label">${esc(label)}</div><ul>${items}</ul></div>`;
  const mse=DOMAINS.filter(d=>d.g==='mse'), shea=sheaDoms(), tl=DOMAINS.filter(d=>d.g==='tl');
  let html=
    group(t('nav.sessions'),
      item('home','home',t('nav.home'))+
      (inProgress()?item('practice','bolt',`Session: case ${session.i+1} of ${session.items.length}`):item('quick','bolt',t('nav.quickSession'),'<span class="nav-pct">10 cases</span>'))+
      item('misses','redo',t('nav.reviewMisses'),mc?`<span class="badge">${mc}</span>`:'')+
      item('custom','sliders',t('nav.customSession'))+
      item('glossary','book',t('nav.glossary'))+
      item('progress','chart',t('nav.progress')))+
    group(t('nav.mse'),mse.map((d,i)=>dlink(d,i+1)).join(''))+
    group(t('nav.shea'),shea.map(d=>dlink(d,typeof d.ch==='number'?d.ch:d.ch.slice(1))).join(''))+
    group(t('nav.tagalog'),item('tagalog','chat',t('nav.tagalogCases'),`<span class="nav-pct">${V.filter(v=>v.lang==='tl').length}</span>`)+tl.map(d=>dlink(d,d.ch)).join(''))+
    group(t('nav.app'),
      item('backup','save',t('nav.backup'))+
      item('whats-new','news',t('nav.whatsNew'),'<span class="badge" data-badge="news" hidden></span>')+
      item('about','info',t('nav.about')));
  const others=otherApps();   // empty while window.SHOW_OTHER_APPS is false (data/app-meta.js)
  if(others.length){
    html+=group(t('nav.otherApps'),others.map(a=>`<li><a class="nav-item" href="${esc(a.href)}" target="_blank" rel="noopener">${icon('external')}<span>${esc(a.name)}</span><span class="sr-only"> ${esc(t('nav.newTab'))}</span></a></li>`).join(''));
  }
  document.getElementById('sidenav-body').innerHTML=html;
  const key=view==='home'||view==='practice'||view==='glossary'||view==='progress'?view:'';
  document.querySelectorAll('.tabbar [data-tab]').forEach(tb=>{
    if(tb.tagName!=='A')return;
    const on=tb.getAttribute('data-tab')===key;
    tb.classList.toggle('is-active',on);if(on)tb.setAttribute('aria-current','page');else tb.removeAttribute('aria-current');
  });
  updateNavBadges();
}

/* ---------- home ---------- */
function whatsNewTeaser(){
  const w=CHANGELOG[0];if(!w)return '';
  return `<a class="card news-strip" href="#/whats-new"><span class="badge" data-badge="news" hidden></span><strong>${esc(t('nav.whatsNew'))}</strong><span class="muted">${esc(w.teaser?w.teaser:tf('home.latest',{title:w.title,version:w.version}))}</span></a>`;
}
function renderHome(){
  const it=stats.items, seen=V.filter(v=>it[v.id]);let A=0,C=0;seen.forEach(v=>{A+=it[v.id].a;C+=it[v.id].c});
  const pct=A?Math.round(C/A*100):0, mc=missedCount(), circ=2*Math.PI*30;
  const weak=DOMAINS.map(d=>({d,s:domStats(d.k)})).filter(x=>x.s.a>=3&&x.s.pct<100).sort((x,y)=>x.s.pct-y.s.pct).slice(0,3);
  const tlN=V.filter(v=>v.lang==='tl').length;
  const cta=inProgress()
    ?`<a class="btn btn--solid btn--big" href="#/practice">Continue session · case ${session.i+1} of ${session.items.length}</a>
      <a class="btn btn--ghost" href="#/custom">Custom session</a><p class="sub">${esc(session.label)}. <a href="#/fresh">Start a new ${settings.len}-case session instead</a></p>`
    :`<a class="btn btn--solid btn--big" href="#/fresh">Start a ${settings.len}-case session</a>
      <a class="btn btn--ghost" href="#/custom">Custom session</a><p class="sub">${esc(describeDoms(settings.doms))} · ${settings.mode==='mix'?'focus on misses':settings.mode==='new'?'only unseen':'only missed'} · ${settings.lang==='all'?'English and Tagalog':settings.lang==='tl'?'Tagalog':'English'}</p>`;
  $('#v-home').innerHTML=`
  <section class="hero"><div class="wrap hero__inner herogrid">
    <div>
      <p class="eyebrow">Mental status examination · Clinical interviewing</p>
      <h1>Read the case. <em>Name the finding.</em></h1>
      <p class="lead">${V.length} fictional cases across the mental status exam and Shea's interviewing techniques, with look-alike answers, telling-apart rules and chart lines.</p>
      <div class="cta">${cta}</div>
    </div>
    <div class="statcard">
      <h2>Your progress</h2>
      <div class="ring">
        <svg viewBox="0 0 76 76" role="img" aria-label="${pct} percent correct"><circle class="trk" cx="38" cy="38" r="30"/><circle class="val" cx="38" cy="38" r="30" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ*(1-pct/100)}" transform="rotate(-90 38 38)"/></svg>
        ${A?`<div class="bignum">${pct}%<small>correct</small></div>`:`<div class="bignum none">Answer a few cases and your accuracy shows here.</div>`}
      </div>
      <div class="minis"><div><strong>${seen.length} / ${V.length}</strong>cases seen</div><div><strong>${mc}</strong>missed last time</div></div>
    </div>
  </div></section>
  <div class="pagepad homebody">
    ${whatsNewTeaser()}
    <div class="cards">
      <a class="card tile" href="#/misses"><h3>Review misses${mc?`<span class="badge">${mc}</span>`:''}</h3><p>${mc?'Cases you got wrong the last time you saw them.':'Nothing to review yet. Misses collect here as you practice.'}</p><span class="go">${mc?'Review now':'Start practicing'}</span></a>
      <a class="card tile" href="${weak.length?'#/domain/'+weak[0].d.k:'#/progress'}"><h3>Weak spots</h3>${weak.length?`<ul class="weaklist">${weak.map(x=>`<li><span>${esc(x.d.n)}</span><span>${x.s.pct}%</span></li>`).join('')}</ul>`:'<p>Your lowest-scoring domains show up here after a few cases.</p>'}<span class="go">${weak.length?'Practice '+esc(weak[0].d.n):'See progress'}</span></a>
      <a class="card tile feature" href="#/tagalog"><h3>Tagalog cases</h3><p>${tlN} original cases with Tagalog patient lines, audio, and "Ask it in Tagalog".</p><span class="go">Practice in Tagalog</span></a>
      <a class="card tile" href="#/domain/su"><h3>Suicide and violence assessment</h3><p>The CASE and CADE approaches, risk factors versus warning signs, and the tetrads of lethality from Shea Ch. 17–18.</p><span class="go">Practice safety assessment</span></a>
      <a class="card tile" href="#/domain/mi"><h3>MI and the Medication Interest Model</h3><p>OARS, change talk, the Choice Triad and the medication toolboxes from Ch. 22–23.</p><span class="go">Open collaborative interviewing</span></a>
      <a class="card tile" href="#/domain/fc"><h3>Culture or pathology?</h3><p>Filipino look-alikes: hiya, sama ng loob, kulam, lutang, sanib and more.</p><span class="go">Open domain</span></a>
      <a class="card tile" href="#/glossary"><h3>Glossary</h3><p>${Object.keys(TERMS).length} terms with definitions, telling-apart rules and chart lines.</p><span class="go">Browse terms</span></a>
    </div>
  </div>`;
}

/* ---------- What's new (shared .news__* markup; opening the page marks everything as seen) ---------- */
function renderNews(){
  const unseen={};unseenNews().forEach(e=>{unseen[String(e.version)]=true;});
  $('#v-whats-new').innerHTML='<div class="news"><header class="page__head"><h1>'+esc(t('nav.whatsNew'))+'</h1><p>'+esc(t('news.intro1'))+'<span class="news__new">'+esc(t('news.new'))+'</span>'+esc(t('news.intro2'))+'</p></header>'+
    CHANGELOG.map(e=>{
      const isNew=!!unseen[String(e.version)];
      return '<article class="news__entry'+(isNew?' is-new':'')+'"><div class="news__date"><time datetime="'+esc(e.date)+'">'+esc(fmtDate(e.date))+'</time><span class="news__ver">'+esc(tf('news.version',{v:e.version}))+'</span>'+(isNew?'<span class="news__new">'+esc(t('news.new'))+'</span>':'')+'</div>'+
        '<div class="news__body"><h2>'+esc(e.title)+'</h2>'+(e.summary?'<p>'+esc(e.summary)+'</p>':'')+'<ul>'+
        (e.items||[]).map(it=>{
          const ty=String(it.type||'feature');let tyLabel=t('news.type.'+ty);
          if(tyLabel==='news.type.'+ty)tyLabel=ty.charAt(0).toUpperCase()+ty.slice(1);
          return '<li><span class="news__type news__type--'+esc(ty)+'">'+esc(tyLabel)+'</span><span class="news__text">'+esc(it.text)+(it.href?' <a href="'+esc(it.href)+'">'+esc(t('news.open'))+'</a>':'')+'</span></li>';
        }).join('')+'</ul></div></article>';
    }).join('')+
    '<p class="news__note">'+esc(t('news.note'))+'<a href="mailto:isaymotion@gmail.com">isaymotion@gmail.com</a>.</p></div>';
  store.set('seenNews',latestNewsVersion());
  updateNavBadges();
}

/* ---------- About: v5 text, plus Settings (language, theme, text size) and Tips ---------- */
function segGroup(name,label,opts,cur){
  return '<fieldset class="setting"><legend>'+esc(label)+'</legend><div class="seg">'+opts.map(o=>'<label><input type="radio" name="'+esc(name)+'" value="'+esc(o[0])+'"'+(cur===o[0]?' checked':'')+'><span>'+esc(o[1])+'</span></label>').join('')+'</div></fieldset>';
}
function renderAbout(){
  $('#aboutVersion').innerHTML='<strong>'+esc(APP_NAME)+'</strong> · '+esc(t('about.version'))+' '+esc(META.version||'')+' · <a href="#/whats-new">'+esc(t('nav.whatsNew'))+'</a>';
  const sizes=TEXT_SIZES.map(z=>[z[0],t(z[1])]);
  $('#aboutSettings').innerHTML='<h2>'+esc(t('about.settings'))+'</h2><div class="card">'+
      segGroup('lang',t('about.language'),[['en',t('about.langEn')],['tl',t('about.langTl')]],lang)+
      segGroup('theme',t('theme.title'),[['auto',t('theme.auto')],['light',t('theme.light')],['dark',t('theme.dark')]],getTheme())+
      segGroup('aboutTextSize',t('textsize.title'),sizes,String(store.get('textSize','100')))+
    '</div><h2>'+esc(t('about.tips'))+'</h2><div class="card"><ul>'+
      [1,2,3,4,5].map(i=>'<li>'+rich(t('about.tip'+i))+'</li>').join('')+
      '<li>During a session, keys <kbd>1</kbd> to <kbd>4</kbd> answer and <kbd>Enter</kbd> goes to the next case.</li>'+
    '</ul></div>';
}
document.getElementById('main').addEventListener('change',e=>{   // About > Settings
  const n=e.target&&e.target.name, v=e.target&&e.target.value;
  if(n==='lang'){setLang(v);const again=document.querySelector('input[name="lang"]:checked');if(again)again.focus();}
  else if(n==='theme')setTheme(v);
  else if(n==='aboutTextSize'){store.set('textSize',v);applyTextSize(v);}
});

/* ---------- Search: topbar box with suggestions over SEARCH_INDEX, full results at #/search/<q> ----------
   Index: every term (name, definition, telling-apart rule), every domain (name, group, Shea chapter title),
   the Tagalog cases and the shell pages. Cases have no titles, and their text would give away the answer, so they are not indexed. */
var SEARCH_INDEX=null;
function searchIndex(){
  if(SEARCH_INDEX)return SEARCH_INDEX;
  const out=[];
  DOMAINS.forEach(d=>{
    const G=GROUPS.find(g=>g.g===d.g);
    out.push({kind:'Domain',title:d.n,where:G?G.n:'',text:(d.ch&&CH[d.ch]?'Shea '+chShort(d.ch)+': '+CH[d.ch]+'. ':'')+Object.values(TERMS).filter(x=>x.dom===d.k).map(x=>x.n).join(', '),href:'#/domain/'+d.k,w:3});
  });
  Object.values(TERMS).forEach(x=>{
    out.push({kind:'Term',title:x.n,where:DOM[x.dom]||'',text:x.def+' '+x.tell,href:'#/domain/'+x.dom+'/'+x.k,w:2});
  });
  out.push({kind:'Practice',title:t('nav.tagalogCases'),where:t('nav.tagalog'),text:'Tagalog patient lines, audio, Ask it in Tagalog, Filipino culture',href:'#/tagalog',w:1});
  out.push({kind:'Practice',title:t('nav.reviewMisses'),where:'',text:'Cases you got wrong the last time you saw them',href:'#/misses',w:0});
  out.push({kind:'Page',title:t('nav.glossary'),where:'',text:'Every finding and technique, with definitions, telling-apart rules and chart lines',href:'#/glossary',w:0});
  out.push({kind:'Page',title:t('nav.progress'),where:'',text:'Accuracy by domain, terms mastered, terms to revisit',href:'#/progress',w:0});
  SEARCH_INDEX=out;return out;
}
function shellIndex(){
  return [
    {title:t('nav.whatsNew'),text:t('search.newsText')+' '+CHANGELOG.map(w=>w.title).join('. '),href:'#/whats-new',kind:t('nav.app')},
    {title:t('nav.about'),text:t('search.aboutText'),href:'#/about',kind:t('nav.app')}
  ];
}
var sugIndex=-1, sugTimer=null, searchKind='', searchQ='';
function terms(q){return String(q).toLowerCase().replace(/[^\p{L}\p{N}\-\s.]/gu,' ').split(/\s+/).filter(w=>w.length>0);}
function runSearch(q){
  const ts=terms(q);if(!ts.length)return [];
  const out=[];
  shellIndex().concat(searchIndex()).forEach(e=>{
    const ti=String(e.title||'').toLowerCase(), x=String(e.text||'').toLowerCase();let score=e.w||0, ok=true;
    ts.forEach(w=>{const iT=ti.indexOf(w), iX=x.indexOf(w);if(iT<0&&iX<0){ok=false;return;}if(iT>=0)score+=iT===0?12:8;if(iX>=0)score+=2;});
    if(ok)out.push({e,score});
  });
  out.sort((a,b)=>b.score-a.score);
  return out.map(r=>r.e);
}
function highlight(text,ts){
  text=String(text==null?'':text);if(!ts.length)return esc(text);
  const re=new RegExp('('+ts.map(escRe).join('|')+')','gi');
  return text.split(re).map((seg,i)=>i%2?'<mark>'+esc(seg)+'</mark>':esc(seg)).join('');
}
function snippet(text,ts,len){
  text=String(text||'');if(text.length<=len)return text;
  const low=text.toLowerCase();let at=-1;
  for(let i=0;i<ts.length&&at<0;i++)at=low.indexOf(ts[i]);
  const start=Math.max(0,(at<0?0:at)-40);
  return (start>0?'…':'')+text.slice(start,start+len)+(start+len<text.length?'…':'');
}
function openSuggest(q){
  q=String(q||'').trim();
  if(!q){closeSuggest();return;}
  const ts=terms(q), res=runSearch(q), shown=res.slice(0,6);
  sugIndex=-1;qInput.removeAttribute('aria-activedescendant');
  if(!shown.length)suggestBox.innerHTML='<div class="suggest__empty">'+esc(tf('search.noMatches',{q}))+'</div>';
  else suggestBox.innerHTML=shown.map((e,i)=>'<a class="suggest__item" role="option" id="sug-'+i+'" href="'+esc(e.href)+'" aria-selected="false"><span class="suggest__meta"><span class="kind">'+esc(e.kind||'')+'</span>'+(e.where?'<span>'+esc(e.where)+'</span>':'')+'</span><span class="suggest__title">'+highlight(e.title,ts)+'</span><span class="suggest__text">'+highlight(snippet(e.text,ts,140),ts)+'</span></a>').join('')+
    '<a class="suggest__item suggest__all" role="option" id="sug-all" href="#/search/'+encodeURIComponent(q)+'" aria-selected="false">'+esc(tf(res.length===1?'search.seeAll1':'search.seeAllN',{n:res.length}))+'</a>';
  suggestBox.hidden=false;qInput.setAttribute('aria-expanded','true');
}
function closeSuggest(){
  if(!suggestBox)return;
  suggestBox.hidden=true;sugIndex=-1;
  qInput.setAttribute('aria-expanded','false');qInput.removeAttribute('aria-activedescendant');
}
function moveSug(d){
  const items=suggestBox.querySelectorAll('.suggest__item');if(!items.length)return;
  sugIndex=(sugIndex+d+items.length)%items.length;
  items.forEach((it,i)=>it.setAttribute('aria-selected',String(i===sugIndex)));
  qInput.setAttribute('aria-activedescendant',items[sugIndex].id);
  items[sugIndex].scrollIntoView({block:'nearest'});
}
qInput.addEventListener('input',()=>{clearTimeout(sugTimer);sugTimer=setTimeout(()=>openSuggest(qInput.value),110);});
qInput.addEventListener('focus',()=>{if(qInput.value.trim())openSuggest(qInput.value);});
qInput.addEventListener('keydown',e=>{
  if(e.key==='ArrowDown'){e.preventDefault();if(suggestBox.hidden)openSuggest(qInput.value);moveSug(1);}
  else if(e.key==='ArrowUp'){e.preventDefault();moveSug(-1);}
  else if(e.key==='Escape'){closeSuggest();qInput.blur();}
  else if(e.key==='Enter'){
    e.preventDefault();
    const items=suggestBox.querySelectorAll('.suggest__item');
    const target=sugIndex>-1&&items[sugIndex]?items[sugIndex].getAttribute('href'):(qInput.value.trim()?'#/search/'+encodeURIComponent(qInput.value.trim()):null);
    closeSuggest();
    if(target){if(location.hash===target)route();else location.hash=target;qInput.blur();}
  }
});
suggestBox.addEventListener('mousedown',e=>e.preventDefault());
qInput.addEventListener('blur',()=>setTimeout(closeSuggest,120));
document.addEventListener('keydown',e=>{
  const inField=!!(e.target.matches&&e.target.matches('input, textarea, select'));
  if(dlg.open)return;
  if((e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!inField)||((e.key==='k'||e.key==='K')&&(e.ctrlKey||e.metaKey)&&!e.altKey)){e.preventDefault();closeDrawer();qInput.focus();qInput.select();}
});
function renderSearch(){
  const q=searchQ, ts=terms(q), res=runSearch(q), kinds=[];
  res.forEach(e=>{const k=e.kind||'';if(k&&kinds.indexOf(k)<0)kinds.push(k);});
  if(searchKind&&kinds.indexOf(searchKind)<0)searchKind='';
  const shown=searchKind?res.filter(e=>e.kind===searchKind):res;
  $('#v-search').innerHTML='<header class="page__head"><h1>'+esc(t('search.title'))+'</h1><p>'+esc(q?tf(shown.length===1?'search.count1':'search.countN',{n:shown.length,q}):t('search.prompt'))+'</p></header>'+
    (kinds.length>1?'<div class="filters" role="group" aria-label="'+esc(t('search.filterBy'))+'"><button type="button" class="filter" data-kind="" aria-pressed="'+(!searchKind)+'">'+esc(t('search.all'))+'</button>'+kinds.map(k=>'<button type="button" class="filter" data-kind="'+esc(k)+'" aria-pressed="'+(searchKind===k)+'">'+esc(k)+'</button>').join('')+'</div>':'')+
    (shown.length?'<div class="results">'+shown.map(e=>'<div class="result"><a href="'+esc(e.href)+'"><span class="result__meta"><span class="kind">'+esc(e.kind||'')+'</span>'+(e.where?'<span>'+esc(e.where)+'</span>':'')+'</span><span class="result__title">'+highlight(e.title,ts)+'</span><span class="result__text">'+highlight(snippet(e.text,ts,220),ts)+'</span></a></div>').join('')+'</div>'
      :(q?'<div class="empty"><h2>'+esc(t('search.noneTitle'))+'</h2><p>'+esc(t('search.noneText'))+'</p></div>':''));
  if(document.activeElement!==qInput)qInput.value=q;
}
document.getElementById('v-search').addEventListener('click',e=>{
  const f=e.target.closest('.filter[data-kind]');if(f){searchKind=f.getAttribute('data-kind');renderSearch();}
});

/* ---------- navigation: #/home, #/domain/<k>[/<term>], #/practice, #/glossary, #/progress, #/whats-new, #/about, #/search/<q>
   Actions: #/quick, #/fresh, #/misses, #/tagalog, #/custom, #/backup   (old #/new still opens What's new)
   Deep links: #/practice?lang=tl&dom=fc, #/practice?drill=<term key> ---------- */
const PANELS=['home','domain','practice','glossary','progress','whats-new','about','search'];
function viewTitle(v){
  if(v==='home')return '';
  if(v==='domain')return DOM[domView]||'';
  if(v==='practice')return t('nav.practice');
  if(v==='glossary')return t('nav.glossary');
  if(v==='progress')return t('nav.progress');
  if(v==='whats-new')return t('nav.whatsNew');
  if(v==='about')return t('nav.about');
  if(v==='search')return t('search.title');
  return '';
}
function setPanels(v){PANELS.forEach(k=>$('#v-'+k).hidden=k!==v);const tt=viewTitle(v);document.title=tt?tt+' — '+APP_NAME:APP_NAME;}
function show(v,push){
  if(!PANELS.includes(v))v='home';
  if(push!==false){location.hash='#/'+v;return;}
  view=v;
  setPanels(v);
  if(v==='home')renderHome();
  if(v==='practice')renderPractice();
  if(v==='glossary')renderGlossary();
  if(v==='progress')renderProgress();
  if(v==='whats-new')renderNews();
  if(v==='about')renderAbout();
  if(v==='search')renderSearch();
  buildNav();
  closeDrawer();
}
function replaceHash(h){try{history.replaceState(history.state,'',h);}catch(e){}}
const ACTIONS={
  quick:()=>startSession({doms:ALL(),mode:'mix',len:10,label:'Quick session'}),
  fresh:()=>startSession({doms:settings.doms}),
  misses:()=>{const n=missedCount();if(!n){replaceHash('#/home');show('home',false);return;}startSession({doms:ALL(),mode:'missed',lang:'all',len:Math.min(n,20),label:'Review misses'});},
  tagalog:()=>startSession({doms:ALL(),mode:'mix',lang:'tl',label:'Tagalog cases'})
};
function applyQuery(q){
  const p=new URLSearchParams(q||'');
  if(p.get('lang')&&['all','en','tl'].includes(p.get('lang')))settings.lang=p.get('lang');
  if(p.get('dom')){const ks=p.get('dom').split(',').filter(k=>DOM[k]);if(ks.length)settings.doms=new Set(ks);}
  savePrefs();
  if(p.get('drill')&&TERMS[p.get('drill')])startDrill(p.get('drill'));else startSession({doms:settings.doms});
}
let lastRoute=null;
/* #/custom and #/backup act on top of the page you were on: the address goes back to that page (rendering it first on a cold start). */
function stayOnLast(){
  const back=lastRoute||'#/home';replaceHash(back);scrollKey=back;
  if(!lastRoute)route({keepScroll:true});
}
function route(opts){
  opts=opts||{};
  closeSuggest();closeDrawer();
  let restoreY=null;
  if(!opts.keepScroll){
    scrollMemo[scrollKey]=window.scrollY;
    scrollKey=location.hash||'#/';
    restoreY=fromHistory&&has(scrollMemo,scrollKey)?scrollMemo[scrollKey]:null;
    fromHistory=false;
  }
  const raw=location.hash.replace(/^#\/?/,''), qi=raw.indexOf('?'), path=qi<0?raw:raw.slice(0,qi), q=qi<0?'':raw.slice(qi+1);
  const seg=path.split('/'), h=seg[0], arg=seg[1];
  if(h==='custom'){stayOnLast();openCustom();return;}
  if(h==='backup'){
    stayOnLast();
    setTimeout(()=>{const el=document.getElementById('backup');if(el){el.scrollIntoView({block:'center'});const b=document.getElementById('bk-export');if(b)b.focus({preventScroll:true});}},60);
    return;
  }
  if(ACTIONS[h]){
    replaceHash('#/practice');lastRoute='#/practice';scrollKey='#/practice';view='practice';setPanels('practice');ACTIONS[h]();buildNav();return;
  }
  if(h==='practice'&&q){replaceHash('#/practice');lastRoute='#/practice';scrollKey='#/practice';view='practice';setPanels('practice');applyQuery(q);return;}
  if(h==='new'){replaceHash('#/whats-new');scrollKey='#/whats-new';show('whats-new',false);}
  else if(h==='search'){let s=seg.slice(1).join('/');try{s=decodeURIComponent(s);}catch(e){}if(s!==searchQ)searchKind='';searchQ=s;show('search',false);}
  else if(h==='domain'&&arg&&DOM[arg]){domView=arg;view='domain';setPanels('domain');renderDomain(arg);buildNav();closeDrawer();}
  else show(PANELS.includes(h)&&h!=='domain'?h:'home',false);
  lastRoute=location.hash;
  if(opts.keepScroll)return;
  if(restoreY!==null){requestAnimationFrame(()=>window.scrollTo(0,restoreY));return;}
  if(h==='domain'&&seg[2]){   // #/domain/<k>/<term>: open at that term card (from search)
    const card=document.querySelector('#v-domain [data-term="'+CSS.escape(seg[2])+'"]');
    if(card){card.scrollIntoView({block:'start'});card.classList.add('is-target');return;}
  }
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',()=>{syncHist();route();});

/* ===== Mobile tab bar: hides on scroll down, shows on scroll up ===== */
(function initTabbar(){
  let lastY=window.scrollY, hold=0, ticking=false;
  function showBar(){if(document.body.classList.contains('tabbar-hidden'))document.body.classList.remove('tabbar-hidden');}
  function hideBar(){if(!document.body.classList.contains('tabbar-hidden'))document.body.classList.add('tabbar-hidden');}
  function update(){
    ticking=false;
    const y=window.scrollY, dy=y-lastY, max=document.documentElement.scrollHeight-window.innerHeight;
    const a=document.activeElement, typing=!!(a&&a.matches&&a.matches('input, textarea, select'));
    if(Date.now()<hold||document.body.classList.contains('drawer-open')||typing||y<80||y>max-80){showBar();lastY=y;}
    else if(dy>10){hideBar();lastY=y;}
    else if(dy<-6){showBar();lastY=y;}
  }
  window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(update);}},{passive:true});
  window.addEventListener('hashchange',()=>{hold=Date.now()+700;showBar();});
  document.addEventListener('focusin',e=>{if(e.target.matches&&e.target.matches('input, textarea, select'))showBar();});
  new MutationObserver(()=>{if(document.body.classList.contains('drawer-open'))showBar();}).observe(document.body,{attributes:true,attributeFilter:['class']});
})();

/* ===== Backup: export / import / undo =====
   Exports every key under PREFIX plus MSE's two v5 keys by exact name: the progress store ("mse-trainer-v1") and the
   resumable session ("mse-trainer-session"). Backup files made by v5 ({app:'mse-trainer', version:1, exported, stats})
   still import: their stats replace the progress store and everything else on this device is kept, as v5 did. */
var BK_APP='mse-trainer', BK_UNDO=BK_APP+':undo-import';
var LEGACY_KEYS=[STORE,SESS_KEY];
function bkCollect(){
  const data={};
  try{
    for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.indexOf(PREFIX)===0)data[k.slice(PREFIX.length)]=localStorage.getItem(k);}
    LEGACY_KEYS.forEach(k=>{const v=localStorage.getItem(k);if(v!=null)data[k]=v;});
  }catch(e){}
  return data;
}
function bkReplace(data){
  const keys=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&(k.indexOf(PREFIX)===0||LEGACY_KEYS.indexOf(k)>-1))keys.push(k);}
  keys.forEach(k=>localStorage.removeItem(k));
  Object.keys(data).forEach(k=>localStorage.setItem(LEGACY_KEYS.indexOf(k)>-1?k:PREFIX+k,data[k]));
}
function bkSummary(data){
  let pr=null;try{pr=data&&data[STORE]?JSON.parse(data[STORE]):null;}catch(e){pr=null;}
  const parts=[];
  if(pr&&pr.items&&typeof pr.items==='object'){
    const items=pr.items, n=Object.keys(items).length;
    if(n){
      let mastered=0;
      Object.keys(CASES_BY_TERM).forEach(k=>{let ok=0,miss=0;CASES_BY_TERM[k].forEach(v=>{const s=items[v.id];if(!s)return;if(s.l===1)ok++;else miss++;});if(ok>=2&&miss===0)mastered++;});
      parts.push(tf('backup.progress',{cases:n,mastered}));
    }
  }
  if(data&&data[SESS_KEY])parts.push(t('backup.session'));
  if(parts.length)return parts.join(', ');
  const n=Object.keys(data||{}).filter(k=>k!=='lastBackup'&&k!=='seenNews'&&k!=='navCollapsed').length;
  return n?tf(n===1?'backup.item1':'backup.itemN',{n}):t('backup.nothing');
}
function bkFromV5(p){
  if(!p||p.app!==BK_APP||!p.stats||typeof p.stats!=='object'||!p.stats.items||typeof p.stats.items!=='object'||Array.isArray(p.stats.items))return null;
  const data=bkCollect();delete data.lastBackup;
  let prefs=stats.prefs;if(p.stats.prefs&&typeof p.stats.prefs==='object'&&!Array.isArray(p.stats.prefs))prefs=p.stats.prefs;
  data[STORE]=JSON.stringify({items:p.stats.items,prefs});
  return data;
}
function bkDate(iso){
  const d=new Date(iso);if(isNaN(d.getTime()))return '';
  return d.toLocaleDateString(locale(),{year:'numeric',month:'short',day:'numeric'})+', '+d.toLocaleTimeString(locale(),{hour:'numeric',minute:'2-digit'});
}
function bkStatus(msg,isErr){const el=document.getElementById('bk-status');if(!el)return;el.textContent=msg||'';el.classList.toggle('is-error',!!isErr);}
function bkPaint(){
  const meta=document.getElementById('bk-meta'), un=document.getElementById('bk-undo'), last=store.get('lastBackup',null);
  if(meta)meta.textContent=tf('backup.onDevice',{summary:bkSummary(bkCollect())})+' '+(last&&bkDate(last)?tf('backup.lastExported',{date:bkDate(last)}):t('backup.notExported'));
  let hasUndo=false;try{hasUndo=!!localStorage.getItem(BK_UNDO);}catch(e){}
  if(un)un.hidden=!hasUndo;
}
function bkExport(){
  const now=new Date();
  store.set('lastBackup',now.toISOString());
  const data=bkCollect();
  const payload={app:BK_APP,format:1,exported:now.toISOString(),attribution:ATTRIBUTION,summary:bkSummary(data),data};
  const name=BK_APP+'-backup-'+now.getFullYear()+'-'+pad2(now.getMonth()+1)+'-'+pad2(now.getDate())+'.json';
  const json=JSON.stringify(payload,null,1);
  window.__mseLastExport=payload;   // read-only hook for QA scripts
  const standalone=(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||navigator.standalone;
  let file=null;try{file=new File([json],name,{type:'application/json'});}catch(e){}
  if(standalone&&file&&navigator.canShare&&navigator.canShare({files:[file]})){
    // Installed apps on phones cannot always download files; the share sheet can save to Files or send it on.
    navigator.share({files:[file],title:tf('backup.shareTitle',{app:APP_NAME})}).then(()=>{bkStatus(t('backup.shared'));bkPaint();}).catch(()=>bkStatus(t('backup.exportCancelled')));
    return;
  }
  const url=URL.createObjectURL(new Blob([json],{type:'application/json'}));
  const a=document.createElement('a');a.href=url;a.download=name;a.rel='noopener';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),4000);
  bkStatus(tf('backup.saved',{name}));
  bkPaint();
}
function bkImport(file){
  if(!file)return;
  const reader=new FileReader(), bad=tf('backup.notBackup',{app:APP_NAME});
  reader.onerror=()=>bkStatus(t('backup.unreadable'),true);
  reader.onload=()=>{
    let p;try{p=JSON.parse(reader.result);}catch(e){bkStatus(bad,true);return;}
    if(p&&p.app===BK_APP&&!p.data&&p.stats){   // a backup file from MSE Trainer v5
      const conv=bkFromV5(p);if(!conv){bkStatus(bad,true);return;}
      p={app:BK_APP,exported:p.exported,data:conv};
    }
    let ok=p&&p.app===BK_APP&&p.data&&typeof p.data==='object'&&!Array.isArray(p.data)&&Object.keys(p.data).every(k=>typeof p.data[k]==='string'&&k.length<80);
    if(ok)Object.keys(p.data).forEach(k=>{try{JSON.parse(p.data[k]);}catch(e){ok=false;}});
    if(!ok){bkStatus(bad,true);return;}
    const msg=tf('backup.confirmImport',{date:bkDate(p.exported)||t('backup.unknownDate'),backup:bkSummary(p.data),device:bkSummary(bkCollect())});
    if(!window.confirm(msg)){bkStatus(t('backup.importCancelled'));return;}
    try{
      localStorage.setItem(BK_UNDO,JSON.stringify({saved:new Date().toISOString(),data:bkCollect()}));
      bkReplace(p.data);
    }catch(e){bkStatus(t('backup.importFailed'),true);return;}
    bkStatus(t('backup.imported'));
    setTimeout(()=>location.reload(),700);
  };
  reader.readAsText(file);
}
function bkUndo(){
  let snap;try{snap=JSON.parse(localStorage.getItem(BK_UNDO));}catch(e){}
  if(!snap||!snap.data){bkPaint();return;}
  if(!window.confirm(tf('backup.confirmUndo',{summary:bkSummary(snap.data)})))return;
  try{bkReplace(snap.data);localStorage.removeItem(BK_UNDO);}catch(e){bkStatus(t('backup.undoFailed'),true);return;}
  bkStatus(t('backup.restored'));
  setTimeout(()=>location.reload(),700);
}
(function initBackup(){
  const ex=document.getElementById('bk-export'), fi=document.getElementById('bk-file'), un=document.getElementById('bk-undo');
  if(!ex||!fi)return;
  ex.addEventListener('click',bkExport);
  fi.addEventListener('change',()=>{bkImport(fi.files&&fi.files[0]);fi.value='';});
  if(un)un.addEventListener('click',bkUndo);
  bkPaint();
  window.addEventListener('hashchange',bkPaint);
})();

/* ===== Language switching: static markup (data-i18n / data-i18n-attr in index.html), then re-render ===== */
function applyStatic(){
  document.documentElement.setAttribute('lang',lang);
  let els=document.querySelectorAll('[data-i18n]');
  els.forEach(el=>{const v=t(el.getAttribute('data-i18n'));if(v!==el.getAttribute('data-i18n'))el.textContent=v;});
  els=document.querySelectorAll('[data-i18n-attr]');
  els.forEach(el=>{
    el.getAttribute('data-i18n-attr').split(';').forEach(pair=>{const at=pair.indexOf(':'), key=pair.slice(at+1);if(at>0&&t(key)!==key)el.setAttribute(pair.slice(0,at),t(key));});
  });
  const brand=document.querySelector('.brand');if(brand)brand.setAttribute('aria-label',tf('brand.home',{name:APP_NAME}));
  const panel=document.getElementById('textSizePanel');if(panel)panel.setAttribute('aria-label',t('textsize.title'));
  labelCollapse();
  applyTheme(getTheme());
}
function setLang(l){
  lang=l==='tl'?'tl':'en';
  store.set('lang',lang);
  SEARCH_INDEX=null;
  applyStatic();
  bkPaint();
  const panel=document.getElementById('textSizePanel');
  if(panel&&!panel.hidden){panel.hidden=true;const tb=document.getElementById('textSizeBtn');if(tb)tb.setAttribute('aria-expanded','false');}
  route({keepScroll:true});
}

window.__mseBackup={collect:bkCollect};   // read-only hook for QA scripts

$('#gq').addEventListener('input',renderGlossary);

/* ===== Start ===== */
loadSession();
applyStatic();
route();

/* ===== Service worker (https or localhost only) ===== */
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
}
})();
