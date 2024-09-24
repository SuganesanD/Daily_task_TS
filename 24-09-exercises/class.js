// class is the blue print of the object
// it defines the structure and behaviour of the object
//creating the class
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "ram";
        this.age = 18;
    }
    return Employee;
}());
//display the properies of the class
var employee = new Employee;
console.log(employee.name);
console.log(employee.age);
//Create a Car class with properties for make, model, and year. Include a method called displayInfo() that logs the car's information to the console.
var Car = /** @class */ (function () {
    function Car() {
        this.make = "aa";
        this.model = "bb";
        this.year = 1234;
    }
    Car.prototype.display = function () {
        console.log(this.make, this.model, this.year);
    };
    return Car;
}());
var car = new Car;
car.display();
