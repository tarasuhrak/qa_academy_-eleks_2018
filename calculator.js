let a = 7;
let b = 6;
let action = "*";

function calculator(num1, num2, mark) {
  switch (mark) {
    case "*":
      return num1 * num2;
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "dividing by 0";
      }
  }
}


console.log(calculator(a,b,action));