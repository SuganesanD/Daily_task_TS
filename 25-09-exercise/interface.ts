// the interface is used to give blueprint for the class,function,

interface employee{
    name:string
    age:number

    getname():string;
}

class Employee implements employee{
    name="ragu"
    age=12

    getname(){
        return this.name
    }
}

const emp = new Employee
console.log(emp.getname());

//interface for the function

interface student{
    (name:string,age:number):number|string
}

var add_student:student=function (name,age) {
    return 5;
}

//thus the function,class that implements the interface will strictly follow the properties that is specified by that interface.
