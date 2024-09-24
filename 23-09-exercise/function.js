//Functions are the small readable,block of codes that can be called again and again
//calculate the square of the nuber using function
function square(a) {
    return a * a;
}
console.log(square(7));
//check for odd or even using function 
function odd_or_even(a) {
    if (a % 2 == 0) {
        return ("even");
    }
    else {
        return ("odd");
    }
}
console.log(odd_or_even(26));
//concatenate two string using function
function join_string(str1, str2) {
    return (str1 + str2);
}
console.log(join_string("hello ", "world"));
//find the maximum number using the function
function maximum(a, b) {
    if (a > b) {
        return (a);
    }
    else {
        return (b);
    }
}
console.log(maximum(7, 2));
