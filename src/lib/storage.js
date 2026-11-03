export const DB_KEY='vv_progress';

export const loadDB=()=>{try{return JSON.parse(localStorage.getItem(DB_KEY)||'[]')}catch(e){return[]}};

export const saveDB=a=>{try{localStorage.setItem(DB_KEY,JSON.stringify(a))}catch(e){}};
