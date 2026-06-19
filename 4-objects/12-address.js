// ==================== Address: Factory vs Constructor ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Factory function: plain function that returns a new object literal
//     - Uses camelCase naming convention
//     - No 'new' keyword needed
//     - Simpler and avoids 'this' pitfalls
// - Constructor function: uses 'new' keyword and 'this' to build object
//     - Uses PascalCase naming convention
//     - 'new' creates empty {}, binds 'this', returns object automatically
//     - Basis for prototype-based inheritance
// - Both produce equivalent plain objects for simple cases

// -------------------- Factory Function --------------------
function createAddress(street, city, zipCode) {
  return { street, city, zipCode }; // shorthand property names
}

// -------------------- Constructor Function --------------------
function Address(street, city, zipCode) {
  this.street  = street;
  this.city    = city;
  this.zipCode = zipCode;
}

// -------------------- Test Cases --------------------
const a1 = createAddress('123 Main St', 'Austin', 78701);
console.log('Factory:', a1);
// { street: '123 Main St', city: 'Austin', zipCode: 78701 }

const a2 = new Address('456 Oak Ave', 'Dallas', 75201);
console.log('Constructor:', a2);
// Address { street: '456 Oak Ave', city: 'Dallas', zipCode: 75201 }

// Both produce the same shape of data
console.log('Same structure:', a1.street, a2.street);

// Constructor shows its type via instanceof
console.log(a2 instanceof Address); // true
console.log(a1 instanceof Address); // false — plain object from factory

// ==================== End of Address ====================
