import React, { useState } from 'react';
import { SENT, LESSONS, GQ } from '../data/grammarData.js';
import { shuf, C } from '../lib/utils.js';
import { sfx } from '../lib/audio.js';
import { Btn, Quiz } from './ui.jsx';

export function Builder({onStars}){
const cls=window.__cls,list=SENT[cls];
const[n,setN]=useState(0),[bank,setBank]=useState(()=>shuf(list[0])),[ans,setAns]=useState([]),[msg,setMsg]=useState(''),[sc,setSc]=useState(0);
const target=list[n];
const take=(w,idx)=>{setBank(bank.filter((_,j)=>j!==idx));setAns([...ans,w])};
const back=idx=>{setBank([...bank,ans[idx]]);setAns(ans.filter((_,j)=>j!==idx))};
const drop=e=>{e.preventDefault();const idx=+e.dataTransfer.getData('text');if(bank[idx]!==undefined)take(bank[idx],idx)};
const check=()=>{const ok=ans.join(' ')===target.join(' ');sfx(ok);setMsg(ok?'🎉 Perfect sentence!':'🤔 Not yet. Check the word order.');if(ok){setSc(sc+1);onStars&&onStars(1)}};
const nxt=()=>{const m=(n+1)%list.length;setN(m);setBank(shuf(list[m]));setAns([]);setMsg('')};
return(<div className="card"><h3 className="text-2xl font-semibold mb-1">🧩 Sentence Builder</h3><p className="mb-3">Drag the words (or tap them) to make a correct sentence. Solved: {sc}</p>
<div onDragOver={e=>e.preventDefault()} onDrop={drop} className="soft p-3 min-h-[76px] flex gap-2 flex-wrap items-center" aria-label="Your sentence">{ans.length===0&&<span className="opacity-60">Drop words here…</span>}{ans.map((w,j)=><button key={j} className="btn" style={{background:C.violet}} onClick={()=>back(j)}>{w}</button>)}</div>
<div className="flex gap-2 flex-wrap my-4">{bank.map((w,j)=><button key={w+j} draggable onDragStart={e=>e.dataTransfer.setData('text',j)} onClick={()=>take(w,j)} className="btn" style={{background:[C.blue,C.mint,C.pink,C.sun][j%4]}}>{w}</button>)}</div>
<div className="flex gap-3 flex-wrap"><Btn c={C.mint} disabled={!ans.length} onClick={check}>Check</Btn><Btn c={C.sun} onClick={()=>{setBank(shuf(list[n]));setAns([]);setMsg('')}}>Reset</Btn><Btn c={C.blue} onClick={nxt}>Next sentence</Btn></div>
{msg&&<p className="text-xl font-semibold mt-3 pop">{msg}</p>}</div>)}

export function Grammar({onStars}){
const[open,setOpen]=useState(null);
return(<div className="grid gap-5">
<div className="grid sm:grid-cols-2 gap-4">{LESSONS.map(l=><button key={l.t} onClick={()=>{setOpen(open===l.t?null:l.t);sfx(true)}} className="card text-left transition hover:-translate-y-1" style={{borderColor:l.c}}>
<div className="flex items-center gap-3"><span className="text-5xl">{l.e}</span><span className="text-2xl font-bold" style={{color:l.c}}>{l.t}</span></div>
<p className="mt-2 text-lg">{l.d}</p>{open===l.t&&<p className="soft p-3 mt-2 pop font-semibold">Example: {l.x}</p>}</button>)}</div>
<Builder onStars={onStars}/><Quiz items={GQ[window.__cls]} color={C.pink} onStars={onStars}/></div>)}
