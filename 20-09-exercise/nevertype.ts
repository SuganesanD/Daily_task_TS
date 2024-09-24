// Create a function that throws an error and has a return type of never.

/*function never_function(a:number):never{
    throw new Error("his is the never typed function");
}
never_function(5);*/

//Define a function that takes a union type of string literals. Ensure that you handle all cases using a switch statement, and if an unknown value is passed, it should return a value of type never.

type Color="red"|"green"|"blue"
function check_color(color:Color):string{
    switch(color){
        case "red":
            return  'color that is selected is red'
            
        case "green":
            return  'color that is selected is green'
        case "blue":
            return  'color that is selected is blue'
        default:
            const checking_variable:never=color;
            return checking_variable;       
    }
}
console.log(check_color('yellow'));

//Create a function that takes an argument of type never and verify that it causes a compile-time error when called with any type.

function never_sample(a:never){
    console.log("hello");
}
never_sample(5);


