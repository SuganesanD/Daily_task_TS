// class is the blue print of the object
// it defines the structure and behaviour of the object

//creating the class

class Employee{
    name :string="ram";
    age:number=18
}

//display the properies of the class
const employee=new  Employee;
console.log(employee.name);
console.log(employee.age);

//Create a Car class with properties for make, model, and year. Include a method called displayInfo() that logs the car's information to the console.

class Car{
    make:string="aa"
    model:string="bb"
    year:number=1234

    display(){
        console.log(this.make,this.model,this.year);
        
    }
}
const car=new Car
car.display();




