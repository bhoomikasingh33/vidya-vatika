import { r, shuf } from '../lib/utils.js';

export const gcd=(a,b)=>b?gcd(b,a%b):a;

export const G={
3:[()=>{const h=r(1,9),t=r(0,9),o=r(0,9);return[`${h} hundreds + ${t} tens + ${o} ones = ?`,100*h+10*t+o,'Write the number of hundreds, tens and ones in order.','Fun with Numbers']},
()=>{const x=r(120,520),y=r(110,450);return[`${x} + ${y} = ?`,x+y,'Add ones, then tens, then hundreds.','Give and Take']},
()=>{const x=r(500,950),y=r(120,480);return[`${x} − ${y} = ?`,x-y,'Start from the ones. Borrow from the tens if needed.','Fun with Give and Take']},
()=>{const w=r(2,9);return[`How many days are there in ${w} weeks?`,7*w,'1 week = 7 days.','Time Goes On']},
()=>{const a=r(2,10),b=r(2,10);return[`There are ${a} rows of ${b} chairs. How many chairs in all?`,a*b,`Repeated addition: ${b} added ${a} times.`,'How Many Times']},
()=>{const k=r(2,9);return[`A rope is ${k} m long. How many cm is that?`,100*k,'1 m = 100 cm.','Length, Mass and Capacity']},
()=>{const b=r(2,9),k=r(5,15);return[`${b*k} sweets are shared equally among ${b} children. How many does each child get?`,k,`Which number times ${b} makes ${b*k}?`,'Can We Share']},
()=>{const b=r(15,60),p=r(2,40);return[`The bill is ₹${b}. Meena pays ₹${b+p}. How much change should she get (₹)?`,p,'Change = amount paid − bill.','Rupees and Paisa']},
()=>{const d=[2,3,4,5][r(0,3)],k=r(2,6);return[`What is 1/${d} of ${d*k} mangoes?`,k,`Share equally into ${d} parts.`,'Fractional Numbers']},
()=>{const x=[['triangle',3],['rectangle',4],['square',4]][r(0,2)];return[`How many sides does a ${x[0]} have?`,x[1],'Count the straight lines that make the shape.','Geometrical Shapes']}],
4:[()=>{const k=r(2,9);return[`${k} km = ? m`,1000*k,'1 km = 1000 m.','Long and Short']},
()=>{const h=r(13,23);return[`${h}:00 on a 24-hour clock is what hour on a 12-hour clock (PM)?`,h-12,'Subtract 12 from hours after 12 noon.','Tick Tick Tick']},
()=>{const n=r(3,9),p=r(12,48);return[`The junk seller sells ${n} books at ₹${p} each. How much do they cost in all (₹)?`,n*p,'Cost of one × number of books.','The Junk Seller']},
()=>{const c=r(20,60),p=r(5,25);return[`A junk seller buys a toy for ₹${c} and sells it for ₹${c+p}. What is the profit (₹)?`,p,'Profit = selling price − buying price.','The Junk Seller']},
()=>{const l=r(2,9);return[`A jug holds ${l} litres of milk. How many ml is that?`,1000*l,'1 litre = 1000 ml.','Jugs and Mugs']},
()=>{const q=r(3,15);return[`A wheel has a diameter of ${2*q} cm. What is its radius (cm)?`,q,'Radius is half of the diameter.','Carts and Wheels']},
()=>{const p=[2,4][r(0,1)],k=r(2,9);return[`What is ${p===2?'½':'¼'} of ${p*k} mangoes?`,k,`Share equally into ${p} parts.`,'Halves and Quarters']},
()=>{const b=r(3,9),k=r(12,40);return[`${b*k} apples are packed equally in ${b} boxes. How many apples are in each box?`,k,`Use the table of ${b} to divide.`,'Tables and Shares']},
()=>{const k=r(2,9);return[`A bag of rice weighs ${k} kg. How many grams is that?`,1000*k,'1 kg = 1000 g.','How Heavy How Light']},
()=>{const l=r(20,90),w=r(10,60);return[`A rectangular field is ${l} m long and ${w} m wide. How long is the fence around it (in m)?`,2*(l+w),'Perimeter = add all four sides.','Fields and Fences']},
()=>{const a=r(3,9),b=r(3,9),c=r(3,9);return[`A chart shows ${a} red, ${b} blue and ${c} green balloons. How many balloons in all?`,a+b+c,'Add the numbers from the chart.','Smart Charts']}],
5:[()=>{const a=r(30,80),b=r(30,70);return[`Two angles of a triangle are ${a}° and ${b}°. What is the third angle (in degrees)?`,180-a-b,'The three angles of a triangle add up to 180°.','Shapes and Angles']},
()=>{const l=r(6,25),w=r(4,15);return[`A rectangle is ${l} cm long and ${w} cm wide. What is its perimeter (cm)?`,2*(l+w),'Perimeter = 2 × (length + breadth).','How Many Squares']},
()=>{const f=[[3,5],[2,3],[3,4]][r(0,2)],k=r(2,9);return[`What is ${f[0]}/${f[1]} of ${f[1]*k}?`,f[0]*k,`Find 1/${f[1]} first, then multiply by ${f[0]}.`,'Parts and Wholes']},
()=>{const n=r(1,4),d=r(3,7),m=r(2,5);return[`${n}/${d} = ?/${d*m}. Find the missing number.`,n*m,'Multiply the top and bottom by the same number.','Parts and Wholes']},
()=>{const p=[[4,6],[3,5],[6,8],[4,10],[9,6]][r(0,4)];return[`What is the smallest number that is a multiple of both ${p[0]} and ${p[1]}?`,p[0]*p[1]/gcd(p[0],p[1]),'List the multiples of each number until one matches.','Be My Multiple, I’ll be Your Factor']},
()=>{const n=[12,18,20,24,30][r(0,4)];let c=0;for(let i=1;i<=n;i++)if(n%i===0)c++;return[`How many factors does ${n} have?`,c,'Find pairs of numbers that multiply to make it.','Be My Multiple, I’ll be Your Factor']},
()=>{const a=r(11,89)/10,b=r(11,89)/10;return[`${a.toFixed(1)} + ${b.toFixed(1)} = ?`,+(a+b).toFixed(1),'Line up the decimal points.','Tenths and Hundredths']},
()=>{const l=r(6,25),w=r(4,15);return[`A rectangle is ${l} cm long and ${w} cm wide. What is its area (sq cm)?`,l*w,'Area = length × width.','Area and its Boundary']},
()=>{const a=r(12,48),b=r(11,19);return[`${a} × ${b} = ?`,a*b,`${a} × 10 plus ${a} × ${b-10}.`,'Way to Multiply and Divide']},
()=>{const k=r(2,9),g=r(1,9)*100;return[`${k} kg ${g} g = ? g`,1000*k+g,'Change kg to g first (1 kg = 1000 g).','How Big How Heavy']},
()=>{const x=[['square',4],['rectangle',2],['equilateral triangle',3]][r(0,2)];return[`How many lines of symmetry does a ${x[0]} have?`,x[1],'A line of symmetry folds the shape into two matching halves.','Does it Look Same']},
()=>{const a=r(2,9),d=r(2,6);return[`${a}, ${a+d}, ${a+2*d}, ${a+3*d}, ? What number comes next?`,a+4*d,'Find what is added each time.','Can You See the Pattern']},
()=>{const x=[['faces',6],['edges',12],['corners',8]][r(0,2)];return[`How many ${x[0]} does a cube have?`,x[1],'Picture a dice and count.','Boxes and Sketches']},
()=>{const a=r(3,9),b=r(3,9),c=r(3,9);return[`A chart shows ${a} mangoes, ${b} apples and ${c} bananas sold. How many fruits were sold?`,a+b+c,'Add the numbers from the chart.','Smart Charts']}]};

export function mkOpts(a){const st=Number.isInteger(a)?r(1,10):.1*r(1,5);const s=new Set([a]);while(s.size<4){const v=+(a+(r(0,1)?1:-1)*st*r(1,3)).toFixed(1);if(v>0)s.add(v)}return shuf([...s])}
