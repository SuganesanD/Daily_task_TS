//union type and its usage

function union_func(a:number|string,b:number|string){
    if(typeof a=='number'&& typeof b== "number"){
        return a+b;
    }
    else if(typeof a=="string" && typeof b=="string"){
        return a+b;
    }
    else{
        throw new Error("oops!!! your variable type is wrong");
        
    }
}
console.log(union_func(5,2));
console.log(union_func("divya","priya"));

