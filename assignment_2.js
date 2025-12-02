// 1. String Concatenation Challenge

let Name = "Dufatanye Ange Claire";
let location = "Kampala";
let service = "Beauty";

const Detail =
  "Your name is: " + Name +
  " | Living in: " + location +
  " | Doing: " + service;

console.log(Detail);


console.log(Detail);

//   2.Template Literal Practice

const template = `Name: ${Name} | Location: ${location} | Service: ${service}`;
console.log(template);


// 3. Type Checking and Conversion

console.log(typeof "hello");     // "string"
console.log(typeof 456);         // "number"
console.log(typeof true);        // "boolean"

// Type conversion
console.log(Number("123"));      // 123
console.log(String(456));        // "456"
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false

// 4. String Method Challenge

const cleaned = Name.trim().toUpperCase();   

console.log(cleaned.includes("ANGE"));  

const replaced = cleaned.replace("ANGE", "MAIRE"); 

const splitWords = replaced.split(" "); 

console.log(cleaned, replaced, splitWords);


// 5. KGL Data Formatting Task

// Final formatted message for database
const finalRecord = `Name: ${Name} | Location: ${location} | Service: ${service}`;

console.log(finalRecord);