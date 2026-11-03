import { C } from '../lib/utils.js';

export const LESSONS=[{t:'Nouns',e:'🏠',c:C.blue,d:'Naming words: people, places, animals and things.',x:'The girl feeds the sparrow in the garden.'},
{t:'Pronouns',e:'👧',c:C.mint,d:'Words used in place of nouns, like he, she, it, they.',x:'Meera is kind. She helps everyone.'},
{t:'Adjectives',e:'🌈',c:C.pink,d:'Describing words that tell more about a noun.',x:'The yellow butterfly sat on a red flower.'},
{t:'Verbs & Tenses',e:'🏃',c:C.violet,d:'Action words. Simple present and simple past show when.',x:'I walk to school. Yesterday I walked to the park.'},
{t:'Prepositions',e:'📍',c:C.sun,d:'Words that show place or position, like on, in, under, over.',x:'The book is on the table.'},
{t:'Rhymes & Sounds',e:'🎵',c:C.blue,d:'Rhyming words end with the same sound. Birds make sound words.',x:'sand – hand, air – chair. Crow: kaw kaw. Sparrow: chirp chirp.'}];

export const SENT={3:[['Trees','give','us','fruit','and','shade'],['The','camel','is','the','ship','of','the','desert'],['The','little','fish','swam','away']],
4:[['Robin','Hood','helped','the','poor','people'],['We','visited','Mansar','Lake','in','summer'],['The','boy','sat','on','the','bridge']],
5:[['Birbal','gave','a','wise','answer'],['The','eagle','flew','over','the','mountain'],['The','piper','played','a','sweet','tune']]};

export const GQ={3:[{q:'Which word rhymes with "sand"?',o:['hand','sea','tree'],a:0},{q:'Which sound does a crow make?',o:['Chirp chirp','Kaw kaw','Moo moo'],a:1},{q:'Pick the PRONOUN: "She plays in the garden."',o:['She','plays','garden'],a:0},{q:'Pick the ADJECTIVE: "The yellow butterfly flew away."',o:['yellow','butterfly','flew'],a:0}],
4:[{q:'Fill in: "The boy sat ___ the bridge."',o:['on','and','but'],a:0},{q:'Which sentence is punctuated correctly?',o:['where is my bag','Where is my bag?','where is my bag.'],a:1},{q:'Pick the PRONOUN: "Tom said that he was sick."',o:['Tom','he','sick'],a:1},{q:'Pick the VERB: "Robin Hood helped the poor."',o:['Robin','helped','poor'],a:1}],
5:[{q:'What is the simple past of "run"?',o:['runs','ran','running'],a:1},{q:'Choose a SYNONYM for "big".',o:['large','small','thin'],a:0},{q:'Fill in: "I hurt ___ while playing."',o:['me','myself','mine'],a:1},{q:'Fill in: "The eagle flew ___ the mountain."',o:['over','but','and'],a:0}]};
