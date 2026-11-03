export const C={blue:'#3B82F6',mint:'#10B981',sun:'#F59E0B',pink:'#EC4899',violet:'#8B5CF6'};

export const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));

export const shuf=a=>[...a].sort(()=>Math.random()-.5);

export const now=()=>new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
