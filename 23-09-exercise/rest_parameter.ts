// The rest parameter is used when  there is large amount of parameters 
//always the rest parameter will be at the end of the parameter list
//The rest parameter will be denoted with the "..." 
// the rest parameter will be always an array

//get 10 numbers in the function and use the rest parameter for getting the arguments
var total=0
function restparameter(...rest:number[]){
    rest.forEach((val)=>total+=val);
    return total;
}
console.log(restparameter(10,20,40,50,60,70,80,90,30));

//pass multiple value to the function and print those values

function multiple(...rest:string[]){
    rest.forEach((val)=>console.log(val));
}
multiple("ram","tom","ramesh","suresh")

//using union in the rest parameter to get multiple data typed values

function multipledata(...rest:(number|string|boolean)[]){
    rest.forEach((val)=>console.log(val));
}
multipledata("ram",18,true)

//using object in the rest parameter to map the values in key value pair

function multipleobject(...rest:{username:string,age:number,isstudent:boolean}[]){
    rest.forEach((val)=>console.log(val));
}
multipleobject(ram,20,true)


