const greet = (name) => `Hello ${name}`;

const add = (num1, num2) => {
  return num1 + num2;
};
console.log(greet("name"));
greet("Hussain");

const square = (number) => {
  return number * number;
};
let numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((number) => {
  return number * number;
});
console.log(squaredNumbers);
