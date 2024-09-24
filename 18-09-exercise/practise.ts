/*Create a function that takes a string and returns its length.
function strings(a:string){
    return(a.length);
}
console.log(strings("hello"));

// Define an enum for different user roles (Admin, User, Guest) and create a function that takes a role and returns a message based on the role.

enum role{
    admin=1,staff,employee
}
function roles(current_role:role){
    if(current_role==1){
        console.log("this is admin");
        
    }
    else if(current_role==2){
            console.log("this is staff");  
    }
    else{
        console.log("this is employee")  
    }
}
roles(role.employee);

//get a array and print the square of the array elements

function sqarray(a:number[]){
    return a.map(sq=>sq*sq);
}
console.log(sqarray([1,2,3]));
 
//example for any

var num1:any=5;
var num1:any="hello";
var num1:any=true;

console.log(typeof(num1));

//example for void

function vooid(nu:number):void{
    console.log("no return");
}
vooid(2);







