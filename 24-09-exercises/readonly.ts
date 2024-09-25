//The readonly is more similar to the const keyword
// the value can be changed only in two places inside the class and constructor

class Employee_details{
    readonly _name:string ="divya"//readonly is used in the _name
    _id:number


get emp_name(){
    return this._name
}

set emp_name(value:string){
    this._name=value  //Cannot assign to '_name' because it is a read-only property.
}
}
const employee_details=new Employee_details
employee_details.emp_name="raghu"
console.log(employee_details.emp_name);

//Error free code 
//when readonly is used in the code the value can only be changed in the class definition and in constructor

class Employee_details{
    readonly _name:string="raghu" //readonly is used in the _name
    _id:number


get emp_name(){
    return this._name
}
}
const employee_details=new Employee_details
console.log(employee_details.emp_name);