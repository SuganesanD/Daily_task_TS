// the interface is used to give blueprint 
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "ragu";
        this.age = 12;
    }
    Employee.prototype.getname = function () {
        return this.name;
    };
    return Employee;
}());
var emp = new Employee;
console.log(emp.getname());
