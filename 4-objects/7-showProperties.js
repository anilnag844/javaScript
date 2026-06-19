// ==================== String Properties ====================

// -------------------- Quick Summary (For Revision) --------------------
// - for...in iterates over all enumerable keys of an object
// - typeof obj[key] === 'string' filters only string-valued properties
// - Nested objects have typeof === 'object', not 'string' — not printed
// - Alternative: Object.entries() with filter() is more modern and chainable

// -------------------- Implementation (for...in) --------------------
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

// -------------------- Alternative (Object.entries + filter) --------------------
function showPropertiesAlt(obj) {
  Object.entries(obj)
    .filter(([, val]) => typeof val === 'string')
    .forEach(([key, val]) => console.log(`${key}: ${val}`));
}

// -------------------- Test Cases --------------------

// Mixed types — only string properties printed
const movie = {
  title: 'Inception',
  releaseYear: 2010,
  rating: 4.8,
  director: 'Christopher Nolan',
  isAvailable: true,
};
console.log('--- movie (mixed types) ---');
showProperties(movie);
// title: Inception
// director: Christopher Nolan

// All string properties
const person = { firstName: 'Anil', lastName: 'Kumar', city: 'Bangalore' };
console.log('--- person (all strings) ---');
showProperties(person);

// No string properties
const stats = { score: 99, level: 5, active: true };
console.log('--- stats (no strings) ---');
showProperties(stats); // prints nothing

// Nested object — nested value is 'object', not printed
const user = { name: 'Anil', age: 30, address: { city: 'Bangalore' } };
console.log('--- user (with nested object) ---');
showProperties(user);
// name: Anil — printed
// address: skipped (typeof === 'object')

console.log('--- movie using Object.entries alternative ---');
showPropertiesAlt(movie);

// ==================== End of String Properties ====================
