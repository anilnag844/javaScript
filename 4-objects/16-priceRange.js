// ==================== Price Range ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Array of objects is a common pattern for lookup tables and config data
// - Each object has a consistent shape: label, tooltip, min, max
// - Use find() to get the matching range for a given price per person
// - Use filter() to get all ranges within a budget

// -------------------- Data --------------------
const priceRanges = [
  { label: '$',   tooltip: 'Inexpensive', minPerPerson: 0,  maxPerPerson: 10 },
  { label: '$$',  tooltip: 'Moderate',    minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Expensive',   minPerPerson: 21, maxPerPerson: 50 }
];

console.log('All price ranges:', priceRanges);

// -------------------- Find Range for a Given Price --------------------
function getPriceRange(pricePerPerson) {
  return priceRanges.find(
    r => pricePerPerson >= r.minPerPerson && pricePerPerson <= r.maxPerPerson
  );
}

console.log(getPriceRange(5));  // { label: '$',   tooltip: 'Inexpensive', ... }
console.log(getPriceRange(15)); // { label: '$$',  tooltip: 'Moderate', ... }
console.log(getPriceRange(30)); // { label: '$$$', tooltip: 'Expensive', ... }
console.log(getPriceRange(99)); // undefined — outside all ranges

// -------------------- Filter Ranges Within Budget --------------------
function getAffordableRanges(budget) {
  return priceRanges.filter(r => r.minPerPerson <= budget);
}

console.log('Affordable on $20 budget:');
getAffordableRanges(20).forEach(r => console.log(`${r.label} — ${r.tooltip}`));
// $ — Inexpensive
// $$ — Moderate

// ==================== End of Price Range ====================
