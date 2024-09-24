//Create a type alias named Point that represents a point in a 2D space with x and y coordinates.
type point={
    x:string,
    y:number
}

var values:point={x:"20",y:10}
console.log(values);

//Define a type alias named Shape that can be either a Circle or a Rectangle. A Circle should have a radius, and a Rectangle should have width and height.

type circle={
    radius:string
}
type rectangle={
    height:number,
    width:number
}
type shape=circle|rectangle

var shape_object:shape={radius:"20",height:15,width:33}
console.log(shape_object);

