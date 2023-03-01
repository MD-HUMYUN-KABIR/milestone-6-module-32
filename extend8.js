class TeamMembers{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location
    }
    provideFeedBack(){
        console.log(`${this.name} thank you for your feedback`);
    }
}
//
class Instructor extends TeamMembers{
    designation = 'web course'
    team = 'web team'
    //constructor likhte hobe
    constructor(name,locaton){
super(name,locaton);
    }
    starSupportSession(time){
        console.log(`star${time}`);
    }
    creatQuize(module){
        console.log(`creat quize ${module}`);
    }
}
//
class developer extends TeamMembers{
    designation = 'dev course'
    team = 'dev team'
    tech;
    //constructor likhte hobe
    constructor(name,locaton,tech){
        super(name,locaton);
        this.tech = tech;
    }
    developFeature(feature){ // select and press f2 so update all where
        console.log(`star${feature}`);
    }
    realease(version){
        console.log(`please release ${version}`);
    }
}
//
class JobPlaceMent extends TeamMembers{
    designation = 'job placement comandos'
    team = 'job placement'
    region;
    //constructor likhte hobe
    constructor(name,locaton,region){
        super(name,locaton);
        this.region = region;
    }
    provedeResume(feature){ // select and press f2 so update all where
        console.log(`star${feature}`);
    }
    prepareStudents(version){
        console.log(`please release ${version}`);
    }

}

////
const alia = new developer('alia','dhaka','react');
console.log(alia);
alia.provideFeedBack();
const bipash = new JobPlaceMent('bipasha', 'cumilla','place');
console.log(bipash);
bipash.provideFeedBack();


