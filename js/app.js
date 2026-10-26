/* ---------- state ---------- */
const STORE='mse-trainer-v1';
function load(){try{const s=JSON.parse(localStorage.getItem(STORE)||'{}');return{items:s.items||{},prefs:s.prefs||{}}}catch(e){return{items:{},prefs:{}}}}
let stats=load();
function save(){try{localStorage.setItem(STORE,JSON.stringify(stats))}catch(e){}}

/* prefs v4 had 26 domains; a saved full list means "all", so new domains (Culture or pathology?) are included. */
const savedDoms=(stats.prefs.dv===5||stats.prefs.dv===4)&&stats.prefs.doms&&stats.prefs.doms.length&&!(stats.prefs.dv===4&&stats.prefs.doms.length>=26)?stats.prefs.doms.filter(k=>DOM[k]):null;
const settings={
  doms:new Set(savedDoms&&savedDoms.length?savedDoms:DOMAINS.map(d=>d.k)),
  mode:stats.prefs.mode||'mix', len:+(stats.prefs.len||10), lang:stats.prefs.lang||'all', drill:null
};
const domOf=v=>v.dom||TERMS[v.t].dom;
function savePrefs(){stats.prefs={dv:5,doms:[...settings.doms],mode:settings.mode,len:settings.len,lang:settings.lang};save();}

const $=s=>document.querySelector(s);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

let session=null, view='practice';

function pool(){
  let p=V.filter(v=>settings.drill?(v.t===settings.drill||v.d.includes(settings.drill)):settings.doms.has(domOf(v)));
  if(settings.lang==='tl')p=p.filter(v=>v.lang==='tl');
  if(settings.lang==='en')p=p.filter(v=>!v.lang);
  if(settings.mode==='new')p=p.filter(v=>!stats.items[v.id]);
  if(settings.mode==='missed')p=p.filter(v=>{const s=stats.items[v.id];return s&&s.l===0});
  return p;
}
function weightOf(v){const s=stats.items[v.id];if(!s)return 2.5;const miss=(s.a-s.c)/s.a;return (s.l===0?3:1)*(1+2*miss);}
function buildSession(list){
  let items=list;
  if(!items){
    items=pool().map(v=>({v,k:Math.pow(Math.random(),1/weightOf(v))})).sort((a,b)=>b.k-a.k).map(o=>o.v).slice(0,settings.len);
  }
  session={items,i:0,right:0,log:[],cur:null,done:false};
  if(items.length)setCur();
  renderStage();
}
function setCur(){const v=session.items[session.i];session.cur={v,opts:shuffle([v.t,...v.d]),picked:null};}

/* ---------- practice ---------- */
function renderChips(){
  const c=$('#chips');
  c.classList.toggle('off',!!settings.drill);
  const all=settings.doms.size===DOMAINS.length;
  c.innerHTML=`<div class="chiprow"><button class="chip" data-all="1" aria-pressed="${all}">All domains</button></div>`+
    GROUPS.map(G=>`<div class="chiprow"><span class="chiplabel">${esc(G.n)}</span>`+
      DOMAINS.filter(d=>d.g===G.g).map(d=>`<button class="chip" data-k="${d.k}" aria-pressed="${settings.doms.has(d.k)&&!all}">${esc(d.n)}${d.ch?` <span class="chipch">Ch. ${d.ch}</span>`:''}</button>`).join('')+`</div>`).join('');
  c.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{
    settings.drill=null;
    if(b.dataset.all){settings.doms=new Set(DOMAINS.map(d=>d.k));}
    else{
      const k=b.dataset.k;
      if(settings.doms.size===DOMAINS.length){settings.doms=new Set([k]);}
      else if(settings.doms.has(k)){settings.doms.delete(k);if(!settings.doms.size)settings.doms=new Set(DOMAINS.map(d=>d.k));}
      else settings.doms.add(k);
    }
    savePrefs();renderChips();renderDrill();buildSession();
  });
}
function renderDrill(){
  const el=$('#drill');
  if(!settings.drill){el.innerHTML='';return;}
  el.innerHTML=`<div class="drill"><span>Drilling <strong>${esc(TERMS[settings.drill].n)}</strong> and the terms it gets confused with.</span><button class="btn" id="stopdrill">Stop drilling</button></div>`;
  $('#stopdrill').onclick=()=>{settings.drill=null;renderChips();renderDrill();buildSession();};
}
/* "Sa Tagalog" card: the matching section of Usap Tayo (isaymotion.github.io/tagalog), so Tagalog phrases live in one place.
   Domain links first; term links override them. */
const UT='https://isaymotion.github.io/tagalog/#/';
const UT_DOM={tp:['psych/s/mse-describe','MSE: describing observations'],sp:['psych/s/mse-describe','MSE: describing observations'],be:['psych/s/mse-describe','MSE: describing observations'],
  tc:['psych/s/delusions','Psychosis: delusions and thought disturbances'],pe:['psych/s/hallucinations','Psychosis: hallucinations and perceptual disturbances'],
  af:['psych/s/depression','Mood and depression'],cg:['psych/s/mse-cog','MSE: orientation, attention, memory'],in:['psych/s/mse-abstract','MSE: abstraction, judgment, insight'],
  md:['psych/s/depression','Mood and depression'],po:['psych/s/hallucinations','Psychosis: hallucinations and perceptual disturbances'],fc:['lessons/folk','Folk beliefs, spirits, and cultural explanations']};
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
  if(!lines.some(l=>/^[CP]:/.test(l)))return `<p class="obs">${esc(x.replace(/^O:\s*/,''))}</p>`;
  const line=(cls,txt)=>{const [tl,en]=splitTL(txt);return `<div class="ln ${cls}">${en?`<p class="tlline"><span>${esc(tl)}</span>${sayBtn(tl)}</p><p class="en" hidden>${esc(en)}</p>`:`<p>${esc(tl)}</p>`}</div>`;};
  return `<div class="tx">`+lines.map(l=>{
    if(l.startsWith('C:'))return `<span class="sp">Clin.</span>`+line('cl',l.slice(2).trim());
    if(l.startsWith('P:'))return `<span class="sp">Pt.</span>`+line('pt',l.slice(2).trim());
    return `<p class="ln note">${esc(l.replace(/^O:/,'').trim())}</p>`;
  }).join('')+`</div>`;
}
function showEnglish(){document.querySelectorAll('.case .en').forEach(e=>e.hidden=false);const b=$('#showEn');if(b)b.remove();}
function bindSay(root){(root||document).querySelectorAll('[data-say]').forEach(b=>b.onclick=e=>{e.stopPropagation();AUDIO.play(b.dataset.say,b);});}
function renderStage(){
  const st=$('#stage');
  if(!session||!session.items.length){
    const hint=settings.mode==='missed'?`Nothing here was missed last time. Switch to "Mixed" to keep practicing.`:
      settings.mode==='new'?`You've seen every case in these domains. Switch to "Mixed" or "Only missed last time".`:`Turn on at least one domain.`;
    st.innerHTML=`<div class="empty"><p><strong>No cases match these settings.</strong></p><p class="muted">${hint}</p></div>`;return;
  }
  if(session.done)return renderSummary();
  const {v,opts}=session.cur, n=session.items.length;
  st.innerHTML=`
    <div class="meter" aria-hidden="true"><span style="width:${session.i/n*100}%"></span></div>
    <div class="qhead"><span>Case ${session.i+1} of ${n}</span><span>${session.right} correct</span></div>
    <article class="case" aria-label="Case vignette">${v.lang==='tl'?'<span class="langtag">Tagalog</span>':''}${renderVig(v.x)}${v.lang==='tl'&&v.x.includes(' || ')?'<button class="btn small" id="showEn">Show English</button>':''}</article>
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
  showFeedback(true);
}
function showFeedback(focus){
  const {v,picked}=session.cur, T0=TERMS[v.t], P=TERMS[picked], ok=picked===v.t, n=session.items.length;
  showEnglish();
  const ask=v.ask?splitTL(v.ask):null;
  document.querySelectorAll('.opt').forEach(b=>{
    b.disabled=true;const k=b.dataset.k;
    if(k===v.t)b.classList.add('correct');else if(k===picked)b.classList.add('wrong');else b.classList.add('dim');
  });
  $('.qhead span:last-child').textContent=`${session.right} correct`;
  $('#fb').innerHTML=`<div class="fbwrap ${ok?'ok':'no'}">
    <p class="verdict">${ok?'Correct':'Not quite'}: ${esc(T0.n)}<span class="domtag">${esc(DOM[domOf(v)])}</span></p>
    <p class="why">${esc(v.w)}</p>
    <div class="apart"><h3>Telling it apart</h3><p><mark>${esc(T0.tell)}</mark></p>
      ${ok?'':`<p class="picked"><strong>You chose ${esc(P.n)}.</strong> ${esc(P.def)}</p>`}</div>
    <div class="chart"><h3>${DOMG[T0.dom]!=='mse'?'At the bedside':'In the chart'}</h3><p class="chartline">${esc(T0.chart)}</p></div>
    ${ask?`<div class="ask"><h3>Ask it in Tagalog</h3><p class="tlline"><span>${esc(ask[0])}</span>${sayBtn(ask[0])}</p><p class="muted">${esc(ask[1])}</p></div>`:''}
    <p class="read"><strong>Further reading in Shea:</strong> ${T0.ch.map(c=>`Ch. ${c}, ${esc(CH[c])}`).join('; ')}.${v.lang==='tl'?' This Tagalog case is original, not from the book.':''}</p>
    ${utCard(v)}
    <button class="btn primary" id="next">${session.i+1<n?'Next case':'See results'}</button>
  </div>`;
  $('#next').onclick=next;
  bindSay($('#fb'));
  if(focus)$('#next').focus({preventScroll:true});
}
function next(){
  if(!session.cur||!session.cur.picked)return;
  session.i++;
  if(session.i>=session.items.length){session.done=true;}else setCur();
  renderStage();
  const first=document.querySelector('.opt')||document.querySelector('.summary button');
  if(first)first.focus({preventScroll:true});
  document.querySelector('#stage').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
function renderSummary(){
  const n=session.items.length, missed=session.log.filter(l=>!l.ok);
  $('#stage').innerHTML=`<section class="summary">
    <h2>You named ${session.right} of ${n} findings correctly.</h2>
    ${missed.length?`<h3>Worth another look</h3><ul class="missed">${missed.map(l=>`<li><strong>${esc(TERMS[l.v.t].n)}</strong><span>you chose ${esc(TERMS[l.picked].n)}</span></li>`).join('')}</ul>`
      :`<p>Every finding named. Try another domain or a longer session.</p>`}
    <div class="actions">${missed.length?`<button class="btn primary" id="retry">Retry missed cases</button>`:''}<button class="btn" id="again">New session</button></div>
  </section>`;
  const r=$('#retry');if(r)r.onclick=()=>buildSession(shuffle(missed.map(l=>l.v)));
  $('#again').onclick=()=>buildSession();
}

/* ---------- glossary ---------- */
function renderGlossary(){
  const q=($('#q').value||'').trim().toLowerCase();
  let lastG=null;
  const html=DOMAINS.map(d=>{
    const ts=Object.values(TERMS).filter(t=>t.dom===d.k&&(!q||(t.n+' '+t.def+' '+t.tell).toLowerCase().includes(q)));
    if(!ts.length)return '';
    const gh=d.g!==lastG?`<p class="grouplabel">${esc(GROUPS.find(G=>G.g===d.g).n)}</p>`:'';lastG=d.g;
    return gh+`<div class="group"><h2>${esc(d.n)}</h2>${ts.map(t=>`<article class="term">
      <h3>${esc(t.n)}</h3><p>${esc(t.def)}</p><p><mark>${esc(t.tell)}</mark></p>
      <p class="chartline">${esc(t.chart)}</p>
      <p class="refs">Shea ${t.ch.map(c=>`Ch. ${c}`).join(', ')}</p>
      <button class="btn" data-drill="${t.k}">Drill this term</button></article>`).join('')}</div>`;
  }).join('');
  $('#gloss').innerHTML=html||`<p class="muted" style="margin-top:20px">No terms match "${esc(q)}". Try a shorter search.</p>`;
  document.querySelectorAll('[data-drill]').forEach(b=>b.onclick=()=>startDrill(b.dataset.drill));
}
function startDrill(k){
  settings.drill=k;show('practice');renderChips();renderDrill();
  const p=shuffle(pool());buildSession(p.slice(0,Math.max(settings.len,Math.min(p.length,12))));
}

/* ---------- progress ---------- */
function renderProgress(){
  const it=stats.items, seen=V.filter(v=>it[v.id]);
  if(!seen.length){$('#prog').innerHTML=`<p class="stat-lead">Finish a few cases and your accuracy by domain will show up here.</p>`;return;}
  let A=0,C=0;seen.forEach(v=>{A+=it[v.id].a;C+=it[v.id].c});
  let lastPG=null;
  const rows=DOMAINS.map(d=>{
    const vs=V.filter(v=>domOf(v)===d.k), sv=vs.filter(v=>it[v.id]);
    let a=0,c=0;sv.forEach(v=>{a+=it[v.id].a;c+=it[v.id].c});
    const pct=a?Math.round(c/a*100):0;
    const gh=d.g!==lastPG?`<p class="section-h">${esc(GROUPS.find(G=>G.g===d.g).n)}</p>`:'';lastPG=d.g;
    return gh+`<div class="domrow"><span>${esc(d.n)}</span><div class="bar" role="img" aria-label="${pct} percent"><span style="width:${pct}%"></span></div><span class="muted">${a?pct+'%':'not started'}</span></div>`;
  }).join('');
  const byTerm={};seen.forEach(v=>{const s=it[v.id],b=byTerm[v.t]||(byTerm[v.t]={a:0,c:0});b.a+=s.a;b.c+=s.c});
  const weak=Object.entries(byTerm).filter(([,s])=>s.c<s.a).sort((x,y)=>(x[1].c/x[1].a)-(y[1].c/y[1].a)||y[1].a-x[1].a).slice(0,8);
  $('#prog').innerHTML=`
    <p class="stat-lead">You've worked through ${seen.length} of ${V.length} cases, answering ${Math.round(C/A*100)}% correctly overall.</p>
    ${rows}
    <p class="section-h">Terms to revisit</p>
    ${weak.length?`<ul class="weak">${weak.map(([k,s])=>`<li><span><strong>${esc(TERMS[k].n)}</strong><br><span class="muted">${s.c} of ${s.a} correct</span></span><button class="btn" data-drill="${k}">Drill</button></li>`).join('')}</ul>`
      :`<p class="muted">No misses yet.</p>`}
    <button class="btn" id="reset">Reset progress</button>`;
  document.querySelectorAll('#prog [data-drill]').forEach(b=>b.onclick=()=>startDrill(b.dataset.drill));
  $('#reset').onclick=()=>{if(confirm('Clear all saved progress in this browser?')){stats.items={};save();renderProgress();}};
}

/* ---------- nav: hash routes #/practice, #/glossary, #/progress, #/new, #/about
   Deep links: #/practice?lang=tl&dom=fc, #/practice?drill=<term key> ---------- */
const VIEWS=['practice','glossary','progress','new','about'];
const scrollPos={};
function show(v,push){
  if(!VIEWS.includes(v))v='practice';
  if(push!==false&&('#/'+v)!==location.hash.split('?')[0]){location.hash='#/'+v;return;}
  view=v;
  document.querySelectorAll('.tabs button').forEach(b=>b.setAttribute('aria-selected',b.dataset.view===v));
  VIEWS.forEach(k=>$('#v-'+k).hidden=k!==v);
  if(v==='glossary')renderGlossary();
  if(v==='progress')renderProgress();
  if(v==='new')renderNews();
  closeMenu();
}
function applyQuery(q){
  const p=new URLSearchParams(q||'');let changed=false;
  if(p.get('lang')&&['all','en','tl'].includes(p.get('lang'))){settings.lang=p.get('lang');$('#lang').value=settings.lang;changed=true;}
  if(p.get('dom')){const ks=p.get('dom').split(',').filter(k=>DOM[k]);if(ks.length){settings.doms=new Set(ks);settings.drill=null;changed=true;}}
  if(p.get('drill')&&TERMS[p.get('drill')]){settings.drill=p.get('drill');changed=true;}
  if(changed){savePrefs();renderChips();renderDrill();buildSession();}
}
function route(){
  const [h,q]=location.hash.replace(/^#\/?/,'').split('?');
  show(h||'practice',false);
  if(q)applyQuery(q);
  requestAnimationFrame(()=>window.scrollTo(0,scrollPos[location.hash]||0));
}
window.addEventListener('scroll',()=>{scrollPos[location.hash]=window.scrollY;},{passive:true});
window.addEventListener('hashchange',route);
if('scrollRestoration' in history)history.scrollRestoration='manual';
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>show(b.dataset.view));
$('#navBack').onclick=()=>history.back();
$('#navFwd').onclick=()=>history.forward();
document.addEventListener('keydown',e=>{if(e.altKey&&e.key==='ArrowLeft'){e.preventDefault();history.back();}if(e.altKey&&e.key==='ArrowRight'){e.preventDefault();history.forward();}});

/* ---------- menu ---------- */
function closeMenu(){$('#menu').hidden=true;$('#menuBtn').setAttribute('aria-expanded','false');}
$('#menuBtn').onclick=e=>{e.stopPropagation();const m=$('#menu');m.hidden=!m.hidden;$('#menuBtn').setAttribute('aria-expanded',String(!m.hidden));};
document.addEventListener('click',e=>{if(!e.target.closest('.menuwrap'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});

/* ---------- theme: match device -> light -> dark ---------- */
const THEMES=['system','light','dark'], THEME_LABEL={system:'Theme: match device',light:'Theme: light',dark:'Theme: dark'}, THEME_ICON={system:'◐',light:'☀',dark:'☾'};
let theme=(()=>{try{return localStorage.getItem('mse-trainer-theme')||'system'}catch(e){return 'system'}})();
function applyTheme(){
  if(theme==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',theme);
  const b=$('#themeBtn');b.textContent=THEME_ICON[theme];b.setAttribute('aria-label',THEME_LABEL[theme]);b.title=THEME_LABEL[theme];
}
$('#themeBtn').onclick=()=>{theme=THEMES[(THEMES.indexOf(theme)+1)%3];try{localStorage.setItem('mse-trainer-theme',theme)}catch(e){}applyTheme();};
applyTheme();

/* ---------- backup ---------- */
$('#exportBtn').onclick=()=>{
  const blob=new Blob([JSON.stringify({app:'mse-trainer',version:1,exported:new Date().toISOString(),stats},null,1)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mse-trainer-backup-'+new Date().toISOString().slice(0,10)+'.json';
  document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);closeMenu();
};
$('#importBtn').onclick=()=>{closeMenu();$('#importFile').click();};
$('#importFile').onchange=e=>{
  const f=e.target.files[0];if(!f)return;
  f.text().then(t=>{
    const d=JSON.parse(t);
    if(!d||d.app!=='mse-trainer'||!d.stats||typeof d.stats.items!=='object')throw new Error('not a backup');
    if(!confirm('Replace the progress in this browser with the backup from '+(d.exported||'an earlier date').slice(0,10)+'?'))return;
    stats={items:d.stats.items||{},prefs:d.stats.prefs||stats.prefs};save();
    alert('Progress restored: '+Object.keys(stats.items).length+' cases.');
    if(view==='progress')renderProgress();
  }).catch(()=>alert('That file is not an MSE Trainer backup.')).finally(()=>{e.target.value='';});
};

/* ---------- What's New ---------- */
function renderNews(){
  $('#news').innerHTML=WHATS_NEW.map(r=>`<article class="term"><h3>${esc(r.v)} <span class="muted">· ${esc(r.date)}</span></h3><ul>${r.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></article>`).join('');
}

/* ---------- Tagalog audio: Usap Tayo's recorded pack, then a Filipino device voice ---------- */
const AUDIO=(()=>{
  const BASE='https://isaymotion.github.io/tagalog/audio/';
  let keys=null, cur=null;
  const fil=()=>('speechSynthesis' in window)?speechSynthesis.getVoices().find(v=>/^(fil|tl)/i.test(v.lang)):null;
  fetch(BASE+'manifest.json',{cache:'no-cache'}).then(r=>r.ok?r.json():null).then(m=>{
    if(m&&Array.isArray(m.keys)){keys=new Set(m.keys);if(view==='practice'&&session&&session.cur&&session.cur.v.lang==='tl')renderStage();}
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

$('#q').addEventListener('input',renderGlossary);
$('#mode').value=settings.mode;$('#len').value=String(settings.len);
$('#mode').onchange=e=>{settings.mode=e.target.value;savePrefs();buildSession();};
$('#len').onchange=e=>{settings.len=+e.target.value;savePrefs();buildSession();};
$('#restart').onclick=()=>buildSession();
$('#lang').value=settings.lang;
$('#lang').onchange=e=>{settings.lang=e.target.value;savePrefs();buildSession();};
document.addEventListener('keydown',e=>{
  if(view!=='practice'||!session||session.done)return;
  if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;
  if(e.key>='1'&&e.key<='4'&&session.cur&&!session.cur.picked){const b=document.querySelectorAll('.opt')[+e.key-1];if(b){e.preventDefault();answer(b.dataset.k);}}
  else if(e.key==='Enter'&&session.cur&&session.cur.picked&&e.target.id!=='next'){e.preventDefault();next();}
});

renderChips();renderDrill();buildSession();
route();
