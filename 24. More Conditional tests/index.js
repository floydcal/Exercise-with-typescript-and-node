// Tests for equality and inequality with strings
const fruit1 = "apple";
const fruit2 = "banana";
console.log(fruit1 === "apple"); // True
console.log(fruit2 !== "apple"); // False
// Tests using the lower case function
const word = "Hello";
const lowercaseWord = word.toLowerCase();
console.log(lowercaseWord === "hello"); // True
console.log(lowercaseWord === "HELLO"); // False
// Numerical tests
const num1 = 5;
const num2 = 10;
console.log(num1 === 5); // True
console.log(num1 !== 5); // False
console.log(num2 > num1); // True
console.log(num1 < num2); // True
console.log(num2 >= 10); // True
console.log(num1 <= 4); // False
// Tests using "and" and "or" operators
const x = 5;
const y = 10;
console.log(x < 10 && y > 5); // True
console.log(x === 5 || y === 5); // True
console.log(x > 5 && y < 10); // False
// Test whether an item is in an array
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("apple")); // True
console.log(fruits.includes("grape")); // False
// Test whether an item is not in an array
console.log(!fruits.includes("grape")); // True
console.log(!fruits.includes("apple")); // False
export {};
