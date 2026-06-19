// ==================== Object Equality ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Objects are reference types: === compares memory address, not content
// - Two objects with identical properties are NOT equal by === (different refs)
// - areSame(): checks reference equality — are they the exact same object?
// - areEqual(): checks value equality — do they have the same property values?
// - To deep-compare objects, compare each property explicitly

// -------------------- Constructor --------------------
function Address(street, city, zipCode) {
  this.street  = street;
  this.city    = city;
  this.zipCode = zipCode;
}

// -------------------- Value Equality --------------------
function areEqual(a1, a2) {
  return a1.street  === a2.street  &&
         a1.city    === a2.city    &&
         a1.zipCode === a2.zipCode;
}

// -------------------- Reference Equality --------------------
function areSame(a1, a2) {
  return a1 === a2;
}

// -------------------- Test Cases --------------------
const address1 = new Address('123 Main St', 'Austin', 78701);
const address2 = new Address('123 Main St', 'Austin', 78701); // same data, different object
const address3 = address1; // same reference

console.log('areEqual(address1, address2):', areEqual(address1, address2)); // true  — same values
console.log('areSame(address1, address2):', areSame(address1, address2));   // false — different objects in memory
console.log('areSame(address1, address3):', areSame(address1, address3));   // true  — same reference

// Mutating address3 also mutates address1 (same reference)
address3.city = 'Houston';
console.log('address1.city after address3 change:', address1.city); // 'Houston'

// ==================== End of Object Equality ====================
