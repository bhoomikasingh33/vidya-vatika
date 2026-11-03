import React, { useState } from 'react';
import { C } from '../lib/utils.js';
import { sfx } from '../lib/audio.js';

export const Btn=({c=C.blue,className='',...p})=><button {...p} className={'btn '+className} style={{background:c}}/>;

export function Done({score,total,onClose,again}){const s=Math.round(score/total*3);return(
<div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{background:'#0008'}} role="dialog" aria-modal="true">
<div className="card pop text-center max-w-sm w-full relative overflow-hidden">{Array.from({length:16},(_,i)=><span key={i} className="fall" style={{left:(i*6.2)+"%",animationDelay:(i%6)*.15+"s"}} aria-hidden="true">{["🎉","⭐","🎊","✨"][i%4]}</span>)}<div className="text-6xl">{score===total?'🏆':'🎉'}</div>
<h2 className="text-3xl font-bold mt-2">{score===total?'Perfect!':'Well done!'}</h2>
<p className="text-xl mt-1">You scored {score} out of {total}</p>
<div className="text-5xl my-3" aria-label={s+' stars'}>{[0,1,2].map(i=><span key={i} style={{opacity:i<s?1:.2}}>⭐</span>)}</div>
<div className="flex gap-3 justify-center flex-wrap"><Btn c={C.mint} onClick={again}>Play again</Btn><Btn c={C.violet} onClick={onClose}>Close</Btn></div></div></div>)}

export function Quiz({items,color=C.blue,onStars,topic}){
const[i,setI]=useState(0),[pick,setPick]=useState(null),[sc,setSc]=useState(0),[end,setEnd]=useState(false),[k,setK]=useState(0);
const it=items[i];
const choose=n=>{if(pick!==null)return;setPick(n);const ok=n===it.a;if(ok)setSc(s=>s+1);sfx(ok)};
const next=()=>{if(i+1<items.length){setI(i+1);setPick(null)}else{setEnd(true);window.__rec&&window.__rec(topic||'English grammar',sc,items.length);onStars&&onStars(Math.round((sc)/items.length*3))}};
const reset=()=>{setI(0);setPick(null);setSc(0);setEnd(false);setK(k+1)};
return(<div className="card" key={k}>
<div className="flex justify-between mb-2 font-semibold"><span>Question {i+1} of {items.length}</span><span>Score: {sc}</span></div>
<div className="h-3 soft mb-4 overflow-hidden"><div style={{width:(i/items.length*100)+'%',background:color,height:'100%',transition:'width .3s'}}/></div>
<h3 className={'text-2xl font-semibold mb-4 '+(it.hi?'hi':'')}>{it.q}</h3>
<div className="grid gap-3">{it.o.map((o,n)=><button key={n} disabled={pick!==null} onClick={()=>choose(n)} className={'opt '+(it.hi?'hi ':'')+(pick!==null?(n===it.a?'ok':n===pick?'bad':''):'')}>{o}</button>)}</div>
{pick!==null&&<div className="mt-4 pop"><p className="text-xl font-semibold">{pick===it.a?'✅ Super! That is right.':'💡 Not quite. Answer: '+it.o[it.a]}</p><Btn c={color} className="mt-3" onClick={next}>{i+1<items.length?'Next question':'See my score'}</Btn></div>}
{end&&<Done score={sc} total={items.length} onClose={()=>setEnd(false)} again={reset}/>}
</div>)}
