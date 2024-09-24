//defining types to the variable

//number,string,boolean
var a:number=5;
var b:string='This is string';
var c:boolean=true;
console.log(a,b,c);

//array
var d:number[]=[1,3,4,5,6];
var e:string[]=["ram","ravi","ragu"];
console.log(d,e);

//object
var f:{
    name:string;
    age:number;
    id:number;
}

f={
    name:"ram",
    age:30,
    id:122
}

console.log(f);

//function
function greet (a:string){
    return (`hello,${a}`);
}
console.log(greet ("ram"));

//get two number and one string from the user and print the addition of two number and the string using the function

var num1:number=5;
var num2:number=2;
var str:string="This is the total of the two numbers"
function add(a:number){
    return(a+b);
}
var total=add(num1,num2);
function addition(str:string){
    return(`${str} ${total}`);
}
console.log(addition(str));






