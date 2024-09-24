// break statem and its use

//simple example of break statements in for loop
//break the loop when he i value is 7 until print the value of the i 
 /*var i=1
while (i>0) {
    if(i<7){
        console.log(i);
        i++;    
    }

    else if(i==7){
        break
    }
    else{
        throw new Error("wrong input");
        
    } 
}*/

//add the i value which is initaially 1 and stop when the sum is equal to or greater the 100
var i=1;
var total=0;
while(i>0){  
    total=total+i;
    if(total>=100){
        break;
    }
    console.log(total);
    i++;
}

console.log("The loop is stopped");

//The break statement is used to terminate the loop in which the break statement is present in.
// The flow is swifted to the next statement to that loop
