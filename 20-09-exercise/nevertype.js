// Create a function that throws an error and has a return type of never.
function check_color(color) {
    switch (color) {
        case "red":
            return 'color that is selected is red';
        case "green":
            return 'color that is selected is green';
        case "blue":
            return 'color that is selected is blue';
        default:
            var checking_variable = color;
            return checking_variable;
    }
}
console.log(check_color('yellow'));
//Create a function that takes an argument of type never and verify that it causes a compile-time error when called with any type.
function never_sample(a) {
    console.log("hello");
}
never_sample(5);
