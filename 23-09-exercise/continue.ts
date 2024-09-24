//The continue statement is used to skip the remaining part of the loop and continue to execue the loop 

// print the even numbers and skip the odd numbers using continue statement

for(let i=0;i<11;i++){
    if(i%2){
        continue;
    }
    console.log(i);
}

//print the i value and skip the value only when the i value is 7

for(let i=0;i<11;i++){
    if(i==7){
        continue;
    }
    console.log(i);
    
}

//Continue statement is used when the current iteraion of the flow needs to be skipped and the other iterations should be executed.