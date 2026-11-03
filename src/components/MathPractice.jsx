import React, { useState, useMemo } from 'react';
import { G, mkOpts } from '../data/mathData.js';
import { shuf, C } from '../lib/utils.js';
import { sfx } from '../lib/audio.js';
import { Btn, Done } from './ui.jsx';

export function Math_({onStars,topic}){
const[cls]=useState(window.__cls);
const[seed,setSeed]=useState(0);
const qs=useMemo(()=>{const fs=topic?G[cls].filter(f=>f()[3]===topic):shuf(G[cls]).slice(0,6);const n=topic?5:fs.length;return Array.from({length:n},(_,i)=>{const[q,a,h,t]=fs[i%fs.length]();return{q,a,h,t,o:mkOpts(a)}})},[cls,seed,topic]);
const[i,setI]=useState(0),[val,setVal]=useState(''),[st,setSt]=useState(null),[hint,setHint]=useState(false),[sc,setSc]=useState(0),[end,setEnd]=useState(false),[pad,setPad]=useState('');
const q=qs[i],mcq=i%2===0;
const check=v=>{if(st)return;const ok=Number(v)===q.a;setSt(ok?'ok':'bad');if(ok)setSc(s=>s+1);sfx(ok)};
const next=()=>{if(i+1<qs.length){setI(i+1);setSt(null);setVal('');setHint(false);setPad('')}else{setEnd(true);window.__rec&&window.__rec(topic||'Maths worksheet',sc,qs.length);onStars(Math.round(sc/qs.length*3))}};
const again=()=>{setSeed(seed+1);setI(0);setSt(null);setVal('');setHint(false);setSc(0);setEnd(false);setPad('')};
return(<div className="grid md:grid-cols-5 gap-4">
<div className="card md:col-span-3">
<div className="flex justify-between font-semibold mb-3"><span>Worksheet • Question {i+1} of {qs.length}</span><span>⭐ {sc}</span></div>
<p className="font-semibold mb-1" style={{color:C.violet}}>Maths • {q.t}</p><h3 className="text-2xl font-semibold mb-4">{q.q}</h3>
{mcq?<div className="grid grid-cols-2 gap-3">{q.o.map(o=><button key={o} disabled={!!st} onClick={()=>check(o)} className={'opt '+(st&&o===q.a?'ok':'')}>{o}</button>)}</div>
:<div className="flex gap-3 flex-wrap"><input inputMode="decimal" aria-label="Your answer" style={{width:160,minHeight:52}} value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>e.key==='Enter'&&val&&check(val)} placeholder="Type answer"/><Btn c={C.mint} disabled={!val||!!st} onClick={()=>check(val)}>Check</Btn></div>}
<div className="mt-4 flex gap-3 flex-wrap items-center"><Btn c={C.sun} onClick={()=>setHint(!hint)}>💡 {hint?'Hide':'Show'} hint</Btn>
{st&&<Btn c={C.violet} onClick={next}>{i+1<qs.length?'Next':'Finish'}</Btn>}</div>
{hint&&<p className="soft p-3 mt-3 pop">{q.h}</p>}
{st&&<p className="text-xl font-semibold mt-3 pop">{st==='ok'?'🌟 Correct! Great job!':'🙈 Answer is '+q.a+'. Try the next one!'}</p>}
</div>
<div className="card md:col-span-2"><h4 className="font-bold text-lg mb-2">✏️ Scratchpad</h4><textarea aria-label="Scratchpad for rough work" className="w-full" rows={9} value={pad} onChange={e=>setPad(e.target.value)} placeholder="Do your rough work here…"/></div>
{end&&<Done score={sc} total={qs.length} onClose={()=>setEnd(false)} again={again}/>}
</div>)}
