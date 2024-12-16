//console.log("Welcome to CN5006");
//console.log("This is lab 1");

//const num1 = 5;
//const num2 = 10;
//const sum = num1 + num2;
//console.log("The sum is " +sum);


//program that check if the number is positive,negative or zero
//input from the user 

//const prompt = require('prompt-sync')({sigint:true})
//const number = parseInt(prompt ("Enter a number:"));
//check if the number is greater than 0
//if(number > 0){
    //console.log("The number is positive");

//}
//else if(number == 0){
    //console.log("The number is zero.");
//}
//else {
  //  console.log("The number is negative "); 
//}




//calculator program
const prompt = require('prompt-sync')();
const number1 = parseFloat(prompt("Enter the first number: "));
const number2 = parseFloat(prompt("Enter the second number: "));
const operation = prompt("Choose an operation (add, subtract, multiply, divide): ").toLowerCase();

let result;

if (operation === 'add') {
  result = number1 + number2;
} else if (operation === 'subtract') {
  result = number1 - number2;
} else if (operation === 'multiply') {
  result = number1 * number2;
} else if (operation === 'divide') {
  if (number2 !== 0) {
    result = number1 / number2;
  } else {
    console.log("Error: Division by zero is not allowed.");
  }
} else {
  console.log("Invalid operation selected.");
}

if (result !== undefined) {
  console.log(`The result is: ${result}`);
}
