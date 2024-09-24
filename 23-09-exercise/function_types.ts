// there are many ways to use the function in the code

//declare a function 

var oddeven:(a:number)=>string;

//assign the odd_or_even variable to the function

oddeven=function (a:number){
    if(a%2==0){
        return("even")
    }
    else{
        return("odd")
    }
}
console.log(oddeven(2));

//function can also be written as follows

//write a function to pass a string and print"same" whether the inut string is same as the "welcome",else print "not same".

function same_or_not(strval:string):string{
    if(strval=="welcome"){
        return("same")
        
    }
    else{
        return("not same")
    }
}
console.log(same_or_not("hello"));
