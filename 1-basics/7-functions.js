// ==================== Functions Basics ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Functions are reusable blocks of code that perform tasks
// - Types: function declaration, function expression, arrow function
// - Can accept parameters (placeholders) and return values
// - Default parameters: provide fallback when argument is omitted
// - Rest parameters (...args): accept variable number of arguments as an array
// - Use `return` to send a value back from a function
// - `typeof` a function returns "function"
// - Functions are first-class values: store in variables, pass as args, return from functions
// - Hoisting: declarations are hoisted (callable before definition); expressions are not

// -------------------- Function Declaration --------------------
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
greet('Anil', 'Kumar'); // Output: Hello Anil Kumar
console.log(typeof greet); // "function"

// -------------------- Returning a Value --------------------
function square(number) {
    return number * number;
}
console.log(square(5)); // Output: 25

// -------------------- Default Parameters --------------------
function greetUser(name = 'Guest') {
    console.log(`Hello ${name}`);
}
greetUser('Anil'); // Hello Anil
greetUser();       // Hello Guest (default kicks in)

// -------------------- Rest Parameters --------------------
function sum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(10, 20));     // 30

// -------------------- Function Expression --------------------
// Stored in a variable; NOT hoisted — must be defined before calling
const double = function(n) {
    return n * 2;
};
console.log(double(4)); // 8

// -------------------- Arrow Functions --------------------
const squareArrow = (n) => n * n;       // single expression, implicit return
const greetArrow = name => `Hi ${name}`; // single param, parens optional

console.log(squareArrow(6)); // 36
console.log(greetArrow('Anil')); // Hi Anil

// -------------------- Functions as First-Class Values --------------------
// Pass a function as an argument
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(double);
console.log('map with double:', doubled); // [2, 4, 6, 8]

// Store a function in an object
const mathUtils = {
    square: n => n * n,
    cube:   n => n * n * n,
};
console.log(mathUtils.square(3)); // 9
console.log(mathUtils.cube(3));   // 27

// -------------------- Hoisting --------------------
// ✅ Function declarations are hoisted — callable before definition
console.log(add(2, 3)); // 5
function add(a, b) { return a + b; }

// ❌ Function expressions are NOT hoisted
// console.log(multiply(2, 3)); // ReferenceError
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

// ==================== End of Functions Basics ====================
