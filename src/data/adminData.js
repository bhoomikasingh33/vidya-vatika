import { C } from '../lib/utils.js';

export const FN='Aarav Ananya Vihaan Diya Aditya Ishita Arjun Saanvi Kabir Myra Reyansh Anika Krish Navya Rohan Pari Ayaan Tara Dev Kiara Yash Riya Ishaan Meera Veer Sara Neel Aisha Harsh Zoya Om Prisha Samar Jiya Lakshya Avni'.split(' ');

export const LN='Sharma Verma Singh Gill Kapoor Mehta Nair Reddy Bhatia Joshi Khan Das'.split(' ');

export const AV=['🐯','🦁','🐼','🦊','🐰','🐨'];

export const STU=[];

let q=0;

[3,4,5].forEach(c=>['A','B'].forEach(s=>{for(let n=1;n<=6;n++,q++)STU.push({id:c+s+n,c,s,roll:n,name:FN[q%36]+' '+LN[(q*5+c)%12],av:AV[(q+n)%6],st:'Present'})}));

export const TEA=[['Mrs. Sunita Arora','Class 3A • English'],['Mr. Rajesh Kumar','Class 3B • Maths'],['Ms. Pooja Malhotra','Class 4A • EVS'],['Mr. Harpreet Singh','Class 4B • Hindi'],['Mrs. Neelam Chopra','Class 5A • Maths'],['Ms. Kavita Sethi','Class 5B • English']];

export const SC={Present:C.mint,Absent:C.pink,Late:C.sun};
