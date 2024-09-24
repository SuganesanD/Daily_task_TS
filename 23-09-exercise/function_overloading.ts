//The function can be overloaded with many arguments 
//this can be done by passing the arguments by defining the function in many ways 

//the function must accept two numbers or two strings or three numbers

function overload(a:number,b:number):number;
function overload(a:string,b:string):string;
function overload(a:number,b:number,c?:number):number;

function overload(a:any,b:any,c?:number){
    
    if(typeof a == "number" && typeof b === "number"){
        return a+b;
    }
    else if(typeof a === "string" && typeof b === "string"){
        return a+b;
    }
    else{
        return a+b+c;
    }
}
console.log(overload(5,6));

//define and overload the function with number and string data type and print the value

function overloads(a:number,b:string):void;
function overloads(a:number,b:number):void;

function overloads(a:any,b:any){
    console.log(`The value passed here is ${a} in ${typeof(a)} and ${b} in ${typeof(b)}`);
}

overloads(5,6);


        