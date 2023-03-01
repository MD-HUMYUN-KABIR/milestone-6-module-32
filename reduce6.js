const numbers = [1,2,3,4,5];
///.reduce (accumulatorFunction, initial value)
//accumulatior functon use two parameter
const total1 = numbers.reduce((previous,current) => previous + current , 0);
console.log(total1);//15 or
const total2 = numbers.reduce((previous,current) => {
 console.log(previous,current);
    return   previous + current
} , 0);
