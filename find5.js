const numbers = [12,4,34,45,67,20,13];
const onlyOne = numbers.find(five => five % 5 == 0);
console.log(onlyOne);
const all = numbers.filter(five => five % 5 == 0);
console.log(all);//find and filter 2 ta te e condition thake defference hocche j filter er khetre segula natch korbe segula  k array hisebe dekhabe and find e sudu first jeita match korbe seta k e dekhabe
//
const products = [
    {id:1,name:'laptop',price:15000},
    {id:1,name:'mobile',price:35000},
    {id:1,name:'watch',price:4000},
    {id:1,name:'tablet',price:5000}
];

const price = products.find(pric => pric.price < 10000);
console.log(price);