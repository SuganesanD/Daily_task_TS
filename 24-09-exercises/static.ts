//the static method is used when the class should have the single copy of that instance
//the static method cannot be accessed by the instance of the class 
//it can be accessed by the class name itself

//creating a class and keep the age as static

class Patient_Details{
    name:string="rithu"
    static age:number=12;

    display_name(){
        console.log(this.name);
    }
    display_age(){
        console.log(Patient_Details.age);//the age can be accessed by the class name rather than the this keyword
        
    }
}
const Patient_details=new Patient_Details
Patient_details.display_name
console.log(Patient_details.age);//the age is static thus we cannot access it by the instance

//thus the code throws the error 

class Patient_Details{
    name:string="rithu"
    static age:number=12;

    display_name(){
        console.log(this.name);
    }
    display_age(){
        console.log(Patient_Details.age);//the age can be accessed by the class name rather than the this keyword
        
    }
}
const Patient_details=new Patient_Details
Patient_details.display_name()
console.log(Patient_Details.age);//accessing the age directly using the class name
Patient_details.display_age()//accessing the age through the display_age method

