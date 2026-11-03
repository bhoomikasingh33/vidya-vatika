import React, { useState, useRef, useEffect } from 'react';
import { hush, say } from '../lib/audio.js';
import { Btn, Quiz } from './ui.jsx';
import { C } from '../lib/utils.js';
import { LIB } from '../data/storyData.js';

export function Reader({s,onStars}){
const[cur,setCur]=useState(-1),[quiz,setQuiz]=useState(false),stop=useRef(false);
useEffect(()=>()=>hush(),[]);
const play=i=>{if(i>=s.lines.length){setCur(-1);return}stop.current=false;
const ok=say(s.lines[i],s.lang,()=>setCur(i),()=>{if(!stop.current)play(i+1)});if(!ok)setCur(i)};
const halt=()=>{stop.current=true;hush();setCur(-1)};
return(<div className="grid gap-4"><div className="card"><div className="flex items-center gap-3 mb-3"><span className="text-5xl">{s.e}</span><h3 className={'text-3xl font-bold '+(s.hi?'hi':'')}>{s.t}</h3></div>
<div className={'grid gap-2 text-xl '+(s.hi?'hi':'')}>{s.lines.map((l,i)=><p key={i} onClick={()=>{halt();setTimeout(()=>play(i),80)}} className={'px-3 py-1 cursor-pointer '+(cur===i?'hl font-semibold':'')}>{l}</p>)}</div>
<div className="flex gap-3 mt-4 flex-wrap"><Btn c={C.mint} onClick={()=>{halt();setTimeout(()=>play(0),80)}}>🔊 Read aloud</Btn><Btn c={C.pink} onClick={halt}>⏹ Stop</Btn><Btn c={C.violet} onClick={()=>{halt();setQuiz(!quiz)}}>{quiz?'Hide quiz':'📝 Take quiz'}</Btn></div>
<p className="text-sm opacity-70 mt-2">Tip: tap any line to hear it. Hindi voice needs a Hindi voice installed on the device.</p></div>
{quiz&&<Quiz items={s.qz} color={C.violet} onStars={onStars} topic={s.t}/>}</div>)}

export function Stories({onStars}){
const[sel,setSel]=useState(null);const cls=window.__cls;
const items=LIB.filter(x=>x.cl===cls);
if(sel)return<div><Btn c={C.sun} className="mb-3" onClick={()=>{hush();setSel(null)}}>◀ All stories & poems</Btn><Reader s={sel} onStars={onStars}/></div>;
return(<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">{items.map(x=><button key={x.id} onClick={()=>setSel(x)} className="card text-left transition hover:-translate-y-1"><div className="text-5xl">{x.e}</div><div className={'text-2xl font-bold mt-1 '+(x.hi?'hi':'')}>{x.t}</div><div className="font-semibold" style={{color:C.violet}}>{x.k} • {x.src}</div></button>)}</div>)}
