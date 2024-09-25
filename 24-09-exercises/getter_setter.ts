// the getter is used to get the value and the setter is used to set the value in the class

class student{
    name:string="ram"
    id:number=1234
    age:number=18

get get_name(){
    return this.name
}
set set_name(final_name:string,_){
    this.name=final_name
}
}

const Student=new student
Student.set_name="mohan"
console.log(Student.get_name);

//Create a Book class with a private property _title. Implement a getter and setter for the title.

class Book{
    _title:string="indru oru velai"

get title(){
    return this._title
}
set title(value:string){
    this._title=value;
}
}

const book=new Book
book.title='naalai ennum oru poi'
console.log(book.title);

