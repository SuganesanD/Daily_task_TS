//The continue statement is used to skip the remaining part of the loop and continue to execue the loop 
// print the even numbers and skip the odd numbers using continue statement
for (var i = 0; i < 11; i++) {
    if (i % 2) {
        continue;
    }
    console.log(i);
}
//print the i value and skip the value only when the i value is 7
for (var i = 0; i < 11; i++) {
    if (i == 7) {
        continue;
    }
    console.log(i);
}
