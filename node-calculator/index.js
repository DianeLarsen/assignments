var readlineSync = require('readline-sync');
var operations = ['+','-','*','/'];
var operator = null;
var numOne = 0;
var numTwo = 0;




    numOne = readlineSync.questionInt('Please enter your first number: ');
    numTwo = readlineSync.questionInt('Please enter your second number: ');
    operator = readlineSync.question('What operation would you like to perform?'
        +'\nOptions:'
        +'\nadd ('+ operations[0]+')'
        +'\nsub ('+ operations[1]+')'
        +'\nmul ('+ operations[2]+')'
        +'\ndiv ('+ operations[3]+')\n'
);

if (!operations.includes(operator)) {
    console.log('That is not a valid operation');
    operationQ();
}

switch(operator){
    case '+':
        console.log('The result of '+numOne+operator+numTwo+' = '(numOne+numTwo));
        break;
    case '-':
        console.log('The result of '+numOne+operator+numTwo+' = '+(numOne-numTwo));
        break;
    case '*':
        console.log('The result of '+numOne+operator+numTwo+' = '+(numOne*numTwo));
        break;   
    case '/':
        console.log('The result of '+numOne+operator+numTwo+' = '+(numOne/numTwo));
        break;
    default:
        console.log('Something went wrong :(');     
}

