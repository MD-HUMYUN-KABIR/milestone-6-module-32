function calculator(salary,tax = 0.25,bonus = 0){
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

//template string
const elementHtml = `
<div> 
<h3> name: </h3>
<p> address:</p>
<p> salary:</p>
<p> other: ${calculator(1000,0,0)}</p>
</div>
`

//arrow
const doubleIt = x => x * 2;
const calculatesallery = (salary,tax,bonus) => salary - salary * tax + bonus;

//spread
const ages = [11,12,13,14,15];
const newAge = [...ages,22,24,23];

//destructuring
const {x,y,z,...c} = {x:45,y:12,z:22,name:'sakib',salary:2344}//extra gula sob c te add hoye jabe
console.log({x,y,z,...c});//{ x: 45, y: 12, z: 22, name: 'sakib', salary: 2344 }
console.log({...c}) //{ name: 'sakib', salary: 2344 }

//quize
const bar = {
    a:2
};
bar.ba = 2;
console.log(bar);//{ a: 2, ba: 2 }

//
function min(nums){
    //return Math.min(...nums);
    return Math.min(nums);
}
console.log(min([1,2,3]));//nan
//
const [a,b] = [1,2,3,4,45,5];
console.log(a+b);//3
//
const {m,n,o} = {m:1, y1:2, o:3};
console.log(n);//undefined 2 pashe name same hote hobe
//
const nums = [1,2,3,4,5];
let output = nums.filter(n=>n%2);
console.log(output);//[ 1, 3, 5 ] 2 dhara vivajja chara bakigula dekhabe
//
const product = {
    price:122
}
const {price} =product ;
console.log(product);//{ price: 122 }