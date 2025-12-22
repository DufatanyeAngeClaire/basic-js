// ===============================
// Part A: Variable Declaration
// ===============================

// const is used because company name should never change
const companyName = "Karibu Groceries LTD";

// const is used because minimum tonnage is a fixed business rule
const minimumTonnage = 1000;

// let is used because operational status may change
let isOperational = true;

// let is used because value will be assigned later
let managerName;

// let is used because closed branches may change
let closedBranches = null;

// ===============================
// Type Checking
// ===============================
console.log(typeof companyName);      // string
console.log(typeof minimumTonnage);   // number
console.log(typeof isOperational);    // boolean
console.log(typeof managerName);      // undefined
console.log(typeof closedBranches);   // object (JS behavior)

// ===============================
// Part B: String Manipulation
// ===============================
let dealerNameInput = " james BOND ";

// Remove spaces
let trimmedName = dealerNameInput.trim();

// Convert to title case
let cleanDealerName = trimmedName
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// ===============================
// Validation
// ===============================
if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
  console.log("Valid dealer name");
} else {
  console.log("Invalid dealer name");
}

// ===============================
// Part C: Conditional Logic
// ===============================
let userRole = "Sales Agent";
let procurementTonnage = 1500;
let produceType = "Beans";
let costInUgx = "50000";

// Rule 1
if (userRole === "Sales Agent") {
  console.error("Error: Sales Agents are not allowed to record procurement.");
} else if (procurementTonnage >= 1000) {
  console.log("Tonnage requirement met");
} else {
  console.log("Tonnage too low");
}

// Rule 3
let costNumber = Number(costInUgx);
if (costNumber >= 10000) {
  console.log("Cost requirement met");
} else {
  console.log("Invalid cost");
}

// AND condition
if (procurementTonnage >= 1000 && costNumber >= 10000) {
  console.log("Procurement record valid");
} else {
  console.log("Procurement record invalid");
}

// ===============================
// Part D: Arrays
// ===============================
let kglProduce = ["Beans", "Grain Maize", "Cow peas", "G-nuts", "Soybeans"];

kglProduce.push("Green Peas");
kglProduce.shift();

console.log(kglProduce.includes("G-nuts"));
console.log(kglProduce);
console.log(kglProduce.length);

let branch2Produce = ["Maize", "Beans"];
let allProduce = kglProduce.concat(branch2Produce);

console.log(allProduce);
