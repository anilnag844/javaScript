// ———————————————————————————————————————————————————————————————
// OBJECTS – COMPLETE QUICK REVISION (2025)
// All interview-important concepts fully included.
// ———————————————————————————————————————————————————————————————
//
// ⭐ KEY SUMMARY (with crisp explanations)
// ------------------------------------------------------------
// • Objects = key-value pairs (properties + methods)  
//      Objects store data + behavior together.
//
// • Factory fx vs Constructor fx (new keyword behaviour)  
//      Factory returns object; Constructor uses `new` to create it.
//
// • `new` does 4 things
//      1. creates empty object {}
//      2. sets its __proto__ → Constructor.prototype (enables prototype chain)
//      3. binds `this` to it
//      4. returns the object automatically
//
// • this keyword depends on HOW function is called  
//      obj.method() → `this` = obj  
//      function() → `this` = undefined (strict mode)
//
// • Arrow functions DON’T bind their own this  
//      They inherit from the surrounding scope (lexical this).
//
// • Prototypes enable inheritance (prototype chain)  
//      If property not found → JS looks up the chain.
//
// • __proto__ (object) ≠ prototype (function)  
//      obj.__proto__ → actual prototype of object  
//      fn.prototype → used ONLY for instances created via new
//
// • Classes = prototype-based OOP with cleaner syntax  
//      Syntactic sugar over prototype inheritance.
//
// • Static methods belong to the class, not instances  
//      Class.sayHi() vs obj.sayHi()
//
// • Getters/Setters = controlled property access  
//      get name() { } / set name() { } → computed or validated values.
//
// • Value vs Reference types (PRIMITIVE vs OBJECT)  
//      Primitive = copied by value  
//      Object = copied by reference
//
// • Spread { ...obj } → shallow clone  
//      Only top-level copied; nested objects still referenced.
//
// • structuredClone(obj) → deep clone  
//      Safest built-in method to fully copy objects.
//
// • freeze() vs seal() → immutability levels
//      freeze() = no change at all (shallow — nested objects are still mutable!)
//      seal() = can't add/remove, but can modify existing
//
// • Optional chaining ?. to avoid crashes  
//      user?.address?.city → returns undefined instead of error.
//
// • Destructuring for quick property extraction  
//      const {name, age} = user;
//
// • Functions are objects (call/apply/bind)  
//      fn.call(obj), fn.apply(obj), fn.bind(obj) → control `this`.
//
// • Date months are 0-based  
//      new Date(2025, 0, 15) → January
// ------------------------------------------------------------


// ====================================================================
// 1. OBJECT BASICS
// ====================================================================
const circle = {
  radius: 1,
  draw() { console.log('draw'); }
};
// Object = collection of properties + methods



// ====================================================================
// 2. FACTORY FUNCTION (camelCase)
// ====================================================================
function createCircle(radius) {
  return {
    radius,
    draw() { console.log('draw'); }
  };
}
const c1 = createCircle(5);



// ====================================================================
// 3. CONSTRUCTOR FUNCTION (PascalCase) + new operator
// ====================================================================
function Circle(radius) {
  this.radius = radius;
  this.draw = function() { console.log('draw'); };
}
const c2 = new Circle(10);

// new does 4 things:
// 1. Creates empty object {}
// 2. Sets its __proto__ → Constructor.prototype (enables prototype chain)
// 3. Binds this → that object
// 4. Returns the created object



// ====================================================================
// 4. OBJECTS ARE DYNAMIC
// ====================================================================
const obj = { name: 'Mosh' };
obj.age = 30;          // add
obj.age = 35;          // modify
delete obj.age;        // delete
// const blocks reassignment (obj = {}) but NOT internal mutation



// ====================================================================
// 5. VALUE vs REFERENCE TYPES (Most Asked!)
// ====================================================================
let x = 10;
let y = x;
x = 20;                // y stays 10 (primitive → by value)

let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20;       // obj2.value becomes 20 (object → by reference)



// ====================================================================
// 6. CLONING OBJECTS (Shallow + Deep)
// ====================================================================
const original = { name: 'John', address: { city: 'NY' } };

// Shallow clone
const clone1 = { ...original };
const clone2 = Object.assign({}, original);

// Deep clone
const deepClone = structuredClone(original);



// ====================================================================
// 7. ENUMERATING & INSPECTING
// ====================================================================
for (let key in circle) { console.log(key, circle[key]); }
console.log(Object.keys(circle));        // ['radius', 'draw']
console.log(Object.entries(circle));     // [['radius',1], ['draw', f]]
console.log('radius' in circle);         // true



// ====================================================================
// 8. FUNCTIONS ARE OBJECTS!
// ====================================================================
function sayHi() { }
sayHi.language = 'JS';

sayHi.call(null, 'John');   // same as sayHi('John')
sayHi.apply(null, ['John']);



// ====================================================================
// 9. BUILT-IN OBJECTS: Math, String, Template Literals, Date
// ====================================================================

// Math
Math.random();
Math.floor(Math.random() * 10) + 1;
Math.PI;
Math.max(10, 30, 20);

// String auto-boxing
'hello'.toUpperCase();
const s = new String('hi');   // bad practice

// Template Literals
const name = 'Sara';
const email = `
  Hi ${name},
  Welcome to our platform!
  Regards,
  Team
`;

// Date
const now = new Date();
now.toISOString();
new Date(2025, 0, 15);  // January 15 (0-based month!)



// ====================================================================
// 10. INTERVIEW GOLD — REAL CONCEPTS ADDED (CRISP + CODE EXAMPLES)
// ====================================================================



// --------------------------------------------------------------------
// (A) What is an object?
// --------------------------------------------------------------------
console.log('\n(A) What is an object?');
// Crisp: Collection of key-value pairs.
const userObj = {
  name: "Ali",
  login() { console.log("Logged in"); }
};



// --------------------------------------------------------------------
// (B) this Keyword
// --------------------------------------------------------------------
console.log('\n(B) this keyword');
// Crisp: "this" = object that calls the function.
const user2 = {
  name: "Ali",
  show() { console.log(this.name); }
};
user2.show(); // Ali



// --------------------------------------------------------------------
// (C) Arrow functions & this
// --------------------------------------------------------------------
console.log('\n(C) Arrow functions and this');
// Arrow functions do NOT bind their own this.
const objArrow = {
  name: "Sam",
  show: () => console.log(this.name) // undefined
};
objArrow.show();



// --------------------------------------------------------------------
// (D) Prototypes
// --------------------------------------------------------------------
console.log('\n(D) Prototypes');
function Shape() {}
Shape.prototype.move = function() { console.log('move'); };

const s1 = new Shape();
s1.move();  // move



// --------------------------------------------------------------------
// (E) Prototype Chain
// --------------------------------------------------------------------
console.log('\n(E) Prototype Chain');
console.log(s1.__proto__ === Shape.prototype);      // true
console.log(Shape.prototype.__proto__ === Object.prototype); // true



// --------------------------------------------------------------------
// (F) prototype vs __proto__
// --------------------------------------------------------------------
console.log('\n(F) prototype vs __proto__');
// prototype = property of functions
// __proto__ = property of objects created from those functions



// --------------------------------------------------------------------
// (G) Inheritance in JavaScript
// --------------------------------------------------------------------
console.log('\n(G) Inheritance');
function Animal(type) { this.type = type; }
Animal.prototype.eat = function() { console.log('eat'); };

function Dog(name) {
  Animal.call(this, 'dog');
  this.name = name;
}

// Inherit prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d1 = new Dog("Rocky");
d1.eat();



// --------------------------------------------------------------------
// (H) ES6 Classes
// --------------------------------------------------------------------
console.log('\n(H) ES6 Classes');
class Person {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name); }
}
new Person("Ali").speak();



// --------------------------------------------------------------------
// (I) Static Methods
// --------------------------------------------------------------------
console.log('\n(I) Static Methods');
class MathTools {
  static add(a,b){ return a+b; }
}
console.log(MathTools.add(5,10));



// --------------------------------------------------------------------
// (J) Getters & Setters
// --------------------------------------------------------------------
console.log('\n(J) Getters & Setters');
class User {
  constructor(name){ this._name = name; }
  get name(){ return this._name; }
  set name(v){ this._name = v.toUpperCase(); }
}
const u1 = new User("ali");
u1.name = "john";
console.log(u1.name); // JOHN



// --------------------------------------------------------------------
// (K) Object Property Descriptors
// --------------------------------------------------------------------
console.log('\n(K) Property Descriptors');
const product = {};
Object.defineProperty(product, 'price', {
  value: 100,
  writable: false
});
console.log(product.price);



// --------------------------------------------------------------------
// (L) Object.freeze() vs Object.seal()
// --------------------------------------------------------------------
console.log('\n(L) Freezing vs Sealing');
const item = { x: 10 };
Object.freeze(item);  // cannot modify, delete, or add
// item.x = 20; // ❌ ignored

const item2 = { y: 10 };
Object.seal(item2);   // cannot add/remove, but can modify
item2.y = 20;         // ✔ OK



// --------------------------------------------------------------------
// (M) Optional Chaining
// --------------------------------------------------------------------
console.log('\n(M) Optional Chaining');
const profile = { address: { city: "NY" } };
console.log(profile?.address?.city);



// --------------------------------------------------------------------
// (N) Destructuring
// --------------------------------------------------------------------
console.log('\n(N) Destructuring');
const user3 = { name: "Ali", age: 25 };
const { name: userName, age: userAge } = user3;
console.log(userName, userAge);



// --------------------------------------------------------------------
// (O) Spread vs Rest
// --------------------------------------------------------------------
console.log('\n(O) Spread vs Rest');

const objA = { x: 1, y: 2 };
const objB = { ...objA }; // Spread
console.log(objB);

function logAll(...args) { // Rest
  console.log(args);
}
logAll(1,2,3);

