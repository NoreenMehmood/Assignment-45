// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array
// Define variables
var apple = "apple";
var upperCase = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with string
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("Is apple is not equal to apple?");
console.log(apple != "apple");
// Test using LoweCase Function
console.log("Is APPLE is equal to apple after converting to lowerCase");
console.log(upperCase.toLowerCase() == "apple");
console.log("APPLE is equal to apple after converting to lowerCase");
console.log(upperCase.toLowerCase() != "apple");
//Numerical tests
//Equal to
console.log("Is ten is equal to twenty");
console.log(ten == twenty);
//Not equal to
console.log("Is ten is not equal to twenty");
console.log(ten != twenty);
// Greater than
console.log("Is ten is greater than zero");
console.log(ten > 0);
// Smaller than
console.log("Is twenty is less than 10");
console.log(20 < 10);
// Greater than or equal to
console.log("ten is greater than or equal to 5");
console.log(ten >= 5);
// Less than or equal to
console.log("twenty is less than or equal to 10");
console.log(twenty <= 10);
// Tests using "and" or "or" operators
// Using &&
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Using or
console.log("20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether and item is include in array
console.log("Is orange include in my fruit array");
console.log(fruits.includes("orange"));
console.log("orange not include in my fruit array");
console.log(!fruits.includes("orange"));
