// the getter is used to get the value and the setter is used to set the value in the class
var student = /** @class */ (function () {
    function student() {
        this.name = "ram";
        this.id = 1234;
        this.age = 18;
    }
    Object.defineProperty(student.prototype, "get_name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "set_name", {
        set: function (final_name) {
            this.name = final_name;
        },
        enumerable: false,
        configurable: true
    });
    return student;
}());
var Student = new student;
Student.set_name = "mohan";
console.log(Student.get_name);
//Create a Book class with a private property _title. Implement a getter and setter for the title.
var Book = /** @class */ (function () {
    function Book() {
        this._title = "indru oru velai";
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var book = new Book;
book.title = 'naalai ennum oru poi';
console.log(book.title);
