import React, { useState } from 'react';
import { loadDB, saveDB } from './lib/storage.js';
import { LC } from './lib/context.js';
import { C } from './lib/utils.js';
import { Kids } from './components/Kids.jsx';
import { Admin } from './components/Admin.jsx';
import { Login } from './components/Login.jsx';

export function App(){
const[hi,setHi]=useState(false),[zone,setZone]=useState('kids'),[stars,setStars]=useState(0),[sound,setSound]=useState(true),[ok,setOk]=useState(false),[toast,setToast]=useState(''),[user,setUser]=useState(null),[showLogin,setShowLogin]=useState(false);
const add=n=>{if(n>0){setStars(s=>s+n);setToast('+'+n+' ⭐');setTimeout(()=>setToast(''),1400)}};
window.__rec=(topic,score,total)=>{if(user&&user.role==='S'){const a=loadDB();a.push({u:user.id,topic,score,total,t:Date.now()});saveDB(a)}};
return(<LC.Provider value={hi}><div><header className="sticky top-0 z-40 flex items-center gap-3 px-4 py-2" style={{background:'var(--card)',borderBottom:'2px solid var(--line)',top:'env(safe-area-inset-top,0px)'}}>
<span className="text-2xl font-bold flex-1">🌳 {hi?"विद्या वाटिका":"Vidya Vatika"}</span><button className="btn" style={{background:C.pink,minHeight:48}} onClick={()=>setHi(!hi)} aria-label="Switch language">{hi?"English":"हिन्दी"}</button>{user?<button className="btn" style={{background:"#64748B",minHeight:48}} onClick={()=>{setUser(null);setOk(false);setZone("kids")}}>👤 {user.name.split(" ")[0]} • Logout</button>:<button className="btn" style={{background:C.blue,minHeight:48}} onClick={()=>setShowLogin(true)}>🔑 Login</button>}
<button className="btn" style={{background:zone==='kids'?C.violet:'#94A3B8',minHeight:48}} onClick={()=>setZone('kids')}>🎈 {hi?'बच्चों का कोना':'Kids’ Zone'}</button>
<button className="btn" style={{background:zone==='admin'?C.blue:'#94A3B8',minHeight:48}} onClick={()=>setZone('admin')}>🏫 {hi?'स्कूल पोर्टल':'School Portal'}</button></header>
{zone==='kids'?<Kids stars={stars} add={add} sound={sound} setSound={setSound}/>:<Admin unlocked={ok} unlock={()=>setOk(true)}/>}
{showLogin&&<Login onClose={()=>setShowLogin(false)} onLogin={u=>{setUser(u);setShowLogin(false);if(u.role==='T'){setOk(true);setZone('admin')}else setZone('kids');setToast('Welcome, '+u.name.split(' ')[0]+'!');setTimeout(()=>setToast(''),1800)}}/>}{toast&&<div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full text-white text-2xl font-bold pop" style={{background:C.sun,zIndex:60}} aria-live="polite">{toast}</div>}</div></LC.Provider>)}
