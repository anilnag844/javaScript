# JavaScript Basics - Learning Curriculum

A comprehensive JavaScript learning resource covering fundamental programming concepts from basics to advanced OOP and modules. This repository is organized into 8 numbered modules, each building upon the previous one.

---

## 📚 Repository Structure

```
js-basics/
├── 1-basics/              # Core JavaScript fundamentals
├── 2-operators/           # Operator types and operations
├── 3-control-flow/        # Conditionals and loops
├── 4-objects/             # Object-oriented programming
├── 5-arrays/              # Array manipulation and methods
├── 6-functions/           # Function concepts and patterns
├── 7-oop/                 # Prototypes, inheritance, ES6 classes, private members
├── 8-modules/             # CommonJS, ES6 modules, Babel, Webpack
├── index.html             # Sample HTML file
├── index.js               # Sample JavaScript file
└── README.md              # This file
```

---

## 📖 Module Breakdown

### 1️⃣ **1-basics/** - Foundation Concepts

Learn the building blocks of JavaScript programming.

| File | Topic | Description |
|------|-------|-------------|
| `1-variable.js` | Variables | Declaring variables with `let`, `const`, and `var`; naming conventions; best practices |
| `2-constants.js` | Constants | Understanding `const` declarations; mutability of objects/arrays with `const` |
| `3-primitiveTypes.js` | Primitive Types | String, Number, Boolean, Undefined, Null, Symbol, BigInt; `typeof` operator |
| `4-dynamicTyping.js` | Dynamic vs Static Typing | JavaScript's dynamic nature vs statically typed languages; type coercion |
| `5-objects.js` | Objects | Key-value pairs; creating, modifying, and copying objects; reference types |
| `6-arrays.js` | Arrays | Array declaration; indexing; methods (push, pop, shift, unshift, splice) |
| `7-functions.js` | Functions | Function declaration and invocation; parameters vs arguments; return values |

**Key Concepts:**
- Variable naming rules and best practices
- Understanding `const` vs `let`
- Primitive types and type checking
- Objects and arrays as reference types
- Basic function structure and parameters

---

### 2️⃣ **2-operators/** - Operator Fundamentals

Master different types of operators and their usage.

| File | Topic | Description |
|------|-------|-------------|
| `javaScricptOperators.js` | All Operators | Arithmetic, Assignment, Comparison, Logical, Ternary, Bitwise, typeof, Increment/Decrement |

**Key Concepts:**
- Arithmetic operations: `+`, `-`, `*`, `/`, `%`, `**`
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Comparison operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical operators: `&&` (AND), `||` (OR), `!` (NOT)
- Ternary operator for inline conditionals
- Operator precedence and parentheses

---

### 3️⃣ **3-control-flow/** - Decision Making & Loops

Learn how to control program flow with conditionals and loops.

| File | Topic | Description |
|------|-------|-------------|
| `1-max.js` | Conditional Logic | Find maximum of two numbers using ternary operator |
| `2-landscape.js` | if/else Statements | Determine if image is landscape or portrait orientation |
| `3-fizzBuzz.js` | Nested Conditionals | Classic FizzBuzz problem combining multiple conditions |
| `4-checkSpeed.js` | Demerit Points | Speed checker — calculate demerit points and suspend license at 12+ |
| `5-evenOrOdd.js` | Number Classification | Check if a number is even or odd using modulus |
| `6-countTruthy.js` | Truthy/Falsy Values | Count truthy values in an array using logical operations |
| `7-stringProperties.js` | String Methods | String manipulation and property access |
| `8-multiples.js` | Loop Patterns | Count multiples using loops and conditionals |
| `9-grade.js` | Grade Calculation | Convert numeric score to letter grade |
| `10-stars.js` | Pattern Generation | Generate star patterns using nested loops |
| `11-primeNumber.js` | Prime Number Check | Algorithm to identify prime numbers |
| `controlFlowSummery.js` | Quick Reference | Complete revision guide with key concepts |

**Key Concepts:**
- `if`, `else if`, `else` statements
- Ternary operator for concise conditionals
- Truthy and falsy values in JavaScript
- `for` loops and loop control
- `while` loops
- Loop optimization and break/continue

---

### 4️⃣ **4-objects/** - Object-Oriented Programming

Practice working with objects and solving problems using object patterns.

| File | Topic | Description |
|------|-------|-------------|
| `1-maxOfTwo.js` | Function with Return Value | Compare two numbers and return maximum |
| `2-landscape.js` | Object as Parameter | Check landscape orientation; objects reduce parameter count |
| `3-fizzBuzz.js` | Refactoring with Objects | Use objects to simplify and organize code |
| `4-checkSpeed.js` | Speed Limit Checker | Validate speed and return appropriate status |
| `5-showNumbers.js` | Array Processing | Display numbers with conditions (display if positive, exit if negative) |
| `6-countTruthy.js` | Count Truthy Values | Count truthy elements in an object |
| `7-showProperties.js` | Object Iteration | Loop through object properties using `for...in` |
| `8-sum.js` | Calculate Object Sum | Sum all numeric values in an object |
| `9-grade.js` | Grade Assignment | Convert scores to grades using objects |
| `9-showStars.js` | Pattern Generation | Generate star patterns with object configuration |
| `10-showPrimes.js` | Prime Number Display | Find and display all prime numbers up to limit |
| `11-showAddress.js` | for-in Enumeration | Iterate address object properties using `for...in` loop |
| `12-address.js` | Factory vs Constructor | Create Address two ways: factory function and constructor function |
| `13-objectEquality.js` | Reference vs Value | `areEqual` checks property values; `areSame` checks same reference |
| `14-blogPost.js` | Nested Object Literal | Blog post with nested comments array — real-world object modelling |
| `15-post.js` | Smart Constructor | Post constructor with intelligent defaults (views=0, isLive=false) |
| `16-priceRange.js` | Array of Objects | Price range objects with label, tooltip, min/maxPerPerson properties |
| `objectSummery.js` | Complete Reference | Comprehensive revision guide for objects |

**Key Concepts:**
- Object creation and manipulation
- Factory functions vs Constructor functions
- `this` keyword behavior
- Prototype-based inheritance
- Arrow functions and lexical `this`
- Static methods and getters/setters
- Shallow vs deep cloning
- Value vs Reference types

---

### 5️⃣ **5-arrays/** - Array Methods & Manipulation

Master advanced array operations and functional programming patterns.

| File | Topic | Description |
|------|-------|-------------|
| `1-arrayFromRange.js` | Create Array from Range | Generate arrays with sequential values |
| `2-includes.js` | Check Array Membership | Determine if array contains specific element |
| `3-except.js` | Filter Elements | Remove specified elements from array |
| `4-move.js` | Move Element Position | Rearrange elements within array |
| `5-countOccurrences.js` | Count Element Frequency | Tally occurrences of elements |
| `6-max.js` | Find Maximum Value | Identify largest element in array |
| `7-movies.js` | Method Chaining | Filter by year+rating → sort descending → map to titles |
| `arraysSummery.js` | Complete Reference | Comprehensive revision guide for arrays |

**Key Concepts:**
- `push`, `pop`, `shift`, `unshift` for adding/removing elements
- `splice` for middle insertions and deletions
- `find` vs `filter` - first match vs all matches
- `map` for transformation vs `reduce` for aggregation
- `some` and `every` for boolean checks
- Spread operator (`...`) for copying and merging
- Array destructuring
- Pure functions and immutability
- `slice().sort()` to avoid mutation

---

### 6️⃣ **6-functions/** - Advanced Function Concepts

Explore function declarations, expressions, and advanced patterns.

| File | Topic | Description |
|------|-------|-------------|
| `1-sumOfArgs.js` | Variable Arguments | Handle unknown number of parameters using `arguments` or rest operator |
| `2-areaOfCircle.js` | Default Parameters | Provide fallback values for function parameters |
| `3-errorHandling.js` | Try/Catch/Finally | Handle runtime errors with error handling blocks |
| `functionsSummery.js` | Complete Reference | Comprehensive revision guide for functions |

**Key Concepts:**
- Function declaration vs expression
- Hoisting rules for functions and variables
- Arrow function syntax and behavior
- Lexical `this` in arrow functions
- `arguments` object vs rest parameters
- Default parameters
- Try/catch/finally for error handling
- Scope and closures
- `let` vs `var` differences
- Getter and setter methods

---

### 7️⃣ **7-oop/** - Object-Oriented Programming (Part 2)

Deep dive into prototypes, inheritance, ES6 classes, and private members.

| File | Topic | Description |
|------|-------|-------------|
| `1-stopwatch.js` | ES6 Class + Private Fields | Build a Stopwatch with `#` private state and start/stop/reset |
| `2-stack.js` | Private Members (WeakMap) | Stack data structure with private items using WeakMap pattern |
| `3-htmlElement.js` | Class Inheritance | HtmlElement base class extended by Paragraph and Select |
| `4-vehicle.js` | Polymorphism | Vehicle → Car, Truck, Motorcycle — same method, different behaviour |
| `oopSummary.js` | Complete Reference | Prototypes → Inheritance → ES6 Classes → Private → Mixins + interview Q&A |

**Key Concepts:**
- Prototype chain and `__proto__` vs `prototype`
- Prototypical inheritance with `Object.create()` and `extend()` helper
- Resetting the constructor after wiring inheritance
- Method overriding and polymorphism
- ES6 `class`, `extends`, `super()` — syntactic sugar over prototypes
- Static methods and getters/setters
- Private fields (`#`) — ES2022 true private
- WeakMap pattern for private members
- Mixins — composition over inheritance

---

### 8️⃣ **8-modules/** - ES6 Tooling

Understand how JavaScript code is organised, bundled, and delivered.

| File | Topic | Description |
|------|-------|-------------|
| `circle.js` | CommonJS Export | Module export using `module.exports` |
| `app.js` | CommonJS Import | Module usage with `require()` |
| `modulesSummary.js` | Complete Reference | CommonJS vs ES6 modules → Babel → Webpack + interview Q&A |

**Key Concepts:**
- Module scope — variables stay private to each file
- CommonJS: `require()` / `module.exports` — Node.js default
- ES6 Modules: `import` / `export` — modern standard
- Named exports vs default exports
- Babel — transpiles ES6+ to ES5 for browser compatibility
- Webpack — bundles all modules into one optimised file
- Tree shaking — removes unused code from the final bundle

---

## 🎯 Learning Path

### Recommended Study Order:

1. **Start here:** `1-basics/` - Understand variables, types, and basic structures
2. **Then:** `2-operators/` - Learn how to operate on values
3. **Next:** `3-control-flow/` - Control your program flow with logic
4. **Then:** `1-basics/7-functions.js` - Understand basic functions
5. **Continue:** `4-objects/` - Structure code with objects
6. **Then:** `5-arrays/` - Work with collections efficiently
7. **Then:** `6-functions/` - Master advanced function concepts
8. **Then:** `7-oop/` - Prototypes, classes, and advanced OOP
9. **Finally:** `8-modules/` - Organise and bundle code for production

### Practice Tips:

✅ Read each file's comments for explanations  
✅ Run the code to see outputs  
✅ Modify examples to experiment  
✅ Refer to the `*Summery.js` files for quick revision  
✅ Practice the problems multiple times  
✅ Try to solve them without looking at solutions first

---

## 📝 Quick Reference

### Variable Declaration
```javascript
let x = 10;        // Block-scoped, can be reassigned
const y = 20;      // Block-scoped, cannot be reassigned
var z = 30;        // Function-scoped (avoid in modern JS)
```

### Common Operators
```javascript
// Arithmetic: +, -, *, /, %, **
// Comparison: ===, !==, >, <, >=, <=
// Logical: &&, ||, !
// Ternary: condition ? valueIfTrue : valueIfFalse
```

### Array Operations
```javascript
arr.push(value);           // Add to end
arr.pop();                 // Remove from end
arr.filter(condition);     // Get matching elements
arr.map(transformation);   // Transform elements
arr.reduce(combiner);      // Combine to one value
```

### Object Operations
```javascript
obj.property;              // Dot notation
obj['property'];           // Bracket notation
Object.keys(obj);          // Get all keys
Object.values(obj);        // Get all values
{ ...obj };                // Shallow copy
```

### Control Flow
```javascript
if (condition) { }
else if (condition) { }
else { }

for (let i = 0; i < 10; i++) { }
while (condition) { }
do { } while (condition);
```

### Functions
```javascript
function name(param1, param2) { return value; }
const arrow = (param) => param * 2;
const named = function(param) { return param; };
```

---

## 🔗 Key Concepts Summary

| Concept | Location | Importance |
|---------|----------|------------|
| Variables & Constants | `1-basics/1-2` | 🌟🌟🌟 Fundamental |
| Primitive Types | `1-basics/3` | 🌟🌟🌟 Essential |
| Dynamic Typing | `1-basics/4` | 🌟🌟 Important |
| Objects & References | `1-basics/5, 4-objects/` | 🌟🌟🌟 Critical |
| Arrays | `1-basics/6, 5-arrays/` | 🌟🌟🌟 Critical |
| Operators | `2-operators/` | 🌟🌟🌟 Essential |
| Control Flow | `3-control-flow/` | 🌟🌟🌟 Essential |
| Functions | `1-basics/7, 6-functions/` | 🌟🌟🌟 Critical |
| Prototypes & Inheritance | `7-oop/` | 🌟🌟🌟 Critical |
| ES6 Classes | `7-oop/` | 🌟🌟🌟 Essential |
| Private Members | `7-oop/` | 🌟🌟 Important |
| Modules & Bundling | `8-modules/` | 🌟🌟🌟 Essential |

---

## 💡 Best Practices

### Code Style
- Use `const` by default, `let` only when reassignment is needed
- Use camelCase for variable and function names
- Use descriptive names over single letters
- Write comments explaining the "why", not the "what"

### Performance
- Use `push`/`pop` instead of `unshift`/`shift` for efficiency
- Prefer `find()` when you need first match
- Use `filter()` when you need all matches
- Avoid unnecessary loops and nested loops

### Safety
- Use strict equality (`===`) instead of loose (`==`)
- Always handle errors with try/catch
- Use `const` for objects/arrays to prevent reassignment
- Use shallow copy (`{...obj}`) for simple objects
- Use `structuredClone()` for deep copying

---

## 🧪 Running the Code

### In Browser
1. Open `index.html` in a browser
2. Open Developer Console (F12)
3. The `index.js` file is automatically loaded

### In Node.js
```bash
node 1-basics/1-variable.js
node 3-control-flow/1-max.js
node 5-arrays/1-arrayFromRange.js
```

### In VS Code Terminal
```bash
# Run a specific file
node path/to/file.js

# Run all files in a directory
for file in 1-basics/*.js; do node "$file"; done
```

---

## 📚 Resources for Further Learning

- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info
- **You Don't Know JS (Book Series)**
- **JavaScript Algorithms & Data Structures** on FreeCodeCamp

---

## 🏆 Success Checklist

After completing this curriculum, you should be able to:

- [ ] Understand variables, constants, and primitive types
- [ ] Use operators correctly with proper precedence
- [ ] Write conditionals and loops effectively
- [ ] Create and manipulate objects
- [ ] Work with arrays and their methods
- [ ] Write functions with proper scope and closures
- [ ] Handle errors gracefully
- [ ] Write clean, readable, and efficient code
- [ ] Understand the difference between reference and value types
- [ ] Apply best practices in JavaScript programming

---

## 📅 Last Updated

January 2025 - Complete revision with modern JavaScript practices

---

## 📧 Notes

This is a self-paced learning curriculum. Each file contains:
- Quick summary for revision
- Detailed examples with explanations
- Common pitfalls and best practices
- Interview-important concepts

**Tip:** Review the `*Summery.js` files regularly for quick reference before interviews or coding challenges.

---

## SDET Interview Questions — JavaScript

Frequently asked JavaScript questions in SDET / Test Automation Engineer interviews, mapped to concepts in this repo.

---

### Core Language

**Q1. What is the difference between `==` and `===`? Why does it matter in test assertions?**
```
== performs type coercion before comparing (loose equality).
=== compares value AND type with no coercion (strict equality).

In test assertions always use === to avoid false positives.
Example: '5' == 5 → true (wrong in assertions)
         '5' === 5 → false (correct behaviour)
```

**Q2. What is the difference between `let`, `const`, and `var`?**
```
var   → function-scoped, hoisted, can be re-declared (avoid in modern JS)
let   → block-scoped, not hoisted to usable state, can be reassigned
const → block-scoped, must be initialised, cannot be reassigned

In test code: use const for page objects and fixed config; use let for loop
counters and values that change between test steps.
```

**Q3. What are truthy and falsy values? Give examples relevant to testing.**
```
Falsy: false, 0, '', null, undefined, NaN
Truthy: everything else (including [], {}, 'false')

In tests: if (element) checks if element is not null/undefined.
Pitfall: if ([]) is always truthy — use .length check instead.
```

**Q4. Explain value types vs reference types.**
```
Primitives (string, number, boolean) are copied by value — independent.
Objects and arrays are copied by reference — both variables point to same object.

In test data management: spread { ...config } or [...data] to avoid
accidentally mutating shared test fixtures across test cases.
```

**Q5. What is hoisting? How does it affect test setup?**
```
Function declarations are moved to the top at runtime — you can call them
before they appear in the file. Class and let/const declarations are NOT hoisted.

Practical impact: helper functions can be declared after the test that calls them,
but class-based Page Objects must be defined before use.
```

---

### Functions & Scope

**Q6. What is a closure? How is it used in test automation?**
```javascript
// A closure is a function that captures variables from its outer scope.
// Common use: factory functions for creating test helpers with shared state.

function createCounter() {
  let count = 0;
  return () => ++count;
}
const requestCount = createCounter();
// Each call to requestCount() increments the internal count.
// Useful for tracking how many times a mock was called.
```

**Q7. What is the difference between a function declaration and a function expression?**
```
Function declaration → hoisted, can be called before definition
Function expression  → not hoisted, must be defined before calling
Arrow function       → no own `this`, ideal for callbacks in test code

Use arrow functions for array callbacks (.filter, .map) and test hooks
(beforeEach(() => { ... })) to avoid `this` binding issues.
```

**Q8. What is the rest operator vs spread operator?**
```javascript
// Rest: collect remaining arguments into an array
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }

// Spread: expand array/object into individual elements
const merged = { ...defaultConfig, ...testOverrides }; // merge test configs
const copy   = [...testData];                           // clone test data array
```

**Q9. What are getters and setters? Where would you use them in test code?**
```javascript
// Getters expose computed read-only properties — common in Page Object Model.
class LoginPage {
  get url() { return '/login'; }               // read-only, computed
  get errorMessage() { return this.#errorEl; } // encapsulate locator access
}
```

---

### Async JavaScript (Critical for Playwright / Cypress / Selenium)

**Q10. What is a Promise? What are its states?**
```
A Promise represents a future value from an async operation.
States:
  pending   → operation in progress
  fulfilled → operation succeeded, .then() runs
  rejected  → operation failed, .catch() runs

In automation: browser interactions (click, navigate, waitFor) all return Promises.
```

**Q11. Explain async/await. Why is it preferred over raw Promises in tests?**
```javascript
// async/await makes async code read like synchronous code — easier to debug.

// Raw Promise chain (hard to read)
page.goto('/login').then(() => page.fill('#email', 'user@test.com'))
                   .then(() => page.click('#submit'));

// async/await (clean and readable)
async function login(page) {
  await page.goto('/login');
  await page.fill('#email', 'user@test.com');
  await page.click('#submit');
}
// Error handling with try/catch works naturally with async/await.
```

**Q12. What is `Promise.all()`? When would you use it in test automation?**
```javascript
// Promise.all() runs multiple async operations IN PARALLEL and waits for all.
// Use it to speed up independent setup operations.

async function setup() {
  await Promise.all([
    page.goto('/dashboard'),
    apiClient.createTestUser(),
    db.seedTestData()
  ]);
  // All three complete before the test begins
}
// Caution: if one rejects, Promise.all() immediately rejects.
// Use Promise.allSettled() when you want all results regardless of failure.
```

**Q13. What is callback hell? How does async/await solve it?**
```
Callback hell: deeply nested callbacks making code hard to read and debug.

async/await flattens the structure into sequential steps — each await pauses
until the Promise resolves, then continues on the next line. This makes
stack traces cleaner and test failures easier to pinpoint.
```

---

### OOP & Page Object Model

**Q14. How do you implement a Page Object Model (POM) using ES6 classes?**
```javascript
class LoginPage {
  #page;

  constructor(page) {
    this.#page = page;
  }

  get emailInput()   { return this.#page.locator('#email'); }
  get passwordInput(){ return this.#page.locator('#password'); }
  get submitButton() { return this.#page.locator('#submit'); }

  async login(email, password) {
    await this.#page.goto('/login');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
// Benefits: locators defined once, reused everywhere; easy to update on UI change.
```

**Q15. How does class inheritance help in test automation?**
```javascript
// Base page handles shared behaviour (navigation, loading waits).
class BasePage {
  constructor(page) { this.page = page; }
  async waitForLoad() { await this.page.waitForLoadState('networkidle'); }
}

class DashboardPage extends BasePage {
  async getTitle() { return this.page.title(); }
}
// Child pages inherit waitForLoad() without repeating it.
```

**Q16. What is the `this` keyword? How can it cause bugs in test callbacks?**
```javascript
// `this` refers to the object executing the function.
// Arrow functions inherit `this` from the outer scope — safe in callbacks.

class TestHelper {
  constructor() { this.count = 0; }

  // Bug: regular function loses `this` in callbacks
  runBad(items) { items.forEach(function() { this.count++; }); } // this = undefined

  // Fix: arrow function inherits this
  runGood(items) { items.forEach(() => { this.count++; }); } // this = TestHelper
}
```

---

### Arrays & Data-Driven Testing

**Q17. What is the difference between `find()` and `filter()`?**
```javascript
const results = [{ id: 1, pass: true }, { id: 2, pass: false }, { id: 3, pass: true }];

results.find(r => r.pass);    // → { id: 1, pass: true }  — first match only
results.filter(r => r.pass);  // → [{ id:1 }, { id:3 }]  — all matches

Use find()   when you expect a single item (look up by ID).
Use filter() when you want all matching items (failed test cases).
```

**Q18. How do you use `map()`, `filter()`, and `reduce()` in test data management?**
```javascript
const testResults = [
  { name: 'login',    status: 'pass', duration: 1200 },
  { name: 'checkout', status: 'fail', duration: 3400 },
  { name: 'search',   status: 'pass', duration: 800  }
];

// Get only failed test names
const failed = testResults.filter(t => t.status === 'fail').map(t => t.name);
// → ['checkout']

// Total execution time
const totalMs = testResults.reduce((sum, t) => sum + t.duration, 0);
// → 5400
```

**Q19. How do you deep clone test data to prevent mutation between tests?**
```javascript
const baseConfig = { browser: 'chromium', headless: true, timeout: 5000 };

// Shallow copy (spread) — safe for flat objects
const testConfig = { ...baseConfig, headless: false };

// Deep clone — needed when object has nested objects
const deepCopy = JSON.parse(JSON.stringify(baseConfig));  // simple but loses functions
const deepCopy2 = structuredClone(baseConfig);            // modern, handles more types

// Mutating testConfig does NOT affect baseConfig.
```

**Q20. Explain destructuring. How is it useful in test code?**
```javascript
// Object destructuring
const { browser, timeout } = config;

// Array destructuring
const [first, second] = testResults;

// In function parameters — common in test hooks
function validateResponse({ status, body, headers }) {
  expect(status).toBe(200);
  expect(body).toBeDefined();
}

// Named destructuring makes assertions self-documenting.
```

---

### Error Handling & Debugging

**Q21. How do you handle errors in async test code?**
```javascript
// Option 1: try/catch — preferred for specific error handling
async function loginTest(page) {
  try {
    await page.click('#submit');
    await page.waitForURL('/dashboard');
  } catch (err) {
    console.error('Login failed:', err.message);
    throw err; // re-throw so the test framework marks it failed
  }
}

// Option 2: .catch() on the promise chain
await page.click('#submit').catch(err => { throw new Error(`Click failed: ${err}`); });
```

**Q22. What is the difference between `throw new Error()` and `return`?**
```
throw  → immediately exits the function and propagates the error up the call stack.
         The test framework catches it and marks the test as FAILED.
return → exits the function silently. If used in a catch block, the error is swallowed
         and the test may incorrectly PASS.

Always re-throw after logging in test catch blocks.
```

---

### Modules & Test Utilities

**Q23. How do you share utility functions across test files?**
```javascript
// utils/testHelpers.js — CommonJS (Node/Jest)
function generateEmail() {
  return `test_${Date.now()}@example.com`;
}
module.exports = { generateEmail };

// In test file
const { generateEmail } = require('./utils/testHelpers');

// ES6 Modules (Playwright default)
export function generateEmail() { return `test_${Date.now()}@example.com`; }
import { generateEmail } from './utils/testHelpers.js';
```

**Q24. What is the difference between named exports and default exports?**
```javascript
// Named export — import with { braces }, exact name required
export function loginAs(role) { ... }
export const BASE_URL = 'https://app.example.com';
import { loginAs, BASE_URL } from './helpers.js';

// Default export — import with any name, no braces
export default class LoginPage { ... }
import LoginPage from './pages/LoginPage.js';  // name is your choice
```

---

### Quick SDET Cheat Sheet

| Concept | Why SDETs Need It |
|---------|-------------------|
| `===` strict equality | Precise assertions, no false positives |
| `async/await` | Clean handling of browser interactions |
| `Promise.all()` | Parallel test setup to reduce suite time |
| Array `filter/map/reduce` | Data-driven test generation and result analysis |
| Spread `{...obj}` | Isolate test data, prevent cross-test mutation |
| Destructuring | Readable assertions and config access |
| ES6 Classes + POM | Maintainable, DRY page object structure |
| `try/catch` in async | Proper test failure propagation |
| Modules | Shareable utilities, fixtures, and helpers |
| Closures | Stateful mocks, call counters, fixture factories |

---

Happy Learning! 🚀
