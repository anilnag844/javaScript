// -------------------- Quick Summary (For Revision) --------------------
// - Prototype: Every object has a hidden __proto__ linking to its parent
// - Prototype Chain: JS walks up the chain until it finds the property or hits null
// - Prototypical Inheritance: Child.prototype = Object.create(Parent.prototype)
// - Reset constructor: Child.prototype.constructor = Child (always do this!)
// - super call: Parent.call(this, args) inside child constructor
// - Method Overriding: Redefine method on child prototype to change behaviour
// - Polymorphism: Same method name, different behaviour per class
// - ES6 class: Syntactic sugar over prototype inheritance (same engine underneath)
// - extends + super(): Clean syntax for inheritance and super constructor call
// - static: Belongs to the class itself, not instances (Math.random style)
// - get/set: Controlled access to properties, can add validation
// - Private (#): ES2022 true private fields, not accessible outside the class
// - WeakMap private: Older pattern for private members, still used in interviews
// - Mixin: Compose behaviour without deep inheritance chains (copy methods in)
// - Composition > Inheritance: Prefer mixins/composition for flexible design
// - instanceof: Check if object was created from a specific class/constructor
// - Object.create(null): Creates object with NO prototype (pure hash map)
// ----------------------------------------------------------------------


// ———————————————————————
// 1. PROTOTYPES
// ———————————————————————
console.log('1. PROTOTYPES');

function Circle(radius) {
  this.radius = radius;
}

// Add method on shared prototype (not recreated per instance)
Circle.prototype.draw = function() {
  console.log('Drawing circle with radius', this.radius);
};

Circle.prototype.toString = function() {
  return `Circle with radius ${this.radius}`;
};

const c1 = new Circle(1);
const c2 = new Circle(2);
c1.draw();               // found on Circle.prototype
console.log(c1.toString()); // overrides Object.prototype.toString

// Prototype chain: c1 → Circle.prototype → Object.prototype → null
console.log(Object.getPrototypeOf(c1) === Circle.prototype); // true


// ———————————————————————
// 2. PROTOTYPICAL INHERITANCE
// ———————————————————————
console.log('\n2. PROTOTYPICAL INHERITANCE');

// Helper → keeps inheritance wiring in one place (Mosh pattern)
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;  // reset constructor!
}

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function() {
  console.log('Duplicating shape');
};

function Square(size, color) {
  Shape.call(this, color);   // call parent constructor → sets this.color
  this.size = size;
}
extend(Square, Shape);

// Method override + call parent version
Square.prototype.duplicate = function() {
  console.log('Duplicating square');
  Shape.prototype.duplicate.call(this);
};

const sq = new Square(10, 'blue');
sq.duplicate();
console.log(sq instanceof Square); // true
console.log(sq instanceof Shape);  // true


// ———————————————————————
// 3. METHOD OVERRIDING & POLYMORPHISM
// ———————————————————————
console.log('\n3. POLYMORPHISM');

function Triangle() {}
extend(Triangle, Shape);
Triangle.prototype.duplicate = function() {
  console.log('Duplicating triangle');
};

// Polymorphism — same method name, different behaviour
const shapes = [new Square(5, 'red'), new Triangle()];
shapes.forEach(s => s.duplicate());
// Square → 'Duplicating square'
// Triangle → 'Duplicating triangle'


// ———————————————————————
// 4. ES6 CLASSES
// ———————————————————————
console.log('\n4. ES6 CLASSES');

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  toString() {
    return `Animal: ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);         // must come before this
    this.breed = breed;
  }

  // Method override
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog('Rex', 'Labrador');
d.speak();
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true

// Static method → called on class, not instance
class MathHelper {
  static add(a, b) { return a + b; }
  static PI = 3.14159;
}
console.log(MathHelper.add(5, 3));
console.log(MathHelper.PI);

// Getters and Setters
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this._celsius = (value - 32) / 1.8;
  }
}

const temp = new Temperature(0);
console.log(temp.fahrenheit); // 32
temp.fahrenheit = 212;
console.log(temp._celsius);   // 100


// ———————————————————————
// 5. PRIVATE MEMBERS
// ———————————————————————
console.log('\n5. PRIVATE MEMBERS');

// Modern way → ES2022 private fields (#)
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) throw new Error('Amount must be positive.');
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error('Insufficient funds.');
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
acc.withdraw(200);
console.log(acc.balance); // 300
// console.log(acc.#balance); // SyntaxError — truly private

// Older way → WeakMap (still asked in interviews)
const _items = new WeakMap();

class Stack {
  constructor() { _items.set(this, []); }

  push(item) { _items.get(this).push(item); }

  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error('Stack is empty.');
    return items.pop();
  }

  get count() { return _items.get(this).length; }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.count); // 2
console.log(stack.pop()); // 2


// ———————————————————————
// 6. MIXINS — Composition over Inheritance
// ———————————————————————
console.log('\n6. MIXINS');

// Problem: JS has single inheritance — can't extend two classes
// Solution: Mix extra behaviour into a class using Object.assign

const Serializable = (Base) => class extends Base {
  serialize() {
    return JSON.stringify(this);
  }
};

const Timestamped = (Base) => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date().toISOString();
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

class TimestampedUser extends Timestamped(Serializable(User)) {}

const u = new TimestampedUser('Ali');
console.log(u.serialize());   // {"name":"Ali","createdAt":"..."}
console.log(u.createdAt);


// ———————————————————————
// POPULAR INTERVIEW QUESTIONS — OOP
// ———————————————————————

// 1. What is a prototype in JavaScript?
// - Every object has a hidden [[Prototype]] (__proto__) pointing to another object
// - JS looks up the chain when a property is not found on the object itself
// Example: c1.__proto__ === Circle.prototype → true

// 2. What is the difference between __proto__ and prototype?
// - prototype: property on FUNCTIONS, used as blueprint for new instances
// - __proto__: property on OBJECTS, the actual link to the parent prototype

// 3. What does the `new` keyword do?
// - Creates a new empty object {}
// - Sets its __proto__ to the constructor's prototype
// - Binds `this` to the new object inside the constructor
// - Returns the new object automatically

// 4. How do you implement inheritance without ES6 classes?
function extendExample(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
// Then call Parent.call(this, args) inside Child constructor

// 5. What is the difference between classical and prototypical inheritance?
// - Classical (Java/C++): Classes are blueprints, instances are copies
// - Prototypical (JS): Objects inherit directly from other objects via the chain
// - ES6 class syntax is sugar over prototypical inheritance

// 6. What are ES6 private fields?
// - Declared with # prefix inside class body
// - Truly private — not accessible outside the class
// - SyntaxError if accessed from outside (not just undefined)
class Demo {
  #secret = 42;
  getSecret() { return this.#secret; }
}
console.log(new Demo().getSecret()); // 42

// 7. What is polymorphism?
// - Different classes implementing the same method differently
// - Lets you write code that works across multiple types
// Example: shapes.forEach(s => s.duplicate()) → works for Square and Triangle

// 8. When should you use composition over inheritance?
// - When you need to share behaviour across unrelated classes
// - When inheritance creates rigid, hard-to-change hierarchies
// - Rule: Favour "has-a" (mixin) over "is-a" (extends) for flexibility

// 9. What is a static method?
// - Belongs to the class itself, not any instance
// - Called as ClassName.method() not instance.method()
// - Useful for utility functions (Math.random, Array.isArray)

// 10. What is the difference between Object.freeze() and Object.seal()?
// - freeze(): cannot add, remove, or modify any property
// - seal(): cannot add or remove, but CAN modify existing properties
const frozen = Object.freeze({ x: 1 });
const sealed = Object.seal({ y: 2 });
// frozen.x = 99; // ignored silently (non-strict) or throws (strict)
sealed.y = 99;    // allowed
console.log(sealed.y); // 99
