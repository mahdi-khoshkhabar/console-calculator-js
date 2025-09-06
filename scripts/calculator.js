"use strict";
console.log("start app");

let num1 = +prompt("number?");
let operator;
let num2;

do {
  operator = prompt("operator?");

  if (!checkOperator(operator)) {
    break;
  }

  num2 = prompt("number?") == "" ? null : +prompt("number?");

  if (checkNumber(num1) && checkNumber(num2)) {
    num1 = calcTwoNumbers(num1, num2, operator);
  } else {
    break;
  }
} while (true);

alert(num1);

console.log("end app");

function checkOperator(operator) {
  switch (operator) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "**":
    case "%":
      console.log("true operator");
      return true;

    default:
      //   alert("wrong operator");
      console.log("wrong operator: ", operator);
      return false;
  }
}

function checkNumber(num) {
  if (typeof num === "number") {
    // console.log()
    return true;
  } else {
    return false;
  }
}

function calcTwoNumbers(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    case "%":
      return num1 % num2;

    case "**":
      return num1 ** num2;

    default:
      console.log("calculator: wrong format");
      break;
  }
}
