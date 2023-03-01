const boy = {
    name: 'gelam',
    age:15,
    subject:{
        math:24,
        english:45,
    }
}

const math = boy['subject']['math'];
console.log(math);//24
const englishmarks = 'english';
const englishresult = boy.subject[englishmarks];
console.log(englishresult);//45 object er kuno property k const e rakhle pore seta k [] die call korte hoy
//notation imitation
/* Object.123; //wrong
Object.123ergh;//wrong
Object.wer123;
Object.$name;
Object.name-122;//wrong
Object.'name-122';//wrong
Object.NAME;
Object.name;

Object[123]; 
Object['123name'];
Object['name123'];
Object['$name'];
Object['name-123'];
Object[NAME];
Object[name]; */

