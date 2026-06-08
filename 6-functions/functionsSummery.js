// ——————————————————————————————————————————————————————————————————
// JAVASCRIPT FUNCTIONS – COMPLETE SUMMARY (2025 Edition)
// Matches your 11 video titles 1:1 + key summary + interview questions
// ——————————————————————————————————————————————————————————————————

// =============================================================
// ⭐ KEY SUMMARY – JAVASCRIPT FUNCTIONS
// =============================================================
// • Function Declaration vs Expression  
//      - Declaration is hoisted: can be called before definition.  
//      - Expression is NOT hoisted: initialized at runtime.  
//      - Arrow functions are expressions and cannot be called before definition.  

// • Arrow Functions  
//      - Shorter syntax for writing functions:  
//          * Single line: const fn = (a, b) => a + b;  
//          * Multi-line: const fn = (a, b) => { return a + b; }  
//          * No parameters: const fn = () => console.log('Hi');  
//      - Do NOT have their own `this`; inherit from lexical scope.  
//      - Do NOT have `arguments` object.  
//      - Cannot be used as constructors (cannot use `new`).  
//      - Ideal for callbacks, array methods, concise functions.  

// • Hoisting Rules  
//      - Function declarations fully hoisted.  
//      - var variables hoisted → undefined initially.  
//      - let/const in Temporal Dead Zone (TDZ) → ReferenceError if accessed early.  

// • arguments object (old) vs Rest operator (modern)  
//      - arguments = array-like, only available in regular functions.  
//      - rest (...) = real array, recommended for modern JS.  

// • Default Parameters  
//      - Provide fallback values when arguments are missing.  
//      - Can be combined with rest parameters.  

// • Getters / Setters  
//      - Define computed or controlled property access.  
//      - Useful for validation, computed values, and encapsulation.  

// • try / catch / finally  
//      - Handle runtime errors safely.  
//      - finally block always executes, for cleanup.  

// • Scope  
//      - Global vs Local.  
//      - Functions create their own local scope.  
//      - Block-scope using let/const inside loops, conditionals.  

// • let vs var  
//      - var = function-scoped, leaks outside blocks, creates window properties.  
//      - let/const = block-scoped, safer, prevents accidental overwrites.  

// • this keyword  
//      - Depends on HOW function is called:  
//          * obj.method() → `this` = obj  
//          * function() → `this` = undefined (strict) or window (non-strict)  
//          * constructor (new fn) → `this` = new object  

// • Changing this context  
//      - call(), apply(), bind() methods control `this`.  
//      - Arrow functions inherit `this` from lexical scope (best for callbacks).  

// • Closures  
//      - Functions that remember outer scope variables even after outer function has executed.  
//      - Useful for private variables, memoization, and maintaining state.  

// • Higher-Order Functions  
//      - Functions that take functions as arguments or return functions.  
//      - Examples: map(), filter(), reduce(), custom function wrappers.  

// • Currying  
//      - Transform multi-argument functions into a sequence of functions taking one argument each.  
//      - Enables partial application of functions.  

// • IIFE (Immediately Invoked Function Expression)  
//      - Runs immediately after definition.  
//      - Useful for scoping variables to prevent global pollution.  

// • Async / Await  
//      - Async functions always return a Promise.  
//      - Await pauses execution until promise resolves.  
//      - Use try/catch for error handling.  

// =============================================================
// 1. Function Declarations vs Expressions
// =============================================================
function walk() { console.log('walk'); }           // Declaration → hoisted
const run = function() { console.log('run'); };    // Expression  → NOT hoisted
const fly = () => console.log('fly');              // Arrow (also expression)

walk(); // works
// run(); // ReferenceError if called before definition

// =============================================================
// 2. Hoisting
// =============================================================
sayHi(); // Works → declaration hoisted
function sayHi() { console.log('hi'); }

console.log(x); // undefined → var hoisted
var x = 10;

try {
  console.log(y); // ReferenceError → let/const in TDZ
} catch (e) {
  console.log('TDZ Error:', e.message); // Cannot access 'y' before initialization
}
let y = 20;

// =============================================================
// 3. Arguments (the old way)
// =============================================================
function sumAll() {
  let total = 0;
  for (let value of arguments) total += value; // arguments is iterable
  return total;
}
sumAll(1, 2, 3, 4, 5, 100); // → 115

// =============================================================
// 4. The Rest Operator (modern & best)
// =============================================================
function sum(...numbers) { // real Array
  return numbers.reduce((a, b) => a + b);
}
sum(10, 20, 30); // → 60

function calculateCart(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
calculateCart(0.1, 100, 50); // → 135

// =============================================================
// 5. Default Parameters (ES6+)
// =============================================================
function register(name = 'Guest', age = 18) {
  console.log(`Welcome ${name}, age ${age}`);
}
register();           // Welcome Guest, age 18
register('Sara');     // Welcome Sara, age 18
register('Ali', 25);  // Welcome Ali, age 25

// =============================================================
// 6. Getters and Setters
// =============================================================
const person = {
  first: 'John',
  last: 'Doe',

  get fullName() {
    return `${this.first} ${this.last}`;
  },

  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Not a string');
    const parts = value.split(' ');
    if (parts.length !== 2) throw new Error('Need first + last');
    this.first = parts[0];
    this.last = parts[1];
  }
};

console.log(person.fullName); // "John Doe"
person.fullName = 'Sara Smith';
console.log(person.fullName); // "Sara Smith"

// =============================================================
// 7. Try and Catch (error handling)
// =============================================================
try {
  person.fullName = null; // throws
} catch (error) {
  console.log('Error:', error.message); // "Not a string"
} finally {
  console.log('Cleanup if needed');
}

function divide(a, b = 1) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// =============================================================
// 8. Local vs Global Scope
// =============================================================
const color = 'red'; // Global

function start() {
  const color = 'blue'; // Local
  const message = 'hi';
  console.log(color); // "blue"
}
start();
console.log(color); // "red"

if (true) {
  let blockVar = 'I am trapped';
}
// console.log(blockVar); // ReferenceError

// =============================================================
// 9. Let vs Var
// =============================================================
for (var i = 0; i < 3; i++) {}
console.log(i); // → 3

for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// =============================================================
// 10. The this Keyword
// =============================================================
const video = {
  title: 'a',
  play() {
    console.log(this); // → video object
  }
};
video.play();

function playVideo() {
  console.log(this); // → window / undefined
}
playVideo();

function Video(title) {
  this.title = title;
  console.log(this); // → new empty object
}
const v = new Video('b');

// =============================================================
// 11. Changing this (3 ways – arrow is king)
// =============================================================
const movie = {
  title: 'JS Movie',
  tags: ['js', 'web', 'fun'],

  showTags() {
    this.tags.forEach(t => {
      console.log(this.title, t);
    });
  }
};
movie.showTags();

// =============================================================
// POPULAR INTERVIEW QUESTIONS – FUNCTIONS
// =============================================================

// 1. What is the difference between Function Declaration and Expression?
// - Declaration: hoisted, can be called before definition
// - Expression: not hoisted, evaluated at runtime
// - Arrow functions are expressions, cannot be called before definition

// 2. What is the difference between arguments and rest operator?
// - arguments: array-like, available in normal functions, not real array
// - rest: real array, recommended for modern JS, works with arrow functions

// 3. What is hoisting in JavaScript?
// - Moving declarations to the top of scope. Functions are fully hoisted, var hoisted (undefined), let/const in TDZ
// Example:
console.log(hoistExample()); // Works
function hoistExample() { return 'Hoisted!'; }

// 4. What are arrow functions and how do they differ from regular functions?
// - Short syntax, no own this, no arguments object, cannot use new
// Example:
const arrowFn = (a, b) => a + b;
console.log(arrowFn(5, 10)); // 15

// 5. What is the difference between == and ===?
// - == checks value equality with type coercion
// - === checks value and type equality (strict equality)
// Example:
console.log(5 == '5');  // true
console.log(5 === '5'); // false

// 6. What are closures in JavaScript?
// - Functions that remember outer variables even after outer function execution
function closureExample() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const counterFn = closureExample();
console.log(counterFn()); // 1
console.log(counterFn()); // 2

// 7. What is the difference between call, apply, and bind?
// - call: invokes function with specified this and arguments
// - apply: same as call but arguments passed as array
// - bind: returns a new function with this bound

// 8. What is IIFE and why use it?
// - Immediately Invoked Function Expression runs immediately
// Example:
(function() { console.log('IIFE runs'); })();

// 9. How to handle async operations with async/await?
// - async function returns a promise, await pauses until resolution
async function asyncExample() {
  return await Promise.resolve('Done');
}
asyncExample().then(console.log);

// 10. What is default parameter and why is it useful?
// - Provides fallback values for missing arguments
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
greet();
