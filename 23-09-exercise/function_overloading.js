//The function can be overloaded with many arguments 
//this can be done by passing the arguments by defining the function in many ways 
function overload(a, b, c) {
    if (typeof a == "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
console.log(overload(5, 6));
function overloads(a, b) {
    console.log("The value passed here is ".concat(a, " in ").concat(typeof (a), " and ").concat(b, " in ").concat(typeof (b)));
}
overloads(5, 6);
