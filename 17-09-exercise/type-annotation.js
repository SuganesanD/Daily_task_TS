//defining types to the variable
//number,string,boolean
var a = 5;
var b = 'This is string';
var c = true;
console.log(a, b, c);
//array
var d = [1, 3, 4, 5, 6];
var e = ["ram", "ravi", "ragu"];
console.log(d, e);
//object
var f;
f = {
    name: "ram",
    age: 30,
    id: 122
};
console.log(f);
//function
function greet(a) {
    return ("hello,".concat(a));
}
console.log(greet("ram"));
//get two number and one string from the user and print the addition of two number and the string using the function
var num1 = 5;
var num2 = 2;
var str = "This is the otal of the two numbers";
function add(a, b) {
    return (a + b);
}
var total = add(num1, num2);
function addition(str) {
    return ("".concat(str).concat(total));
}
console.log(addition(str));
