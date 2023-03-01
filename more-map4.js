const numbers = [12,13,14,15,16];
const half = numbers.map(n => n/2);
const third = numbers.map(n => n/3);
//
const friends = ['tom hanks','tom cruise','tom braby','tom solaiman'];
const firstLetters = friends.map(friend => friend[0]);
const nameLength = friends.map(friend => friend.length);
//
const products = [
    {id:1,name:'laptop',price:45000},
    {id:1,name:'mobile',price:45000},
    {id:1,name:'watch',price:45000},
    {id:1,name:'tablet',price:45000}
];
const items = products.map(product => product.name);
console.log(items);//all name k dekhabe
const price = products.map(p => p.price);
console.log(price);//all price k dekhabe
////map = morph array piece by piece//array er prottekta element er upore map kaj korbe.but main array k kuno poriborton korbe na