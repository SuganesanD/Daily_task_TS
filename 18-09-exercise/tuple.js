// tuple and its method
//creating and diplaying a tuple
var _student;
_student = ["ram", 18, true];
console.log(_student);
//readonly method in tuple
var _employee;
_employee = ["ravi", 22, false];
//_employee.push("cse"); // Property 'push' does not exist on type 'readonly [string, number, boolean]'.
console.log(_employee);
//named tuple
var studentid = [1234, 5678];
console.log(studentid);
//destructure tuple
var employeeid = [11, 22];
var x = employeeid[0], y = employeeid[1];
console.log(employeeid);
