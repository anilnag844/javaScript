// ===================================================================
// JAVASCRIPT ARRAYS — COMPLETE QUICK REVISION (2025)
// All interview-important concepts fully included.
// ===================================================================
//
// ⭐ KEY SUMMARY (with short explanations)
// --------------------------------------
// • push/pop → end  
//      Fastest way to add/remove at END of array.
//
// • unshift/shift → start  
//      Add/remove at BEGINNING → slower (reindexes entire array).
//
// • splice() → add/remove in middle  
//      Most flexible method: insert, delete, replace anywhere.
//
// • length = 0 → best way to empty array  
//      Clears array in-place (works even with const & shared refs).
//
// • find() → first match | filter() → all matches  
//      find(): returns FIRST matching element  
//      filter(): returns NEW array of ALL matches.
//
// • map() → transform | reduce() → combine to one value  
//      map(): returns new array  
//      reduce(): computes single output (sum, object, string, etc.)
//
// • some() → any true? | every() → all true?  
//      some(): at least ONE element passes  
//      every(): ALL elements must pass.
//
// • Spread (...) → merge & clone arrays  
//      [...arr] → shallow copy  
//      [...a, ...b] → merging arrays.
//
// • Destructuring → pull out values quickly  
//      const [a, b] = arr; makes extraction clean & readable.
//
// • sort() mutates array; use slice().sort() for safe sorting  
//      slice() → clone → prevents accidental mutation.
//
// • Arrow returning object → ({ ... }) — parentheses required  
//      map(n => ({ value: n })) → without parentheses it breaks!
//
// • forEach → side effects | map → returns new array  
//      forEach: logging, pushing to an external array  
//      map: pure → MUST return a new array.
//
// • Pure functions: filter, map, reduce, slice, concat  
//      Do NOT change original array → safe for React/Node.
//
// • Mutation methods: push, pop, shift, unshift, splice, sort, reverse  
//      Modify original array → be careful in production.
// --------------------------------------
//
// THIS FILE = EVERYTHING YOU NEED FOR ANY INTERVIEW
// ===================================================================


console.log('JAVASCRIPT ARRAYS – Complete Mastery (2025)'); // %c styling only works in browser devtools, not Node.js


// ————————————————————————
// 1. DATA
// ————————————————————————
const numbers = [10, -5, 3, 8, -2, 15];
const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javascript' },
  { id: 3, name: 'React' }
];
const cart = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Mouse',  price: 25,   inStock: true },
  { name: 'Book',   price: 15,   inStock: false }
];


// ————————————————————————
// 2. ADDING / REMOVING
// ————————————————————————
numbers.push(99);           // End
numbers.unshift(0);         // Beginning
numbers.splice(2, 0, 999);  // Middle

numbers.pop();              // Remove end
numbers.shift();            // Remove beginning
numbers.splice(2, 1);       // Remove middle

// Best way to empty (works with const + references)
// numbers.length = 0; // ⚠️ commented out — would empty the array used in all examples below


// ————————————————————————
// 3. FINDING
// ————————————————————————
numbers.includes(10);
numbers.indexOf(10);
numbers.lastIndexOf(10);

courses.find(c => c.name === 'React');
courses.findIndex(c => c.id === 2);


// ————————————————————————
// 4. TESTING (every / some)
// ————————————————————————
numbers.every(n => n > 0);     // All positive?
numbers.some(n => n < 0);      // Any negative?


// ————————————————————————
// 5. FILTER → Keep what you want
// ————————————————————————
const positive = numbers.filter(n => n > 0);
const inStock = cart.filter(item => item.inStock);


// ————————————————————————
// 6. MAP → Transform each item
// ————————————————————————
const doubled = numbers.map(n => n * 2);
const names = courses.map(c => c.name.toUpperCase());
const html = positive.map(n => `<li>${n}</li>`).join('');

// Object literal trick
const objects = numbers.map(n => ({ value: n }));


// ————————————————————————
// 7. REDUCE → Combine to ONE value
// ————————————————————————
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
const totalPrice = cart.reduce((total, item) => total + item.price, 0);


// ————————————————————————
// 8. PIPELINE (filter → map → reduce)
// ————————————————————————
const result = numbers
  .filter(n => n > 0)
  .map(n => n * 2)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 10)
  .map(obj => obj.value)
  .reduce((sum, n) => sum + n, 0);

console.log('Pipeline result:', result);


// ————————————————————————
// 9. COMBINING & COPYING (Spread = King)
// ————————————————————————
const a = [1, 2], b = [3, 4];
const combined = [...a, 'x', ...b];
const clone = [...numbers];


// ————————————————————————
// 10. SORTING
// ————————————————————————
numbers.sort((a, b) => a - b);  // Numbers ascending

courses.sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
);

numbers.reverse();


// ————————————————————————
// 11. JOIN / SPLIT / SLUGIFY
// ————————————————————————
numbers.join(', ');

'hello-world'.split('-').join(' ');

const createSlug = title =>
  title.toLowerCase().trim().split(' ').join('-');

console.log(createSlug('  JavaScript Arrays 2025  '));


// ————————————————————————
// 12. ITERATION
// ————————————————————————
numbers.forEach((num, i) => console.log(i, num));
for (let n of numbers) { console.log(n); }


// ————————————————————————
// 13. DESTRUCTURING
// ————————————————————————
const arr = [10, 20, 30, 40];
const [first, second, ...rest] = arr;
console.log(first, second, rest);


// ————————————————————————
// 14. ARRAY UTILITIES (Interview Must-Know)
// ————————————————————————
Array.isArray(numbers);       // true
Array.from('ABC');            // ['A','B','C']
Array.of(1,2,3);              // [1,2,3]
const flat = [1, [2, [3]]].flat(2);
const unique = [...new Set([1,1,2,3])];
