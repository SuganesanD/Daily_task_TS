Create a function that takes a string and returns its length.
function strings(a:string){
    return(a.length);
}
console.log(strings("hello"));

// Define an enum for different user roles (Admin, User, Guest) and create a function that takes a role and returns a message based on the role.

enum role{
    admin=1,staff,employee
}
function roles(current_role:role){
    if(current_role==1){
        console.log("this is admin");
        
    }
    else if(current_role==2){
            console.log("this is staff");
    }
    else{
        console.log("this is employee")
    }
}
roles(role.employee);

//get a array and print the square of the array elements

function sqarray(a:number[]){
    return a.map(sq=>sq*sq);
}
console.log(sqarray([1,2,3]));
 
//example for any

var num1:any=5;
var num1:any="hello";
var num1:any=true;

console.log(typeof(num1));

//example for void

function vooid(nu:number):void{
    console.log("no return");
}
vooid(2);

/*Input a string of alphabets. Find out the number of occurrence of all alphabets in that string.
Find out the alphabet with maximum occurrence*/
//declaring
var teststring = "aeroplane";
var count = 0;
var len = teststring.length;
var largest = 0;
var temp = 0;
var alpha_largest;
var final_array = [];
var single_array = [];
console.log("The occerence of single character in the string is:");
//comparing
for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
        if (teststring[i] == teststring[j]) {
            count++;
        }
    }
    console.log(teststring[i], count);
    temp = count;
    if (temp >= largest) {
        largest = temp;
        final_array.push(teststring[i]);
    }
    count = 0;
    alpha_largest = teststring[i];
    single_array.push(teststring[i]);
}
console.log();
final_array.slice(0, len / 2);
//printing
console.log("largest occurence value is:".concat(largest));
console.log("The largest occurence alphabets are:");
for (var len_1 = 0; len_1 < final_array.length / 2; len_1++) {
    console.log(final_array[len_1]);
}
