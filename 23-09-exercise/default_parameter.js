//default parameter is the parameter that is used when there is no value is passed to the parameter
//it takes the default value that is given to that parameter
//Create a function called greet that takes a name parameter of type string. If no name is provided, the function should default to "Guest". The function should return a greeting string.
function greet(str1, str2) {
    if (str2 === void 0) { str2 = "Guest"; }
    return (str1 + str2);
}
console.log(greet("hello "));
//When the argument "ram" is passed to the str2 then it return "hello ram".
//Else it returns "hello Guest".
//multiple default parameter
//Create a function createUser that takes two parameters: username of type string and age of type number. Set default values of "Anonymous" for username and 18 for age. The function should return an object containing both properties.
function createUser(username, age) {
    if (username === void 0) { username = "Anonymous"; }
    if (age === void 0) { age = 18; }
    return [{ username: username, age: age }];
}
console.log(createUser("ram", 22));
//create a function and calculate the area of the circle and keep the value of the pi value as default
function area(a, pi) {
    if (pi === void 0) { pi = 3.14; }
    console.log("The area of the circle is:");
    return pi * a * a;
}
console.log(area(2));
