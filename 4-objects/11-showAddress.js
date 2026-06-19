// ==================== Show Address ====================

// -------------------- Quick Summary (For Revision) --------------------
// - for...in loops over all enumerable keys of an object
// - Use template literals for clean key: value output
// - Rename the parameter to avoid shadowing the outer const variable
// - Alternative: Object.entries() is more modern and chainable

// -------------------- Implementation (for...in) --------------------
function showAddress(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

// -------------------- Alternative (Object.entries) --------------------
function showAddressAlt(obj) {
  Object.entries(obj).forEach(([key, val]) => console.log(`${key}: ${val}`));
}

// -------------------- Test Cases --------------------
const address = {
  street:  '123 Main St',
  city:    'Austin',
  zipCode: 78701
};

console.log('--- showAddress ---');
showAddress(address);
// street: 123 Main St
// city: Austin
// zipCode: 78701

console.log('--- showAddressAlt ---');
showAddressAlt(address);

// Multiple addresses
const address2 = {
  street:  '456 Oak Ave',
  city:    'Dallas',
  zipCode: 75201
};
console.log('--- address2 ---');
showAddress(address2);

// ==================== End of Show Address ====================
