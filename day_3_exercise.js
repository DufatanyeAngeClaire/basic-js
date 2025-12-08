// 1. Procurement check
const procurementTonnage = 80 >= 10000;
console.log(procurementTonnage);   // false


// 2. Strictness Check
let costStr = '5000';
let costNum = 5000;

console.log(costStr == costNum);   // true  (type coercion)
console.log(costStr === costNum);  // false (strict check)


// 3. Complex Validation
let Name = 'Dress';
let costUgX = 35000;

const isValid = Name.length >= 2 && costUgX >= 10000;
console.log(isValid);  // true


// 4. Date Logging
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // +1 because getMonth() starts at 0
const year = today.getFullYear();

console.log(`Sale on: ${day}/${month}/${year}`);
