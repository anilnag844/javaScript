// ==================== Static vs Dynamic Typing ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Static typing: type is associated with the variable
//     - Examples: C, C++, Java, C#
//     - Variable can only hold values of its declared type
//     - Errors caught at compile-time
// - Dynamic typing: type is associated with the value
//     - Examples: JavaScript, Python, Ruby
//     - Variable can hold values of different types at different times
//     - Errors may occur at runtime
// - JavaScript is dynamically typed
// - TypeScript adds optional static typing to JavaScript
//     - Provides type checking, classes, interfaces
//     - Requires transpilation to JavaScript
// - Use static typing for large codebases to catch errors early
// - Use dynamic typing for flexibility and rapid development

// -------------------- Static Typing (Conceptual) --------------------
// In static languages (Java, C#), variables are type-locked at declaration:
// string message = "Hello";  // only strings allowed
// message = 1234;            // ❌ compile-time error

// TypeScript equivalent (static typing on top of JS):
// let message: string = 'Hello'; // type-locked to string

// -------------------- Dynamic Typing (JavaScript) --------------------
// The same variable can hold different types at different times

let msg;
msg = 'Hello World';
console.log(msg, typeof msg); // Hello World  string

msg = 1234;
console.log(msg, typeof msg); // 1234  number

msg = true;
console.log(msg, typeof msg); // true  boolean

msg = null;
console.log(msg, typeof msg); // null  object  (legacy JS quirk)

msg = undefined;
console.log(msg, typeof msg); // undefined  undefined

// -------------------- Why It Matters: Runtime Gotcha --------------------
let input = '5';   // came from user input (always a string)
let result = input + 10;
console.log(result);         // "510" — string concatenation, not addition!
console.log(typeof result);  // "string"

// Fix: explicitly convert the type
result = Number(input) + 10;
console.log(result);         // 15

// ==================== End of Typing Example ====================
