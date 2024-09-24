// tuple and its method

//creating and diplaying a tuple

var _student:[string,number,boolean];
_student = ["ram",18,true];
console.log(_student);

//readonly method in tuple

var _employee:readonly[string,number,boolean];
_employee=["ravi",22,false];
//_employee.push("cse"); // Property 'push' does not exist on type 'readonly [string, number, boolean]'.
console.log(_employee);

//named tuple

var studentid:[x:number,y:number]=[1234,5678];
console.log(studentid);

//destructure tuple

var employeeid:[number,number]=[11,22];
var [x,y]=employeeid;
console.log(employeeid);

//creating a entry portal for entering student details and checking whether the given details matches the conditions
var studentdetails:[string,number,boolean];
studentdetails=["ram",19,true];
studentdetails=["ravi",22,];
studentdetails=["ragu",true];


