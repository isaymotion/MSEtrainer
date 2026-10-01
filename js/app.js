/* ---------- state ---------- */
const STORE='mse-trainer-v1';
function load(){try{const s=JSON.parse(localStorage.getItem(STORE)||'{}');return{items:s.items||{},prefs:s.prefs||{}}}catch(e){return{items:{},prefs:{}}}}
let stats=load();
function save(){try{localStorage.setItem(STORE,JSON.stringify(stats))}catch(e){}}

const savedDoms=stats.prefs.dv===3&&stats.prefs.doms&&stats.prefs.doms.length?stats.prefs.doms.filter(k=>DOM[k]):null;
const settings={
  doms:new Set(savedDoms&&savedDoms.length?savedDoms:DOMAINS.map(d=>d.k)),
  mode:stats.prefs.mode||'mix', len:+(stats.prefs.len||10), drill:null
};
function savePrefs(){stats.prefs={dv:3,doms:[...settings.doms],mode:settings.mode,len:settings.len};save();}

const $=s=>document.querySelector(s);
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

let session=null, view='practice';

function pool(){
  let p=V.filter(v=>settings.drill?(v.t===settings.drill||v.d.includes(settings.drill)):settings.doms.has(TERMS[v.t].dom));
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
function renderVig(x){
  const lines=x.split('\n');
  if(!lines.some(l=>/^[CP]:/.test(l)))return `<p class="obs">${esc(x.replace(/^O:\s*/,''))}</p>`;
  return `<div class="tx">`+lines.map(l=>{
    if(l.startsWith('C:'))return `<span class="sp">Clin.</span><p class="ln cl">${esc(l.slice(2).trim())}</p>`;
    if(l.startsWith('P:'))return `<span class="sp">Pt.</span><p class="ln pt">${esc(l.slice(2).trim())}</p>`;
    return `<p class="ln note">${esc(l.replace(/^O:/,'').trim())}</p>`;
  }).join('')+`</div>`;
}
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
    <article class="case" aria-label="Case vignette">${renderVig(v.x)}</article>
    <p class="prompt" id="prompt">${esc(v.q||'Which term fits best?')}</p>
    <div class="opts" role="group" aria-labelledby="prompt">${opts.map((k,i)=>`<button class="opt" data-k="${k}"><span class="key" aria-hidden="true">${i+1}</span><span>${esc(TERMS[k].n)}</span></button>`).join('')}</div>
    <div id="fb" aria-live="polite"></div>`;
  st.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(b.dataset.k));
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
  document.querySelectorAll('.opt').forEach(b=>{
    b.disabled=true;const k=b.dataset.k;
    if(k===v.t)b.classList.add('correct');else if(k===picked)b.classList.add('wrong');else b.classList.add('dim');
  });
  $('.qhead span:last-child').textContent=`${session.right} correct`;
  $('#fb').innerHTML=`<div class="fbwrap ${ok?'ok':'no'}">
    <p class="verdict">${ok?'Correct':'Not quite'}: ${esc(T0.n)}<span class="domtag">${esc(DOM[T0.dom])}</span></p>
    <p class="why">${esc(v.w)}</p>
    <div class="apart"><h3>Telling it apart</h3><p><mark>${esc(T0.tell)}</mark></p>
      ${ok?'':`<p class="picked"><strong>You chose ${esc(P.n)}.</strong> ${esc(P.def)}</p>`}</div>
    <div class="chart"><h3>${DOMG[T0.dom]!=='mse'?'At the bedside':'In the chart'}</h3><p class="chartline">${esc(T0.chart)}</p></div>
    <p class="read"><strong>Further reading in Shea:</strong> ${T0.ch.map(c=>`Ch. ${c}, ${esc(CH[c])}`).join('; ')}.</p>
    <button class="btn primary" id="next">${session.i+1<n?'Next case':'See results'}</button>
  </div>`;
  $('#next').onclick=next;
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
    const vs=V.filter(v=>TERMS[v.t].dom===d.k), sv=vs.filter(v=>it[v.id]);
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

/* ---------- nav ---------- */
function show(v){
  view=v;
  document.querySelectorAll('.tabs button').forEach(b=>b.setAttribute('aria-selected',b.dataset.view===v));
  ['practice','glossary','progress'].forEach(k=>$('#v-'+k).hidden=k!==v);
  if(v==='glossary')renderGlossary();
  if(v==='progress')renderProgress();
}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>show(b.dataset.view));
$('#q').addEventListener('input',renderGlossary);
$('#mode').value=settings.mode;$('#len').value=String(settings.len);
$('#mode').onchange=e=>{settings.mode=e.target.value;savePrefs();buildSession();};
$('#len').onchange=e=>{settings.len=+e.target.value;savePrefs();buildSession();};
$('#restart').onclick=()=>buildSession();
document.addEventListener('keydown',e=>{
  if(view!=='practice'||!session||session.done)return;
  if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;
  if(e.key>='1'&&e.key<='4'&&session.cur&&!session.cur.picked){const b=document.querySelectorAll('.opt')[+e.key-1];if(b){e.preventDefault();answer(b.dataset.k);}}
  else if(e.key==='Enter'&&session.cur&&session.cur.picked&&e.target.id!=='next'){e.preventDefault();next();}
});

renderChips();renderDrill();buildSession();
