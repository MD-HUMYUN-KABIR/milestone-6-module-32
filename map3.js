const numbers = [2,8,4,6,3];
// const output =[];
// for(const number of numbers){
//     const doubled = number * 2;
//     output.push(doubled);
// }

function getDoubles(numbers){
    const output =[]; //const e push kora jay
for(const number of numbers){
    // const doubled = number * 2;
    const doubled = doubleIt(number);
    output.push(doubled); 
}
return output;
};

const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
//map kuno akti array er moddhe kaj kore  abar sei array er sob element k alada kore fele  and kuno result k abar sekhane  arekta array te provide kore
//or
const makeDouble2 = numbers.map(num => num * 2);//map die array er sob element k dhora hoyeche and sei element gula k e paremeter hisebe pathanu hoyeche.
//or
const makeDouble3 = numbers.map(x => x * 2);
//console.log(makeDouble3);
const result = getDoubles(numbers);
//console.log(result);
const fiveTimes = [1,2,3,4,5,6,7].map(x => x * 2);
//console.log(fiveTimes);