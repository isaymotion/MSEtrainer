/* ---------- state ---------- */
const STORE='mse-trainer-v1', SESS_KEY='mse-trainer-session';
function load(){try{const s=JSON.parse(localStorage.getItem(STORE)||'{}');return{items:s.items||{},prefs:s.prefs||{}}}catch(e){return{items:{},prefs:{}}}}
let stats=load();
function save(){try{localStorage.setItem(STORE,JSON.stringify(stats))}catch(e){}}

/* prefs v4 had 26 domains; a saved full list means "all", so new domains (Culture or pathology?) are included. */
const savedDoms=(stats.prefs.dv===5||stats.prefs.dv===4)&&stats.prefs.doms&&stats.prefs.doms.length&&!(stats.prefs.dv===4&&stats.prefs.doms.length>=26)?stats.prefs.doms.filter(k=>DOM[k]):null;
const ALL=()=>new Set(DOMAINS.map(d=>d.k));
const settings={
  doms:new Set(savedDoms&&savedDoms.length?savedDoms:DOMAINS.map(d=>d.k)),
  mode:stats.prefs.mode||'mix', len:+(stats.prefs.len||20), lang:stats.prefs.lang||'all'
};
const domOf=v=>v.dom||TERMS[v.t].dom;
const VBYID=Object.fromEntries(V.map(v=>[v.id,v]));
function savePrefs(){stats.prefs={dv:5,doms:[...settings.doms],mode:settings.mode,len:settings.len,lang:settings.lang};save();}

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const ICON={
  home:'<path d="M4 11l8-6.5 8 6.5"/><path d="M6 10v9h12v-9"/>',
  bolt:'<path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z"/>',
  redo:'<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4h4"/>',
  sliders:'<path d="M5 6h9M18 6h1M5 12h3M12 12h7M5 18h11M20 18h-1"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  book:'<path d="M5 4.5h10a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h10"/>',
  chart:'<path d="M5 19V5M5 19h14"/><path d="M9 16v-4M13 16V9M17 16v-6"/>',
  chat:'<path d="M5 5h14v10H10l-4 4v-4H5z"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>'
};
const ico=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[n]}</svg>`;

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
function weightOf(v){const s=stats.items[v.id];if(!s)return 2.5;const miss=(s.a-s.c)/s.a;return (s.l===0?3:1)*(1+2*miss);}
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

/* ---------- sidebar ---------- */
function domStats(k){
  const vs=V.filter(v=>domOf(v)===k);let a=0,c=0,seen=0,miss=0;
  vs.forEach(v=>{const s=stats.items[v.id];if(s){seen++;a+=s.a;c+=s.c;if(s.l===0)miss++;}});
  return {n:vs.length,seen,a,c,miss,pct:a?Math.round(c/a*100):null,tl:vs.filter(v=>v.lang==='tl').length};
}
function renderSide(){
  const cur=view==='domain'?'domain/'+domView:view, mc=missedCount();
  const link=(r,icon,label,extra)=>`<a href="#/${r}" ${cur===r?'aria-current="page"':''}>${ico(icon)}<span class="lbl">${esc(label)}</span>${extra||''}</a>`;
  const dlink=(d,num)=>{const st=domStats(d.k);return `<a class="dom" href="#/domain/${d.k}" ${cur==='domain/'+d.k?'aria-current="page"':''}><span class="num">${num}</span><span class="lbl">${esc(d.n)}</span>${st.pct!==null?`<span class="pct">${st.pct}%</span>`:''}</a>`;};
  const mse=DOMAINS.filter(d=>d.g==='mse'), shea=DOMAINS.filter(d=>d.g==='p1'||d.g==='p2'||d.g==='skill').sort((a,b)=>a.ch-b.ch), tl=DOMAINS.filter(d=>d.g==='tl');
  $('#sidenav').innerHTML=
    link('home','home','Home')+
    (inProgress()?link('practice','bolt',`Session: case ${session.i+1} of ${session.items.length}`):`<a href="#/quick">${ico('bolt')}<span class="lbl">Quick session</span><span class="pct">10 cases</span></a>`)+
    `<a href="#/misses">${ico('redo')}<span class="lbl">Review misses</span>${mc?`<span class="badge">${mc}</span>`:''}</a>`+
    `<a href="#/custom">${ico('sliders')}<span class="lbl">Custom session</span></a>`+
    link('glossary','book','Glossary')+
    link('progress','chart','My progress')+
    link('new','spark',"What's New")+
    `<div class="sidesep"></div><p class="sidehead">Mental status</p>`+mse.map((d,i)=>dlink(d,i+1)).join('')+
    `<p class="sidehead">Interviewing · Shea</p>`+shea.map(d=>dlink(d,d.ch)).join('')+
    `<p class="sidehead">Tagalog and Filipino culture</p>`+
    `<a href="#/tagalog">${ico('chat')}<span class="lbl">Tagalog cases</span><span class="pct">${V.filter(v=>v.lang==='tl').length}</span></a>`+
    tl.map(d=>dlink(d,d.ch)).join('');
}

/* ---------- home ---------- */
function renderHome(){
  const it=stats.items, seen=V.filter(v=>it[v.id]);let A=0,C=0;seen.forEach(v=>{A+=it[v.id].a;C+=it[v.id].c});
  const pct=A?Math.round(C/A*100):0, mc=missedCount(), circ=2*Math.PI*30;
  const weak=DOMAINS.map(d=>({d,s:domStats(d.k)})).filter(x=>x.s.a>=3&&x.s.pct<100).sort((x,y)=>x.s.pct-y.s.pct).slice(0,3);
  const r=WHATS_NEW[0], tlN=V.filter(v=>v.lang==='tl').length;
  const cta=inProgress()
    ?`<a class="btn primary big" href="#/practice">Continue session · case ${session.i+1} of ${session.items.length}</a>
      <a class="btn ghost" href="#/custom">Custom session</a><p class="sub">${esc(session.label)}. <a href="#/fresh">Start a new ${settings.len}-case session instead</a></p>`
    :`<a class="btn primary big" href="#/fresh">Start a ${settings.len}-case session</a>
      <a class="btn ghost" href="#/custom">Custom session</a><p class="sub">${esc(describeDoms(settings.doms))} · ${settings.mode==='mix'?'focus on misses':settings.mode==='new'?'only unseen':'only missed'} · ${settings.lang==='all'?'English and Tagalog':settings.lang==='tl'?'Tagalog':'English'}</p>`;
  $('#v-home').innerHTML=`
  <div class="hero"><div class="herogrid">
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
  </div></div>
  <div class="pagepad homebody">
    ${r?`<a class="newsbar" href="#/new"><span class="tag">NEW</span><span class="txt">${esc(r.v)}: ${r.items.length} updates</span><span class="more">See what changed</span></a>`:''}
    <div class="cards">
      <a class="card" href="#/misses"><h3>Review misses${mc?`<span class="badge">${mc}</span>`:''}</h3><p>${mc?'Cases you got wrong the last time you saw them.':'Nothing to review yet. Misses collect here as you practice.'}</p><span class="go">${mc?'Review now':'Start practicing'}</span></a>
      <a class="card" href="${weak.length?'#/domain/'+weak[0].d.k:'#/progress'}"><h3>Weak spots</h3>${weak.length?`<ul class="weaklist">${weak.map(x=>`<li><span>${esc(x.d.n)}</span><span>${x.s.pct}%</span></li>`).join('')}</ul>`:'<p>Your lowest-scoring domains show up here after a few cases.</p>'}<span class="go">${weak.length?'Practice '+esc(weak[0].d.n):'See progress'}</span></a>
      <a class="card feature" href="#/tagalog"><h3>Tagalog cases</h3><p>${tlN} original cases with Tagalog patient lines, audio, and "Ask it in Tagalog".</p><span class="go">Practice in Tagalog</span></a>
      <a class="card" href="#/domain/fc"><h3>Culture or pathology?</h3><p>Filipino look-alikes: hiya, sama ng loob, kulam, lutang, sanib and more.</p><span class="go">Open domain</span></a>
      <a class="card" href="#/glossary"><h3>Glossary</h3><p>${Object.keys(TERMS).length} terms with definitions, telling-apart rules and chart lines.</p><span class="go">Browse terms</span></a>
    </div>
  </div>`;
}

/* ---------- domain page ---------- */
function termCard(t){return `<article class="term">
  <h3>${esc(t.n)}</h3><p>${esc(t.def)}</p><p><mark>${esc(t.tell)}</mark></p>
  <p class="chartline">${esc(t.chart)}</p>
  <p class="refs">Shea ${t.ch.map(c=>`Ch. ${c}`).join(', ')}</p>
  <button class="btn small" data-drill="${t.k}">Drill this term</button></article>`;}
function renderDomain(k){
  const d=DOMAINS.find(x=>x.k===k);if(!d){show('home');return;}
  const st=domStats(k), G=GROUPS.find(g=>g.g===d.g);
  const terms=Object.values(TERMS).filter(t=>t.dom===k);
  const extraTerms=k==='fc'?[...new Set(V.filter(v=>v.dom==='fc').map(v=>v.t))].filter(t=>TERMS[t].dom!=='fc').map(t=>TERMS[t]):[];
  let ch=d.ch;if(!ch){const cnt={};terms.forEach(t=>t.ch.forEach(c=>cnt[c]=(cnt[c]||0)+1));ch=+Object.entries(cnt).sort((a,b)=>b[1]-a[1])[0]?.[0]||16;}
  $('#v-domain').innerHTML=`
  <div class="domhero">
    <p class="eyebrow">${esc(G.n)}</p>
    <h1 class="pagetitle">${esc(d.n)}</h1>
    <p class="chap">Shea Ch. ${ch}: ${esc(CH[ch])}</p>
    <div class="domstats">
      <div><strong>${st.n}</strong>cases</div>
      <div><strong>${st.seen}</strong>seen</div>
      <div><strong>${st.pct===null?'—':st.pct+'%'}</strong>correct</div>
      <div><strong>${terms.length+extraTerms.length}</strong>terms</div>
    </div>
    <div class="domactions">
      <button class="btn primary big" id="dPractice">Practice this domain</button>
      ${st.miss?`<button class="btn" id="dMiss">Review ${st.miss} missed</button>`:''}
      ${st.tl&&st.tl<st.n?`<button class="btn" id="dTl">Tagalog cases only (${st.tl})</button>`:''}
    </div>
  </div>
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
function showEnglish(){$$('.case .en').forEach(e=>e.hidden=false);const b=$('#showEn');if(b)b.remove();}
function bindSay(root){(root||document).querySelectorAll('[data-say]').forEach(b=>b.onclick=e=>{e.stopPropagation();AUDIO.play(b.dataset.say,b);});}
function renderSessBar(){
  const sb=$('#sessbar');
  if(!inProgress()){sb.innerHTML='';sb.hidden=true;return;}
  sb.hidden=false;const n=session.items.length;
  sb.innerHTML=`<div class="sessrow"><span class="what">${esc(session.label)}</span>
    <span class="count">Case <b>${session.i+1}</b> of ${n} · <b id="nright">${session.right}</b> correct</span>
    <a class="iconbtn" href="#/home" aria-label="Exit session (you can continue it later)" title="Exit (you can continue later)">${ico('x')}</a></div>
    <div class="meter" aria-hidden="true"><span style="width:${(session.i+(session.cur&&session.cur.picked?1:0))/n*100}%"></span></div>`;
}
function renderPractice(){
  renderSessBar();
  const st=$('#stage');
  if(!session){
    st.innerHTML=`<div class="empty"><p class="eyebrow">Practice</p><h1 class="pagetitle">No session in progress</h1>
      <div class="actions"><a class="btn primary" href="#/fresh">Start a ${settings.len}-case session</a><a class="btn" href="#/quick">Quick 10</a><a class="btn" href="#/custom">Custom session</a></div></div>`;return;
  }
  if(!session.items.length){
    st.innerHTML=`<div class="empty"><h1 class="pagetitle">No cases match</h1><p class="muted">Nothing fits these settings. Try "Focus on misses", a different language, or more domains.</p>
      <div class="actions"><a class="btn primary" href="#/custom">Change settings</a><a class="btn" href="#/home">Home</a></div></div>`;return;
  }
  if(session.done)return renderSummary();
  const {v,opts}=session.cur;
  st.innerHTML=`
    ${session.drill?`<div class="drill"><span>Drilling <strong>${esc(TERMS[session.drill].n)}</strong> and the terms it gets confused with.</span></div>`:''}
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
  saveSession();renderSessBar();renderSide();
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
    <p class="read"><strong>Further reading in Shea:</strong> ${T0.ch.map(c=>`Ch. ${c}, ${esc(CH[c])}`).join('; ')}.${v.lang==='tl'?' This Tagalog case is original, not from the book.':''}</p>
    ${utCard(v)}
    <div class="nextrow"><button class="btn primary big" id="next">${session.i+1<n?'Next case':'See results'}</button></div>
  </div>`;
  $('#next').onclick=next;
  bindSay($('#fb'));
  if(focus)$('#next').focus({preventScroll:true});
}
function next(){
  if(!session.cur||!session.cur.picked)return;
  session.i++;
  if(session.i>=session.items.length){session.done=true;}else setCur();
  saveSession();renderPractice();renderSide();
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
    <div class="actions">${missed.length?`<button class="btn primary" id="retry">Retry missed cases</button>`:''}<a class="btn" href="#/fresh">New session</a><a class="btn ghost" href="#/home">Home</a></div>
  </section>`;
  const r=$('#retry');if(r)r.onclick=()=>startSession({list:shuffle(missed.map(l=>l.v)),label:session.label+': retry'});
}

/* ---------- glossary ---------- */
function renderGlossary(){
  const q=($('#q').value||'').trim().toLowerCase();
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
  if(!seen.length){$('#prog').innerHTML=`<p class="stat-lead">Finish a few cases and your accuracy by domain will show up here.</p><a class="btn primary" href="#/fresh">Start a session</a>`;return;}
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
    <p class="stat-lead">You've worked through ${seen.length} of ${V.length} cases, answering ${Math.round(C/A*100)}% correctly overall.</p>
    ${rows}
    <p class="section-h">Terms to revisit</p>
    ${weak.length?`<ul class="weak">${weak.map(([k,s])=>`<li><span><strong>${esc(TERMS[k].n)}</strong><br><span class="muted">${s.c} of ${s.a} correct</span></span><button class="btn small" data-drill="${k}">Drill</button></li>`).join('')}</ul>`
      :`<p class="muted">No misses yet.</p>`}
    <button class="btn" id="reset">Reset progress</button>`;
  bindDrill($('#prog'));
  $('#reset').onclick=()=>{if(confirm('Clear all saved progress in this browser?')){stats.items={};save();session=null;saveSession();renderProgress();renderSide();}};
}

/* ---------- custom session sheet ---------- */
const dlg=$('#custom');
function renderPicker(){
  const groups=[{n:'Mental status',ds:DOMAINS.filter(d=>d.g==='mse')},{n:'Interviewing · Shea',ds:DOMAINS.filter(d=>['p1','p2','skill'].includes(d.g)).sort((a,b)=>a.ch-b.ch)},{n:'Tagalog and Filipino culture',ds:DOMAINS.filter(d=>d.g==='tl')}];
  $('#domPick').innerHTML=groups.map((G,gi)=>{
    const on=G.ds.filter(d=>settings.doms.has(d.k)).length;
    return `<details class="pickgrp" ${gi===0?'open':''}><summary>${esc(G.n)}<span class="cnt" data-cnt="${gi}">${on} of ${G.ds.length}</span></summary><div class="picklist">
      <label class="pick all"><input type="checkbox" data-grp="${gi}" ${on===G.ds.length?'checked':''}>Select all</label>
      ${G.ds.map(d=>`<label class="pick"><input type="checkbox" data-k="${d.k}" data-g="${gi}" ${settings.doms.has(d.k)?'checked':''}>${d.g!=='mse'&&d.ch?`<span class="ch">Ch. ${d.ch}</span>`:''}<span>${esc(d.n)}</span></label>`).join('')}
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
function openCustom(){$('#mode').value=settings.mode;$('#lang').value=settings.lang;$('#len').value=String(settings.len);renderPicker();closeSide();if(!dlg.open)dlg.showModal();}
['#mode','#lang','#len'].forEach(s=>$(s).addEventListener('change',()=>renderPickerCount()));
function renderPickerCount(){const n=pool(readPicker()).length;$('#poolCount').textContent=n?`${n} matching case${n===1?'':'s'}`:'No cases match';$('#customStart').disabled=!n;}
$('#customForm').addEventListener('submit',e=>{
  const sub=e.submitter;if(!sub||sub.value!=='start')return;
  const r=readPicker();if(!r.doms.size){e.preventDefault();return;}
  settings.doms=r.doms;settings.mode=r.mode;settings.lang=r.lang;settings.len=+$('#len').value;savePrefs();
  setTimeout(()=>startSession({doms:settings.doms}),0);
});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});

/* ---------- navigation: #/home, #/domain/<k>, #/practice, #/glossary, #/progress, #/new, #/about
   Actions: #/quick, #/fresh, #/misses, #/tagalog, #/custom
   Deep links: #/practice?lang=tl&dom=fc, #/practice?drill=<term key> ---------- */
const VIEWS=['home','domain','practice','glossary','progress','new','about'];
const scrollPos={};
function show(v,push){
  if(!VIEWS.includes(v))v='home';
  if(push!==false){location.hash='#/'+v;return;}
  view=v;
  VIEWS.forEach(k=>$('#v-'+k).hidden=k!==v);
  if(v==='home')renderHome();
  if(v==='practice')renderPractice();
  if(v==='glossary')renderGlossary();
  if(v==='progress')renderProgress();
  if(v==='new')renderNews();
  renderSide();
  closeMenu();closeSide();
}
function replaceHash(h){history.replaceState(null,'',h);}
const ACTIONS={
  quick:()=>startSession({doms:ALL(),mode:'mix',len:10,label:'Quick session'}),
  fresh:()=>startSession({doms:settings.doms}),
  misses:()=>{const n=missedCount();if(!n){replaceHash('#/home');show('home',false);return;}startSession({doms:ALL(),mode:'missed',lang:'all',len:Math.min(n,20),label:'Review misses'});},
  tagalog:()=>startSession({doms:ALL(),mode:'mix',lang:'tl',label:'Tagalog cases'}),
  custom:()=>{}
};
function applyQuery(q){
  const p=new URLSearchParams(q||'');
  if(p.get('lang')&&['all','en','tl'].includes(p.get('lang')))settings.lang=p.get('lang');
  if(p.get('dom')){const ks=p.get('dom').split(',').filter(k=>DOM[k]);if(ks.length)settings.doms=new Set(ks);}
  savePrefs();
  if(p.get('drill')&&TERMS[p.get('drill')])startDrill(p.get('drill'));else startSession({doms:settings.doms});
}
function route(){
  const raw=location.hash.replace(/^#\/?/,''), [path,q]=raw.split('?'), [h,arg]=path.split('/');
  if(ACTIONS[h]){
    if(h==='custom'){replaceHash(lastRoute||'#/home');route();openCustom();return;}
    replaceHash('#/practice');lastRoute='#/practice';view='practice';VIEWS.forEach(k=>$('#v-'+k).hidden=k!=='practice');ACTIONS[h]();renderSide();closeSide();return;
  }
  if(h==='practice'&&q){replaceHash('#/practice');lastRoute='#/practice';view='practice';VIEWS.forEach(k=>$('#v-'+k).hidden=k!=='practice');applyQuery(q);return;}
  if(h==='domain'&&arg&&DOM[arg]){domView=arg;show('domain',false);renderDomain(arg);renderSide();}
  else show(h||'home',false);
  lastRoute=location.hash;
  requestAnimationFrame(()=>window.scrollTo(0,scrollPos[location.hash]||0));
}
let lastRoute=null;
window.addEventListener('scroll',()=>{scrollPos[location.hash]=window.scrollY;},{passive:true});
window.addEventListener('hashchange',route);
if('scrollRestoration' in history)history.scrollRestoration='manual';
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){show(g.dataset.go);}});
$('#navBack').onclick=()=>history.back();
$('#navFwd').onclick=()=>history.forward();
document.addEventListener('keydown',e=>{if(e.altKey&&e.key==='ArrowLeft'){e.preventDefault();history.back();}if(e.altKey&&e.key==='ArrowRight'){e.preventDefault();history.forward();}});

/* ---------- sidebar toggle: docked on wide screens, a drawer on narrow ones ---------- */
const narrow=matchMedia('(max-width:960px)');
function setSideAria(){$('#sideBtn').setAttribute('aria-expanded',String(narrow.matches?document.documentElement.classList.contains('side-open'):!document.documentElement.classList.contains('side-closed')));}
function closeSide(){document.documentElement.classList.remove('side-open');$('#scrim').hidden=true;setSideAria();}
$('#sideBtn').onclick=()=>{
  const r=document.documentElement;
  if(narrow.matches){const o=r.classList.toggle('side-open');$('#scrim').hidden=!o;if(o)closeMenu();}
  else{const c=r.classList.toggle('side-closed');try{localStorage.setItem('mse-trainer-sidebar',c?'closed':'open')}catch(e){}}
  setSideAria();
};
$('#scrim').onclick=closeSide;
narrow.addEventListener('change',()=>{closeSide();});
$('#sidenav').addEventListener('click',e=>{if(e.target.closest('a'))closeSide();});

/* ---------- menu ---------- */
function closeMenu(){$('#menu').hidden=true;$('#menuBtn').setAttribute('aria-expanded','false');}
$('#menuBtn').onclick=e=>{e.stopPropagation();const m=$('#menu');m.hidden=!m.hidden;$('#menuBtn').setAttribute('aria-expanded',String(!m.hidden));if(!m.hidden)closeSide();};
document.addEventListener('click',e=>{if(!e.target.closest('.menuwrap'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();closeSide();}});

/* ---------- search ---------- */
$('#tq').addEventListener('input',()=>{
  $('#q').value=$('#tq').value;
  if(view!=='glossary')show('glossary');else renderGlossary();
});
$('#q').addEventListener('input',()=>{$('#tq').value=$('#q').value;renderGlossary();});
$('#searchBtn').onclick=()=>{if(view!=='glossary')show('glossary');setTimeout(()=>$('#q').focus(),50);};
document.addEventListener('keydown',e=>{
  if(e.key!=='/'||e.metaKey||e.ctrlKey||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||dlg.open)return;
  e.preventDefault();
  const t=$('#tq');if(t.offsetParent)t.focus();else $('#searchBtn').click();
});

/* ---------- theme: match device -> light -> dark ---------- */
const THEMES=['system','light','dark'], THEME_LABEL={system:'Theme: match device',light:'Theme: light',dark:'Theme: dark'};
const THEME_ICON={
  system:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
  light:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>',
  dark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/></svg>'};
let theme=(()=>{try{return localStorage.getItem('mse-trainer-theme')||'system'}catch(e){return 'system'}})();
function applyTheme(){
  if(theme==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',theme);
  const b=$('#themeBtn');b.innerHTML=THEME_ICON[theme];b.setAttribute('aria-label',THEME_LABEL[theme]);b.title=THEME_LABEL[theme];
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
    route();
  }).catch(()=>alert('That file is not an MSE Trainer backup.')).finally(()=>{e.target.value='';});
};

/* ---------- What's New ---------- */
function renderNews(){
  $('#news').innerHTML=`<div class="terms" style="grid-template-columns:1fr">`+WHATS_NEW.map(r=>`<article class="term"><h3>${esc(r.v)} <span class="muted" style="font-family:var(--sans);font-size:.9rem;font-weight:400">· ${esc(r.date)}</span></h3><ul>${r.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></article>`).join('')+`</div>`;
}

/* ---------- Tagalog audio: Usap Tayo's recorded pack, then a Filipino device voice ---------- */
const AUDIO=(()=>{
  const BASE='https://isaymotion.github.io/tagalog/audio/';
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

loadSession();
setSideAria();
route();
if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost'))window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
