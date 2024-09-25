// one interface can be extendd with another interface with the help of extending interface technique

//create a interface and extend that interface in another interface 

interface interface1{
    name:string
    age:number
    id:number
}

interface interface2 extends interface1{
    isstudent:boolean
}

class interface_class implements interface2{
    name="ragu"
    age=13
    id=222
    isstudent: true
    
    get_value() {
        return (`${this.age},${this.name}`)
    }
}

const Interface_class=new interface_class
console.log(Interface_class.get_value());
