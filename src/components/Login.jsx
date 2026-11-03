import React, { useState } from 'react';
import { STU } from '../data/adminData.js';
import { C } from '../lib/utils.js';
import { Btn } from './ui.jsx';

export function Login({onLogin,onClose}){
const[u,setU]=useState(''),[p,setP]=useState(''),[e,setE]=useState(false);
const go=()=>{const id=u.trim().toUpperCase();if(p!=='1234'){setE(true);return}
if(id==='TEACHER1')return onLogin({id:'teacher1',name:'Mrs. Sunita Arora',role:'T'});
const st=STU.find(x=>x.id===id);if(st)return onLogin({id:st.id,name:st.name,role:'S'});setE(true)};
return(<div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{background:'#0008'}} role="dialog" aria-modal="true"><div className="card pop max-w-sm w-full grid gap-3">
<div className="text-5xl text-center bob">🦉</div><h2 className="text-2xl font-bold text-center">Login</h2>
<input aria-label="Username" placeholder="Username" value={u} onChange={x=>{setU(x.target.value);setE(false)}} autoComplete="username"/>
<input aria-label="PIN" type="password" inputMode="numeric" placeholder="PIN" value={p} onChange={x=>{setP(x.target.value);setE(false)}} onKeyDown={x=>x.key==='Enter'&&go()} autoComplete="current-password"/>
{e&&<p role="alert" className="font-semibold" style={{color:C.pink}}>Wrong username or PIN.</p>}
<p className="text-sm soft p-2">Demo logins: student <b>3A1</b> (or 4A2, 5A3…) • teacher <b>teacher1</b> • PIN <b>1234</b></p>
<div className="flex gap-3"><Btn c={C.blue} className="flex-1" onClick={go}>Sign in</Btn><Btn c="#94A3B8" onClick={onClose}>Cancel</Btn></div></div></div>)}
