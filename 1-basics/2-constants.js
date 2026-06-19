// ==================== Const Variables ====================

// -------------------- Quick Summary (For Revision) --------------------
// - const: declares a variable whose reference cannot be reassigned
//     - Must be initialized at declaration
//     - Block-scoped
//     - Cannot reassign the variable itself
//     - Objects/arrays declared with const can have their properties/elements modified
// - let: block-scoped, can be reassigned
// - var: function-scoped, hoisted (avoid in modern JS)
// - Use const by default; use let only if reassignment is needed

// -------------------- Example: Primitive with const --------------------
const interestRate = 1;
console.log('interestRate:', interestRate);
// ❌ Reassigning primitive const is not allowed
// interestRate = 3;

// -------------------- Example: Const with Objects --------------------
const personConst = { name: 'Anil', age: 30 };
console.log('Const object (initial):', personConst);

// ✅ Allowed: Modifying object properties
personConst.age = 31;
console.log('Const object (after property change):', personConst);

// ❌ Not allowed: Reassigning the object entirely
// personConst = { name: 'Kumar', age: 25 };

// -------------------- Example: Const with Arrays --------------------
const numbers = [1, 2, 3];
console.log('Const array (initial):', numbers);

// ✅ Allowed: Modifying elements
numbers.push(4);
console.log('Const array (after push):', numbers);

// ❌ Not allowed: Reassigning the array entirely
// numbers = [5, 6, 7];

// -------------------- Example: let vs const --------------------
let score = 10;
score = 20; // ✅ Allowed: let can be reassigned
console.log('score after reassign:', score);

// -------------------- Example: Object.freeze() for true immutability --------------------
const frozen = Object.freeze({ name: 'Anil', age: 30 });
frozen.age = 99; // silently fails (throws TypeError in strict mode)
console.log('Frozen object:', frozen); // { name: 'Anil', age: 30 } — unchanged

// -------------------- Example: var hoisting (why to avoid it) --------------------
console.log(hoisted); // Output: undefined (hoisted to top, not an error)
var hoisted = 'surprise';
// With let/const this would throw: ReferenceError: Cannot access before initialization

// -------------------- End of Const Variables --------------------