// ==================== Vehicle (Polymorphism) ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Polymorphism: same method name (move), different behaviour per subclass
// - super.move(): call the parent method from within a child override
// - extends + constructor-less subclass: inherits parent constructor automatically
// - Storing mixed subclasses in an array and iterating with forEach is the
//   classic polymorphism demo — one loop, different output per type
// - instanceof: verify which class an object belongs to

// -------------------- Base Class --------------------
class Vehicle {
  constructor(make, model) {
    this.make  = make;
    this.model = model;
  }

  move() {
    console.log(`${this.make} ${this.model} is moving`);
  }
}

// -------------------- Subclasses --------------------
class Car extends Vehicle {
  move() {
    super.move(); // call parent first, then extend
    console.log(`${this.make} ${this.model} is driving on the road`);
  }
}

class Truck extends Vehicle {
  move() {
    super.move();
    console.log(`${this.make} ${this.model} is hauling a load`);
  }
}

class Motorcycle extends Vehicle {
  move() {
    super.move();
    console.log(`${this.make} ${this.model} is riding at speed`);
  }
}

// -------------------- Polymorphism Demo --------------------
const vehicles = [
  new Car('Toyota', 'Corolla'),
  new Truck('Ford', 'F-150'),
  new Motorcycle('Honda', 'CBR'),
];

vehicles.forEach(v => v.move());
// Each calls its own move() — same interface, different behaviour

// -------------------- instanceof checks --------------------
const car = new Car('BMW', 'M3');
console.log(car instanceof Car);     // true
console.log(car instanceof Vehicle); // true — inherits from Vehicle
console.log(car instanceof Truck);   // false

// ==================== End of Vehicle ====================
