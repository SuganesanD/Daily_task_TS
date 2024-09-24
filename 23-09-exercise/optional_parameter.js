// Optional parameter is the parameter that is used to when that parameter is not mandatory to be passed to a function
function option(a, b, c) {
    if (typeof (c) != "undefined") {
        return (a + b + c);
    }
}
console.log(option(5, 2, 4));
//optional parameter is used when that particular parameter can be passed with value or not to a function
//print the string after concatenation with one string as optional parameter
function concate(str1, str2) {
    if (typeof (str2 != "undefined")) {
        return (str1 + str2);
    }
    else {
        return (str1);
    }
}
console.log(concate("hiii", "guyss"));
