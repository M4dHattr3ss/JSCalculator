const rs = require('readline-sync');

const operations = ["/", "*" , "-" , "+"];
let first = 0;
let second = 0;
let answer = 0;

let operationChoice = rs.keyInSelect(operations, 'What operation would you like to preform?' ); 
// what is returned from a function  (both type and actual value)

function calculateAnswer(first, second){
   if(operationChoice === 0){
    answer = first / second;
   }
   if(operationChoice === 1){
    answer = first * second;
   }
   if(operationChoice === 2){
    answer = first - second;
   }
   if(operationChoice === 3){
    answer = (parseInt(first) + parseInt(second));
   }
}
if (operationChoice === -1){
    console.log("Canceling calculation, Thank you.")
    //choice is invalid
}
else{
    // math happens here 
    // ask for first
    first = rs.questionInt('Please enter the first number ',{
        limitMessage:'This is not a number.'
    });
    // ask for second 
    second = rs.questionInt('Please enter the second number ',{
        limitMessage:'This is not a number.'
    });
    calculateAnswer(first, second);
    // return the answer to the user
    console.log('The result is: ' + parseFloat(answer).toFixed(2));
}


