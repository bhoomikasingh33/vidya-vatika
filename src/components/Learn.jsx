import React, { useState, useEffect } from 'react';
import { FACTS, LESS } from '../data/learnData.js';
import { hush, say } from '../lib/audio.js';
import { Btn, Quiz } from './ui.jsx';
import { C } from '../lib/utils.js';
import { Visual } from './Visual.jsx';
import { LC } from '../lib/context.js';

export function Fact({hi}){const[i,setI]=useState(0);return<button className="soft p-2 mt-2 text-left w-full font-semibold" onClick={()=>setI((i+1)%FACTS.length)}>💡 {hi?'क्या आप जानते हैं?':'Did you know?'} {FACTS[i][hi?1:0]}</button>}

export function Lesson({L,onStars,back}){
const[i,setI]=useState(0),n=L.steps.length,st=L.steps[Math.min(i,n-1)];
useEffect(()=>()=>hush(),[]);
const sp=(t,l)=>{hush();say(t,l)};
return(<div className="grid gap-4"><Btn c={C.sun} onClick={()=>{hush();back()}}>◀ All lessons / सभी पाठ</Btn>
<div className="card"><div className="flex items-center justify-between flex-wrap gap-2"><h3 className="text-2xl font-bold">{L.e} {L.t[0]} • <span className="hi">{L.t[1]}</span></h3>
<div className="flex gap-1" role="img" aria-label={`Step ${Math.min(i+1,n)} of ${n}`}>{L.steps.map((_,j)=><span key={j} style={{width:14,height:14,borderRadius:99,background:j<=i?L.c:'var(--line)'}}/>)}</div></div>
<div className="soft mt-3 p-4 flex justify-center items-center" style={{minHeight:220,color:'var(--ink)'}}><Visual v={st.v}/></div>
{i<n&&<><p className="text-2xl font-semibold mt-3">{st.en}</p><p className="hi text-2xl mt-1" style={{color:L.c}}>{st.hi}</p>
<div className="flex gap-3 flex-wrap mt-3"><Btn c={C.blue} onClick={()=>sp(st.en,'en-IN')}>🔊 English</Btn><Btn c={C.mint} onClick={()=>sp(st.hi,'hi-IN')}>🔊 हिन्दी</Btn><Btn c="#94A3B8" disabled={i===0} onClick={()=>setI(i-1)}>◀ Back</Btn><Btn c={L.c} onClick={()=>{hush();setI(i+1)}}>{i+1<n?'Next ▶ / आगे':'Take the quiz 📝 / प्रश्न'}</Btn></div></>}</div>
{i>=n&&<Quiz items={L.qz} color={L.c} onStars={onStars} topic={L.t[0]}/>}</div>)}

export function Learn({onStars}){const cls=window.__cls,hi=React.useContext(LC),[L,setL]=useState(null);
if(L)return<Lesson L={L} onStars={onStars} back={()=>setL(null)}/>;
return<div className="grid md:grid-cols-2 gap-4">{LESS[cls].map(l=><div key={l.t[0]} className="card" style={{borderColor:l.c}}><div className="text-6xl bob">{l.e}</div><div className="text-sm font-semibold mt-1" style={{color:l.c}}>{l.s}</div><h3 className="text-2xl font-bold">{l.t[0]}</h3><h3 className="hi text-2xl font-bold">{l.t[1]}</h3><p className="my-2">{l.d}</p><Btn c={l.c} onClick={()=>setL(l)}>▶ {hi?'पाठ शुरू करो':'Start lesson'}</Btn></div>)}</div>}
