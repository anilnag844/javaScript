// ==================== JavaScript Operators ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Operators are special symbols used to perform operations on values/variables
// - Categories:
//   1. Arithmetic       +, -, *, /, %, ** (basic math)
//   2. Assignment       =, +=, -=, *=, /=, %= (update values)
//   3. Comparison       ==, ===, !=, !==, >, <, >=, <= (compare values)
//   4. Logical          &&, ||, ! (boolean logic; also works with non-boolean values for short-circuiting)
//   5. Nullish          ?? returns right side only if left is null/undefined (unlike || which checks falsy)
//   6. Optional chain   ?. safely access nested properties without TypeError
//   7. Logical assign   &&=, ||=, ??= (assign only under specific conditions)
//   8. Ternary          condition ? valueIfTrue : valueIfFalse (inline if)
//   9. typeof           returns type of a value
//  10. Increment/Decrement  ++, -- (pre/post)
//  11. Bitwise          &, |, ^, ~, <<, >>, >>> (operate on binary representation)
// - Operator precedence determines the order of evaluation
// - Parentheses () can override precedence
// - Logical operators with non-boolean values return the last evaluated value

// -------------------- Arithmetic Operators --------------------
let a = 10, b = 5;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

// -------------------- Assignment Operators --------------------
let c = 20;
c += 5; console.log("c after += 5:", c);
c -= 3; console.log("c after -= 3:", c);
c *= 2; console.log("c after *= 2:", c);
c /= 4; console.log("c after /= 4:", c);
c %= 3; console.log("c after %= 3:", c);

// -------------------- Comparison Operators --------------------
let x = 10, y = '10';
console.log("x == y:", x == y);   // loose equality
console.log("x === y:", x === y); // strict equality
console.log("x != y:", x != y);   // loose inequality
console.log("x !== y:", x !== y); // strict inequality
console.log("x > b:", x > b);
console.log("x < b:", x < b);
console.log("x >= b:", x >= b);
console.log("x <= b:", x <= b);

// -------------------- Logical Operators --------------------
// Boolean values
let isAdult = true, hasID = false;
console.log("isAdult && hasID:", isAdult && hasID); // AND
console.log("isAdult || hasID:", isAdult || hasID); // OR
console.log("!isAdult:", !isAdult); // NOT

// Non-boolean values (short-circuit evaluation)
console.log("null || 'default':", null || 'default'); // 'default'
console.log("'' && 'Hello':", '' && 'Hello'); // ''
console.log("0 || 42:", 0 || 42); // 42
console.log("'Hi' && 0:", 'Hi' && 0); // 0

// -------------------- Nullish Coalescing (??) --------------------
// Returns right side only when left is null or undefined (not for 0, '', false)
console.log(null ?? 'default');      // 'default'
console.log(undefined ?? 'default'); // 'default'
console.log(0 ?? 'default');         // 0  ← 0 is NOT null/undefined, so left side returned
console.log('' ?? 'default');        // '' ← same, empty string is kept

// Contrast with || which treats ALL falsy values as missing
console.log(0 || 'fallback');        // 'fallback' ⚠️ treats 0 as falsy
console.log(0 ?? 'fallback');        // 0          ✅ treats 0 as a valid value

// -------------------- Optional Chaining (?.) --------------------
let user = null;
console.log(user?.name);            // undefined — no TypeError
console.log(user?.address?.city);   // undefined — chains safely

let activeUser = { name: 'Anil', address: { city: 'Bangalore' } };
console.log(activeUser?.address?.city); // 'Bangalore'

// Combine with ?? for a clean default
console.log(user?.name ?? 'Guest'); // 'Guest'

// -------------------- Logical Assignment Operators --------------------
let val1 = null;
val1 ??= 'default';   // assigns only if null or undefined
console.log("??= result:", val1); // 'default'

let val2 = 0;
val2 ||= 42;          // assigns only if left side is falsy
console.log("||= result:", val2); // 42

let val3 = 'hello';
val3 &&= val3.toUpperCase(); // assigns only if left side is truthy
console.log("&&= result:", val3); // 'HELLO'

// -------------------- Ternary Operator --------------------
let userAge = 20;
let ageForVote = 18;
let canVote = userAge >= ageForVote ? 'Yes, can vote' : 'No, cannot vote';
console.log("Can vote:", canVote);

// -------------------- typeof Operator --------------------
console.log("Type of a:", typeof a);
console.log("Type of b:", typeof b);
console.log("Type of y:", typeof y);
console.log("Type of isAdult:", typeof isAdult);

// -------------------- Operator Precedence --------------------
let result = a + b * 2;        // * has higher precedence
console.log("Result of a + b * 2:", result);
result = (a + b) * 2;          // parentheses override precedence
console.log("Result of (a + b) * 2:", result);

// -------------------- Increment / Decrement Operators --------------------
let count = 0;
console.log("Post-increment:", count++); // returns 0, then increments
console.log("After post-increment:", count); // 1
console.log("Pre-increment:", ++count);  // increments first, returns 2
console.log("Post-decrement:", count--); // returns 2, then decrements
console.log("After post-decrement:", count); // 1
console.log("Pre-decrement:", --count);  // decrements first, returns 0

// -------------------- Bitwise Operators --------------------
// Operate on 32-bit binary representations
// 5 = 0101, 3 = 0011
let p = 5, q = 3;
console.log("p & q:", p & q);    // 0101 & 0011 = 0001 → 1  (AND: both bits must be 1)
console.log("p | q:", p | q);    // 0101 | 0011 = 0111 → 7  (OR: either bit is 1)
console.log("p ^ q:", p ^ q);    // 0101 ^ 0011 = 0110 → 6  (XOR: bits differ)
console.log("~p:", ~p);          // ~0101 = -(5+1)    → -6  (NOT: flips all bits)
console.log("p << 1:", p << 1);  // 0101 << 1  = 1010 → 10  (left shift = multiply by 2)
console.log("p >> 1:", p >> 1);  // 0101 >> 1  = 0010 → 2   (right shift = divide by 2)
console.log("p >>> 1:", p >>> 1); // same as >> for positive numbers → 2

// -------------------- End of JavaScript Operators --------------------