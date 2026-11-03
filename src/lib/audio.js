window.__snd=true;

export function sfx(ok){if(!window.__snd)return;try{const c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.type='triangle';o.connect(g);g.connect(c.destination);g.gain.value=.08;o.frequency.value=ok?660:220;if(ok)o.frequency.setValueAtTime(880,c.currentTime+.12);o.start();o.stop(c.currentTime+(ok?.3:.2))}catch(e){}}

export function say(t,lang='en-IN',onStart,onEnd){if(!('speechSynthesis' in window))return false;const u=new SpeechSynthesisUtterance(t);u.lang=lang;u.rate=.85;u.onstart=onStart;u.onend=onEnd;speechSynthesis.speak(u);return true}

export const hush=()=>{if('speechSynthesis' in window)speechSynthesis.cancel()};
