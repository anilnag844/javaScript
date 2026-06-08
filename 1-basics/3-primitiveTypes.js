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
let firstName = undefined;    // undefined
let selectedColor = null;     // null (special primitive)
let id = Symbol('id');        // symbol
let bigNumber = 1234567890123456789012345678901234567890n; // bigint

console.log(typeof name);          // "string"
console.log(typeof age);           // "number"
console.log(typeof isApproved);    // "boolean"
console.log(typeof firstName);     // "undefined"
console.log(typeof selectedColor); // "object" — JS legacy quirk (null is primitive, but typeof null === "object" since ES1 for backward compat)
                                   // Safe null check: selectedColor !== null && typeof selectedColor === 'object'
console.log(typeof id);            // "symbol"
console.log(typeof bigNumber);     // "bigint"

// -------------------- Dynamic Typing Example --------------------
let dynamic = 10;          // number
dynamic = 'Anil';          // now string
console.log(typeof dynamic); // "string"

// ==================== End of Primitive Types ====================
