// ==================== Primitive Types in JavaScript ====================

// -------------------- Quick Summary (For Revision) --------------------
// - JavaScript has 7 primitive types:
//     1. string    → text, e.g., 'Anil'
//     2. number    → numeric values, e.g., 25
//     3. boolean   → true or false
//     4. undefined → variable declared but not assigned
//     5. null      → intentional absence of value (typeof → "object")
//     6. symbol    → unique identifiers, e.g., Symbol('id')
//     7. bigint    → large integers beyond Number.MAX_SAFE_INTEGER
// - Primitives are immutable and copied by value
// - typeof operator returns type at runtime
// - JavaScript is dynamically typed: variable type depends on value
// - Use === for strict comparison to avoid type coercion

// -------------------- Examples --------------------
let name = 'Anil';            // string
let age = 25;                 // number
let isApproved = true;        // boolean
let firstName;                // undefined (declared but not assigned)
let selectedColor = null;     // null (special primitive)
let id = Symbol('id');        // symbol
let bigNumber = 1234567890123456789012345678901234567890n; // bigint

console.log(typeof name);          // "string"
console.log(typeof age);           // "number"
console.log(typeof isApproved);    // "boolean"
console.log(typeof firstName);     // "undefined"
console.log(typeof selectedColor); // "object" — legacy JS quirk, null is still a primitive
console.log(typeof id);            // "symbol"
console.log(typeof bigNumber);     // "bigint"

// -------------------- Dynamic Typing Example --------------------
let dynamic = 10;            // number
dynamic = 'Anil';            // now string
console.log(typeof dynamic); // "string"

// -------------------- Copy by Value --------------------
let a = 10;
let b = a;   // b gets a copy of a's value
b = 20;
console.log(a); // 10 — unaffected, primitives are copied by value
console.log(b); // 20

// -------------------- Strict vs Loose Equality --------------------
console.log(0 == '0');  // true  — loose equality coerces types
console.log(0 === '0'); // false — strict equality, no coercion (prefer this)

// -------------------- Safe null Check --------------------
// typeof null === "object" is a known quirk, so check explicitly:
console.log(selectedColor === null);                               // true
console.log(selectedColor !== null && typeof selectedColor === 'object'); // false (it's null, not an object)

// ==================== End of Primitive Types ====================
