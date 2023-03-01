const arr = [{name:'abul',age:25,address:'dhaka'}];
console.log(arr[0].name);
///
const data = {
    count:5000,
    data:[
        {id:1,name:'babul',job:'leader'},
        {id:1,name:'babul',job:'leader'}
    ]
}
console.log(data.data[0].job);//leader
//
const user = {
    id:5001,
    name:'thomas alba edison',
    address:{
        street:{
            first:'35/a kochukhet',
            second:'third floor',
            third:'right side'
        },
        postOffice:'cantonment',
        city:'dhaka'
    }
}
console.log(user.address.street.second);
//console.log(user.address.stret.second);//Cannot read properties of undefined (reading 'second') majkhane akta property vuul ache ...stret
//console.log(user.address.stret?.second);//result undefined stret? porer value na pele undefined dekhabe