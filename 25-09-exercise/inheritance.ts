// accessing the parent class property in the derived class 
// the derived class can also have extra methods and properties

class animal {     //parent class
    _name : string;

    constructor(name:string){
        console.log(`${name} make the sound`);
        this._name = name;
    }

    getname(){
        return this._name;
    }
}
class dog extends animal{    //child class
    constructor(name :string){
        super(name);        
        console.log(`${name} barks`);    
    }
}


//access those classes through the child class
const Dog=new dog("mani");
console.log(Dog.getname());

