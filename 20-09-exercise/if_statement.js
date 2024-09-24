//get the input of age and display whether the candidate is eligible for the voting
var age = 22;
if (age < 18) {
    console.log("not eligible for the voting!!!");
}
else if (age == 18) {
    console.log("yes!!! you made it.you are eligible for the voting");
}
else if (age > 18) {
    console.log("you are eligible for the voting");
}
else {
    throw new Error("Oops!!!wrong input");
}
//pass a number to a function and check whether the number is less than 5 using if statement
function check_value(a) {
    if (a < 5) {
        console.log("yes it is less than 5");
    }
    else {
        console.log("sorry!!!");
    }
}
check_value(4);
//dfine a object name eligibility with properties age and name and check whether the given input is eligible
var eligibility;
eligibility = {
    age: 18,
    user_name: "ram "
};
if (eligibility.age == 18 && eligibility.user_name == "ram") {
    console.log("he is eligible");
}
else {
    console.log("Oops!!! can't access");
}
