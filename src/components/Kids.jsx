import React, { useState } from 'react';
import { C } from '../lib/utils.js';
import { LC } from '../lib/context.js';
import { Learn, Fact } from './Learn.jsx';
import { Syllabus } from './Syllabus.jsx';
import { Math_ } from './MathPractice.jsx';
import { Grammar } from './Grammar.jsx';
import { Speech } from './Speech.jsx';
import { Stories } from './Stories.jsx';
import { Btn } from './ui.jsx';
import { hush } from '../lib/audio.js';

export const SUBS=[['learn','🎓','Learn','सीखो',C.sun],['map','📖','My Syllabus','मेरा पाठ्यक्रम',C.violet],['math','🧮','Math Lab','गणित',C.blue],['gram','✍️','English Grammar','अंग्रेज़ी व्याकरण',C.mint],['speech','🎙️','Pronunciation','उच्चारण',C.pink],['story','🎭','Rhymes & Stories','कविता और कहानी',C.sun]];

export function Kids({stars,add,sound,setSound}){
const[cls,setCls]=useState(3),[sub,setSub]=useState('learn');window.__cls=cls;window.__snd=sound;const hi=React.useContext(LC);
const lvl=Math.min(stars%10,10);
const S=sub==='learn'?Learn:sub==='map'?Syllabus:sub==='math'?Math_:sub==='gram'?Grammar:sub==='speech'?Speech:Stories;
return(<div className="max-w-5xl mx-auto p-4 grid gap-5">
<div className="card flex items-center gap-4 flex-wrap" style={{borderColor:C.sun}}>
<div className="text-7xl bob" aria-hidden>🦉</div>
<div className="flex-1 min-w-[200px]"><h1 className="text-3xl font-bold">{hi?"नमस्ते! मैं चीकू उल्लू हूँ।":"Namaste! I am Chiku the owl."}</h1><p className="text-lg">{hi?'अपनी कक्षा और विषय चुनो। हर सही उत्तर पर तारे मिलते हैं!':'Pick your class and a subject. Every right answer earns stars!'}</p>
<div className="h-4 soft mt-2 overflow-hidden" role="progressbar" aria-valuenow={lvl} aria-valuemax={10}><div style={{width:lvl*10+'%',background:C.sun,height:'100%',transition:'width .4s'}}/></div><p className="text-sm">{10-lvl} {hi?"तारे और, अगले बैज के लिए":"more stars for the next badge"}</p><Fact hi={hi}/></div>
<div className="text-center"><div className="text-4xl font-bold">⭐ {stars}</div><div className="text-2xl" aria-label="badges">{'🏅'.repeat(Math.floor(stars/10))||'🌱'}</div>
<button className="btn mt-1" style={{background:sound?C.mint:'#94A3B8'}} aria-pressed={sound} onClick={()=>setSound(!sound)}>{sound?'🔔 Sound on':'🔕 Sound off'}</button></div></div>
<div className="flex gap-3 flex-wrap" role="tablist" aria-label="Class">{[3,4,5].map(c=><Btn key={c} c={cls===c?C.violet:'#94A3B8'} onClick={()=>setCls(c)} role="tab" aria-selected={cls===c}>{hi?'कक्षा':'Class'} {c}</Btn>)}</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">{SUBS.map(([k,e,t,h,c])=><button key={k} onClick={()=>{hush();setSub(k)}} className="btn text-left" style={{background:c,minHeight:64,outline:sub===k?'4px solid var(--ink)':'none',outlineOffset:2}}><span className="text-2xl mr-2">{e}</span>{hi?h:t}</button>)}</div>
<S key={cls+sub} onStars={add}/></div>)}
