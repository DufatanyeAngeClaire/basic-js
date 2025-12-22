// ===============================
// Part A: Functions
// ===============================
function calculateProcurementCost(tonnageInKg, pricePerKg) {
  if (
    typeof tonnageInKg !== "number" ||
    typeof pricePerKg !== "number" ||
    tonnageInKg < 0 ||
    pricePerKg < 0
  ) {
    return "Invalid input";
  }
  return tonnageInKg * pricePerKg;
}

// Arrow function
const validateBuyerName = (buyerName) => {
  return buyerName.length >= 2 && buyerName !== "";
};

// Switch authorization
function checkUserAuthorization(role) {
  switch (role) {
    case "Manager":
      return "procurement_and_sales";
    case "Sales Agent":
      return "sales_only";
    case "Director":
      return "view_aggregations";
    default:
      return "unauthorized";
  }
}

// ===============================
// Sales Record
// ===============================
function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
  return {
    id: Math.floor(Math.random() * 9000) + 1000,
    produceName,
    tonnageInKgs: tonnage,
    buyerName,
    amountPaid,
    saleDate: new Date(),
    isCreditSale: false
  };
}

let sale = createSalesRecord("Beans", 500, "John Doe", 300000);
sale.branch = "Maganjo";
sale.isCreditSale = true;
sale["dueDate"] = new Date();

console.log(Object.keys(sale));

// for...in loop
for (let key in sale) {
  console.log(`Property: ${key}, Value: ${sale[key]}`);
}

// ===============================
// Loops
// ===============================
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let total = 0;
for (let i = 0; i < weeklyTonnage.length; i++) {
  total += weeklyTonnage[i];
}

let average = total / weeklyTonnage.length;
console.log(`Total: ${total}, Average: ${average}`);

// Credit sales count
let sales = [
  createSalesRecord("Beans", 200, "A", 10000),
  createSalesRecord("Maize", 300, "B", 20000),
  createSalesRecord("G-nuts", 100, "C", 15000),
  createSalesRecord("Beans", 400, "D", 25000),
  createSalesRecord("Soybeans", 600, "E", 35000)
];

sales[1].isCreditSale = true;
sales[3].isCreditSale = true;

let creditCount = 0;
for (let record of sales) {
  if (!record.isCreditSale) continue;
  creditCount++;
}
console.log(`Total credit sales: ${creditCount}`);

// Stock check
let inventory = [
  { name: "Beans", tonnage: 500 },
  { name: "Maize", tonnage: 0 },
  { name: "G-nuts", tonnage: 300 }
];

for (let item of inventory) {
  if (item.tonnage === 0) {
    console.log(`Manager Alert: ${item.name} is out of stock`);
    break;
  }
}
