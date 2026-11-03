import React, { useState } from 'react';
import { STU, SC, TEA } from '../data/adminData.js';
import { C, now } from '../lib/utils.js';
import { Btn } from './ui.jsx';
import { ProgressBoard } from './ProgressBoard.jsx';

export function Students(){
const[all,setAll]=useState(STU),[c,setC]=useState(3),[s,setS]=useState('A'),[msg,setMsg]=useState('');
const list=all.filter(x=>x.c===c&&x.s===s);const n=k=>list.filter(x=>x.st===k).length;
const set=(id,st)=>setAll(all.map(x=>x.id===id?{...x,st}:x));
const rate=Math.round((n('Present')+n('Late'))/list.length*100);
return(<div className="grid gap-4">
<div className="flex gap-3 flex-wrap items-center"><select aria-label="Class" value={c} onChange={e=>setC(+e.target.value)}>{[3,4,5].map(x=><option key={x} value={x}>Class {x}</option>)}</select>
<select aria-label="Section" value={s} onChange={e=>setS(e.target.value)}>{['A','B'].map(x=><option key={x}>{x}</option>)}</select>
<button className="btn" style={{background:C.mint}} onClick={()=>setAll(all.map(x=>x.c===c&&x.s===s?{...x,st:'Present'}:x))}>✔ Mark all present</button>
<button className="btn" style={{background:C.blue}} onClick={()=>{const csv='Roll,Name,Status\n'+list.map(x=>[x.roll,x.name,x.st].join(',')).join('\n');setMsg(`Report for Class ${c}${s} prepared (${list.length} rows). In a live system this downloads as CSV/PDF.`);console.log(csv)}}>⬇ Export report</button></div>
{msg&&<p className="soft p-3" aria-live="polite">{msg}</p>}
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">{[['Total',list.length,C.blue],['Present',n('Present'),C.mint],['Absent',n('Absent'),C.pink],['Attendance',rate+'%',C.violet]].map(([k,v,col])=><div key={k} className="card text-center" style={{borderColor:col}}><div className="text-3xl font-bold" style={{color:col}}>{v}</div><div>{k}</div></div>)}</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{list.map(x=><div key={x.id} className="card flex items-center gap-3" style={{padding:14}}>
<div className="text-4xl soft w-14 h-14 flex items-center justify-center">{x.av}</div>
<div className="flex-1"><div className="font-bold">{x.name}</div><div className="text-sm opacity-70">Roll no. {x.roll} • Class {x.c}{x.s}</div>
<div className="flex gap-1 mt-1">{['Present','Absent','Late'].map(k=><button key={k} aria-pressed={x.st===k} onClick={()=>set(x.id,k)} className="px-3 rounded-full text-sm font-semibold" style={{minHeight:36,background:x.st===k?SC[k]:'var(--soft)',color:x.st===k?'#fff':'var(--ink)'}}>{k[0]}{k.slice(1).toLowerCase()}</button>)}</div></div></div>)}</div></div>)}

export function Teachers(){
const[t,setT]=useState(TEA.map(([n,r],i)=>({n,r,st:i===5?'On Leave':'Out of Office',in:'',out:''})));
const[log,setLog]=useState([]);
const act=(i,k)=>{const tm=now();setT(t.map((x,j)=>j===i?{...x,st:k==='in'?'Clocked In':'Out of Office',[k]:tm}:x));setLog([`${tm} – ${t[i].n} ${k==='in'?'clocked in':'clocked out'}`,...log])};
const col={'Clocked In':C.mint,'On Leave':C.sun,'Out of Office':'#94A3B8'};
const MS=[[22,1,0],[20,2,1],[21,1,0],[19,2,2],[22,0,0],[17,0,5]];
return(<div className="grid lg:grid-cols-3 gap-4"><div className="lg:col-span-2 grid gap-3">{t.map((x,i)=><div key={x.n} className="card flex items-center gap-3 flex-wrap" style={{padding:14}}>
<div className="flex-1 min-w-[180px]"><div className="font-bold">{x.n}</div><div className="text-sm opacity-70">{x.r}</div><div className="text-sm">In: {x.in||'—'} • Out: {x.out||'—'}</div></div>
<span className="px-3 py-1 rounded-full text-white text-sm font-semibold" style={{background:col[x.st]}}>{x.st}</span>
<button className="btn" style={{background:C.mint,minHeight:44}} disabled={x.st!=='Out of Office'} onClick={()=>act(i,'in')}>Check in</button>
<button className="btn" style={{background:C.pink,minHeight:44}} disabled={x.st!=='Clocked In'} onClick={()=>act(i,'out')}>Check out</button></div>)}</div>
<div className="grid gap-4 content-start"><div className="card"><h3 className="font-bold mb-2">🕒 Timestamp log</h3>{log.length?<ul className="grid gap-1 text-sm">{log.map((l,i)=><li key={i}>{l}</li>)}</ul>:<p className="opacity-70">No check-ins yet today.</p>}</div>
<div className="card overflow-x-auto"><h3 className="font-bold mb-2">📅 This month</h3><table className="w-full text-sm"><thead><tr className="text-left"><th>Teacher</th><th>Days</th><th>Late</th><th>Leave</th></tr></thead><tbody>{TEA.map(([n],i)=><tr key={n} className="border-t" style={{borderColor:'var(--line)'}}><td className="py-1">{n.split(' ').slice(-1)[0]}</td><td>{MS[i][0]}</td><td>{MS[i][1]}</td><td>{MS[i][2]}</td></tr>)}</tbody></table></div></div></div>)}

export function Admin({unlocked,unlock}){
const[pin,setPin]=useState(''),[err,setErr]=useState(false),[tab,setTab]=useState('p');
if(!unlocked)return(<div className="max-w-sm mx-auto p-6"><div className="card text-center"><div className="text-5xl">🔒</div><h2 className="text-2xl font-bold my-2">School Admin Login</h2><p className="mb-3">Enter the staff PIN. Demo PIN: <b>1234</b></p>
<input type="password" inputMode="numeric" maxLength={4} aria-label="Staff PIN" className="w-full text-center text-2xl" value={pin} onChange={e=>{setPin(e.target.value);setErr(false)}} onKeyDown={e=>{if(e.key==='Enter'){pin==='1234'?unlock():setErr(true)}}}/>
{err&&<p className="mt-2 font-semibold" style={{color:C.pink}} role="alert">Wrong PIN. Please try again.</p>}
<Btn className="mt-3 w-full" onClick={()=>pin==='1234'?unlock():setErr(true)}>Unlock portal</Btn></div></div>);
return(<div className="max-w-6xl mx-auto p-4 grid gap-4"><div className="flex gap-3 items-center flex-wrap"><h2 className="text-2xl font-bold flex-1">School Administration</h2>
{[['p','Learning progress'],['s','Student attendance'],['t','Teachers & shifts']].map(([k,l])=><button key={k} onClick={()=>setTab(k)} className="btn" style={{background:tab===k?C.blue:'#94A3B8',minHeight:48}}>{l}</button>)}</div>
{tab==='p'?<ProgressBoard/>:tab==='s'?<Students/>:<Teachers/>}</div>)}
