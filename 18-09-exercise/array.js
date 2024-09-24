//array and its methods
//creating and printing te array
/* var student:string[]=["ram","tom","divya","revathi","leela"];
 console.log(student);

 //pushing a new element in the existing array
 student.push("ravi");
 console.log(student);

 //fetching the particular element using its index
 console.log(student[2]);

 //readonly array
var employee: readonly string[] =["ram","tom","divya"];
employee.push("ragu");
console.log(employee);//Property 'push' does not exist on type 'readonly string[]'

//real time example using the array
 declare a book array.the users can take as many books as they want.notify the user when there is no book in the book array*/
var bookarray = ["book1", "book2", "book3", "book4", "book5", "book6", "book7", "book8", "book9", "book10"];
var users = [2, 5, 3];
console.log(users.length);
for (var i = 0; i < users.length; i++) {
    bookarray.splice(0, users[i]);
    if (bookarray.length == 0) {
        console.log("There is no book in the bookarray");
        break;
    }
    else {
        console.log("Still there is \" ".concat(bookarray.length, " \" more books!!!"));
    }
}
console.log("hello");

