//when there is a need that the derivd class should have the common behaviours that of the parent class then the abstract class is used.
// the abstract keyword is used to define the abstrat class
// inside the abstract class there can be abstract methods and properties
// when those methods and properties are declared as abstract then that methods and properties must be defined inside the derived class that extends the abstract class
abstract class abstract_class {
    name: string;
    age: number;
}
class derived_class extends abstract_class {
    name = "ram";
}
const c1 = new derived_class();
console.log(c1.name);

//create a abstract class "animal" and extend that class in the classes named "cat","dog".

abstract class animal{
    abstract nam:string
    getsound(){
        return `${this.nam} makes the sound`
    }
}

class dog extends animal{
    nam="mani"                       // the nam is the abstract property thus the name must be defined inside the derived class
}
class cat extends animal{
    nam="sugar"                      // the nam is the abstract property thus the name must be defined inside the derived class
}


const c=new cat
const d=new dog

console.log(c.getsound());
console.log(d.getsound());

