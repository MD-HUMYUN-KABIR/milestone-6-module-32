const numbers = [12,4,34,45,67,20,13];
const bigNumber = numbers.filter(number => number > 20);
//console.log(bigNumber);
const tiny = numbers.filter(n => n < 20);
//console.log(tiny);
const tiny2 = numbers.map(n => n < 20);
console.log(tiny2);//only true and false k array hisebe dekhabe
const even = numbers.filter(even => even % 2 == 0);
//console.log(even);
//
const products = [
    {id:1,name:'laptop',price:15000},
    {id:1,name:'mobile',price:35000},
    {id:1,name:'watch',price:4000},
    {id:1,name:'tablet',price:5000}
];
const product = products.filter(product => product.price<10000);
//console.log(product); //filter e akta condition thake jeta jeta macth korbe segula dekhabe and find hocche match korle just akta  e dekhabe