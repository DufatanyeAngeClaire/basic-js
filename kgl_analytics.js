// ===============================
// Procurement Data
// ===============================
let procurementRecords = [
  { id: 1, dealerName: "James", produceType: "Beans", tonnageInKgs: 1200, costInUgx: 6000000, procurementDate: new Date() },
  { id: 2, dealerName: "Sarah", produceType: "Maize", tonnageInKgs: 900, costInUgx: 4000000, procurementDate: new Date() },
  { id: 3, dealerName: "John", produceType: "G-nuts", tonnageInKgs: 1500, costInUgx: 9000000, procurementDate: new Date() },
  { id: 4, dealerName: "James", produceType: "Beans", tonnageInKgs: 2000, costInUgx: 10000000, procurementDate: new Date() },
  { id: 5, dealerName: "Linda", produceType: "Soybeans", tonnageInKgs: 1100, costInUgx: 7000000, procurementDate: new Date() },
  { id: 6, dealerName: "Peter", produceType: "Cow peas", tonnageInKgs: 800, costInUgx: 3500000, procurementDate: new Date() }
];

// map
let withCostPerKg = procurementRecords.map(record => ({
  ...record,
  costPerKg: record.costInUgx / record.tonnageInKgs
}));

console.log(withCostPerKg);

// filter
let validDealers = procurementRecords.filter(r => r.tonnageInKgs >= 1000);
console.log(validDealers);
console.log(validDealers.length);

// reduce
let totals = procurementRecords.reduce(
  (acc, r) => {
    acc.tonnage += r.tonnageInKgs;
    acc.cost += r.costInUgx;
    return acc;
  },
  { tonnage: 0, cost: 0 }
);

console.log(`Total Tonnage: ${totals.tonnage}`);
console.log(`Total Cost: ${totals.cost}`);

// ===============================
// Sets
// ===============================
function getUniqueDealers(records) {
  return [...new Set(records.map(r => r.dealerName))];
}

console.log(getUniqueDealers(procurementRecords));

const authorizedRoles = new Set(["Manager", "Director"]);

function isAuthorizedForProcurement(role) {
  return authorizedRoles.has(role);
}

console.log(isAuthorizedForProcurement("Manager"));
console.log(isAuthorizedForProcurement("Sales Agent"));

// ===============================
// Maps
// ===============================
let kglPriceList = new Map([
  ["Beans", 5500],
  ["Grain Maize", 4800],
  ["Cow peas", 6000],
  ["G-nuts", 7200],
  ["Soybeans", 5800]
]);

function calculateSaleTotal(produceName, tonnageInKgs) {
  if (!kglPriceList.has(produceName)) return "Price not found";
  return kglPriceList.get(produceName) * tonnageInKgs;
}

console.log(calculateSaleTotal("Beans", 100));
console.log(calculateSaleTotal("Rice", 50));

// Loop & highest price
let prices = [];
for (let [name, price] of kglPriceList) {
  console.log(`Produce: ${name}, Price per Kg: ${price} UgX`);
  prices.push(price);
}

let highest = prices.reduce((max, p) => (p > max ? p : max));
console.log(`Highest price: ${highest}`);
