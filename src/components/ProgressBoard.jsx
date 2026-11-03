import React, { useState } from 'react';
import { loadDB } from '../lib/storage.js';
import { STU } from '../data/adminData.js';
import { MAP } from '../data/syllabusData.js';
import { C } from '../lib/utils.js';

export function ProgressBoard(){
const[c,setC]=useState(3),[s,setS]=useState('A'),[tick,setTick]=useState(0);
const real=loadDB();
const data=STU.filter(x=>x.c===c&&x.s===s).map((k,i)=>{const m={};MAP[c].slice(0,3).forEach((t,j)=>{m[t[1]]={score:(i*37+j*53)%3+2,total:5}});
real.filter(r=>r.u===k.id).forEach(r=>{const o=m[r.topic]||{score:0,total:0};m[r.topic]={score:o.score+r.score,total:o.total+r.total}});
return{...k,live:real.filter(r=>r.u===k.id).length,tp:Object.entries(m).map(([t,v])=>({t,pct:Math.round(100*v.score/Math.max(1,v.total))}))}});
const weak={};data.forEach(k=>k.tp.forEach(x=>{if(x.pct<60)weak[x.t]=(weak[x.t]||0)+1}));
const top=Object.entries(weak).sort((a,b)=>b[1]-a[1]).slice(0,3);
return(<div className="grid gap-4"><div className="flex gap-3 flex-wrap items-center"><select aria-label="Class" value={c} onChange={e=>setC(+e.target.value)}>{[3,4,5].map(x=><option key={x} value={x}>Class {x}</option>)}</select>
<select aria-label="Section" value={s} onChange={e=>setS(e.target.value)}>{['A','B'].map(x=><option key={x}>{x}</option>)}</select>
<button className="btn" style={{background:C.mint}} onClick={()=>setTick(tick+1)}>↻ Refresh</button></div>
<div className="card" style={{borderColor:C.pink}}><h3 className="text-xl font-bold mb-1">🎯 Needs re-teaching</h3>{top.length?<ul className="grid gap-1">{top.map(([t,n])=><li key={t}><b>{t}</b>: {n} of {data.length} children scored below 60%</li>)}</ul>:<p>No chapter has weak scores yet.</p>}</div>
<div className="grid md:grid-cols-2 gap-3">{data.map(k=><div key={k.id} className="card" style={{padding:16}}><div className="flex items-center gap-3 mb-2"><div className="text-4xl soft w-14 h-14 flex items-center justify-center">{k.av}</div><div><div className="font-bold">{k.name}</div><div className="text-sm opacity-70">Roll {k.roll} • {k.live?k.live+' live result(s)':'demo data'}</div></div></div>
{k.tp.map(x=><div key={x.t} className="flex items-center gap-2 text-sm my-1"><span className="w-40 truncate">{x.t}</span><div className="flex-1 h-3 soft overflow-hidden"><div style={{width:x.pct+'%',height:'100%',background:x.pct<60?C.pink:C.mint,transition:'width .5s'}}/></div><span className="w-10 text-right">{x.pct}%</span></div>)}</div>)}</div></div>)}
