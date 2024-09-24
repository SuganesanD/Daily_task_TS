//The readonly is more similar to the const keyword
// the value can be changed only in two places inside the class and constructor
/*class Employee_details{
    readonly _name:string //readonly is used in the _name
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
console.log(employee_details.emp_name);*/
//Error free code 
//when readonly is used in the code the value can only be changed in the class definition and in constructor
var Employee_details = /** @class */ (function () {
    function Employee_details() {
        this._name = "raghu"; //readonly is used in the _name
    }
    Object.defineProperty(Employee_details.prototype, "emp_name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee_details;
}());
var employee_details = new Employee_details;
employee_details.emp_name;
console.log(employee_details.emp_name);
