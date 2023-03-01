class Instructor{
    name;
    designation = 'web course'
    team = 'web team'
    location;
    //constructor likhte hobe
    constructor(name,locaton){
        this.name = name;
        this.location = locaton;
    }
    starSupportSession(time){
        console.log(`star${time}`);
    }
    creatQuize(module){
        console.log(`creat quize ${module}`);
    }
}
const aamir = new Instructor('amir','mumbai'); // must write 'new'
console.log(aamir);
aamir.starSupportSession('9.00');
aamir.creatQuize(60);
/* Instructor {
  name: 'amir',
  designation: 'web course',
  team: 'web team',
  location: 'mumbai'        
}
star9.00
creat quize 60 */
const solaimaan = new Instructor('solaiman','dhamti');
console.log(solaimaan);/* Instructor {
    name: 'solaiman',
    designation: 'web course',
    team: 'web team',
    location: 'dhamti'
  } */
  ///////
  class men{
    name;
    yearOfBirth;
    age;
    job;
    // calculatorAge();
    constructor(name,yearOfBirth,age,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.age = age;
        this.job = job;
    }

  }
  const saamir = new men('saamir','22-22-2022',12,'govt');
  console.log(saamir);
  const sabbir = new men('sabbir','22-22-2022',12,'govt');
  console.log(sabbir);