import React, { useState } from 'react';
import { Btn, Quiz } from './ui.jsx';
import { C } from '../lib/utils.js';
import { Math_ } from './MathPractice.jsx';
import { hush } from '../lib/audio.js';
import { Reader } from './Stories.jsx';
import { LIB } from '../data/storyData.js';
import { MAP, EN } from '../data/syllabusData.js';
import { GQ } from '../data/grammarData.js';

export function Syllabus({onStars}){
const cls=window.__cls,[v,setV]=useState(null),[tab,setTab]=useState('m');
if(v&&v.m)return<div><Btn c={C.sun} className="mb-3" onClick={()=>setV(null)}>◀ Back to syllabus</Btn><h3 className="text-2xl font-bold mb-3">{v.m}</h3><Math_ key={v.m} topic={v.m} onStars={onStars}/></div>;
if(v&&v.s)return<div><Btn c={C.sun} className="mb-3" onClick={()=>{hush();setV(null)}}>◀ Back to syllabus</Btn><Reader s={v.s} onStars={onStars}/></div>;
const rd=l=>LIB.find(x=>x.cl===cls&&x.src.endsWith(l));
return(<div className="grid gap-4"><div className="flex gap-3 flex-wrap">{[['m','🧮 Maths chapters'],['e','✍️ English lessons']].map(([k,l])=><Btn key={k} c={tab===k?C.violet:'#94A3B8'} onClick={()=>setTab(k)}>{l}</Btn>)}</div>
{tab==='m'?MAP[cls].map(([u,t,g])=><div key={t} className="card flex items-center gap-3 flex-wrap" style={{padding:16}}><div className="flex-1 min-w-[220px]"><div className="font-semibold" style={{color:C.blue}}>{u}</div><div className="text-xl font-bold">{t}</div><p>{g}</p></div><Btn c={C.mint} onClick={()=>setV({m:t})}>Practise</Btn></div>)
:<>{EN[cls].map(([u,ls,f])=><div key={u} className="card" style={{padding:16}}><div className="font-semibold" style={{color:C.pink}}>{u}</div><p className="mb-2">{f}</p><div className="flex gap-2 flex-wrap">{ls.map(l=>{const x=rd(l);return x?<Btn key={l} c={C.violet} style={{minHeight:44}} onClick={()=>setV({s:x})}>📖 {l}</Btn>:<span key={l} className="soft px-3 py-2 font-semibold">{l}</span>})}</div></div>)}
<h3 className="text-2xl font-bold">Grammar check</h3><Quiz items={GQ[cls]} color={C.pink} onStars={onStars}/></>}</div>)}
