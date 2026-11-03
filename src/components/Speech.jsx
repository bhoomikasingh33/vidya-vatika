import React, { useState } from 'react';
import { VOC } from '../data/speechData.js';
import { sfx, say } from '../lib/audio.js';
import { C } from '../lib/utils.js';
import { Btn } from './ui.jsx';

export function Speech({onStars}){
const words=VOC[window.__cls];const[i,setI]=useState(0),[fb,setFb]=useState(null),[hear,setHear]=useState(false),[heard,setHeard]=useState('');
const[w,m]=words[i];
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const listen=()=>{if(!SR){setFb('na');return}const rec=new SR();rec.lang='en-IN';rec.maxAlternatives=3;setHear(true);setFb(null);
rec.onresult=e=>{const t=[...e.results[0]].map(x=>x.transcript.toLowerCase().trim());setHeard(t[0]);const ok=t.some(x=>x.includes(w));setFb(ok?'ok':'bad');sfx(ok);if(ok)onStars(1)};
rec.onerror=()=>{setFb('err');setHear(false)};rec.onend=()=>setHear(false);try{rec.start()}catch(e){setHear(false)}};
return(<div className="card text-center max-w-xl mx-auto"><p className="font-semibold">Word {i+1} of {words.length}</p>
<div className="text-5xl sm:text-6xl font-bold my-4" style={{color:C.violet}}>{w}</div><p className="text-xl mb-4">{m}</p>
<div className="flex gap-3 justify-center flex-wrap"><Btn c={C.blue} onClick={()=>{if(!say(w))setFb('nt')}}>🔊 Listen</Btn><Btn c={hear?C.pink:C.mint} onClick={listen}>{hear?'🎙️ Listening…':'🎤 Say it'}</Btn></div>
<div className="mt-4 min-h-[56px]" aria-live="polite">
{fb==='ok'&&<p className="text-2xl font-bold pop" style={{color:C.mint}}>⭐ Excellent pronunciation!</p>}
{fb==='bad'&&<p className="text-xl font-semibold pop">I heard “{heard}”. Listen again and try once more!</p>}
{fb==='na'&&<p className="soft p-3">Voice check needs Chrome or Edge with a microphone. You can still listen and repeat aloud.</p>}
{fb==='err'&&<p className="soft p-3">Could not use the microphone. Please allow mic access and try again.</p>}
{fb==='nt'&&<p className="soft p-3">Speech playback is not supported in this browser.</p>}</div>
<div className="flex gap-3 justify-center mt-3"><Btn c={C.sun} onClick={()=>{setI((i+words.length-1)%words.length);setFb(null)}}>◀ Back</Btn><Btn c={C.violet} onClick={()=>{setI((i+1)%words.length);setFb(null)}}>Next ▶</Btn></div></div>)}
