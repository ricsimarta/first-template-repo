function myFunc() {
  console.log("myFunc is running"); // NEM VISSZATÉRÉSI ÉRTÉK
}

/* const result = myFunc();

console.log(result); */

console.log(sumOfTwoNumbers(11, 2));
function sumOfTwoNumbers(number1, number2) {
  return number1 + number2; // VISSZATÉRÉSI ÉRTÉK
}

const sumOfThreeNumbers = function(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumOfThreeNumbers(1,2,3));

const sumOfFourNumbers = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

console.log(sumOfFourNumbers(5, 6, 7, 8));

const array = [1, 2, 3];

console.log(array.map(number => number * 2));

console.log(array.map(function (number) {
  return number * 2
}));

const myObj = {
  key1: "value",
  key2: 12,
  key3: function() {
    console.log("i am a method")
  }
}

myObj.key3();