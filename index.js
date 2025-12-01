//  1. Comments and Documentation 
// single line comment
/*This is a multi-line comment 
hhfhfhfhhf
*/

// 2. Variable Declaration with let

let studentName = "Claire";
let course = "JavaScript Basics";
console.log("Hello:", studentName);
console.log("You doing:", course);

// 3. Variable Declaration with const

const school = "Refactory Academy";
const yearStarted = 2025;
console.log("School:", school);
console.log("Year Started:", yearStarted);

// 4. Checking Data Types

console.log(typeof studentName);    // string
console.log(typeof yearStarted);   // number
console.log(typeof isActive);     // undefined (not yet declared)

//  5. String Data Type

let greeting = "Hello";
let message = greeting + " " + studentName + "! Welcome to " + course;
console.log(message);

// 6. Number Data Type

let num1 = 20;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// 7. Boolean Data Type

let isLoggedIn = true;
let hasPaid = false;
console.log("Logged In:", isLoggedIn);
console.log("Payment Status:", hasPaid);

//  8. Undefined vs Null

let notAssigned; // undefined
let emptyValue = null; // null
console.log("Undefined:", notAssigned);
console.log("Null:", emptyValue);

// Using typeof Operator

console.log(typeof notAssigned);  // "undefined"
console.log(typeof emptyValue);   // "object" (special JavaScript behavior)
console.log(typeof hasPaid);      // "boolean"

// 10. Console Log Practice

console.log("JavaScript Day 1 exercises completed successfully!");
console.log("Debug Check:", { studentName, course, yearStarted, hasPaid });