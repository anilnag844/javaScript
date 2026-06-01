
class Vehicle {
  constructor(make, model) {
    this.make  = make;
    this.model = model;
  }

  move() {
    console.log(`${this.make} ${this.model} is moving`);
  }
}

class Car extends Vehicle {
  move() {
    console.log(`${this.make} ${this.model} is driving on the road`);
  }
}

class Truck extends Vehicle {
  move() {
    console.log(`${this.make} ${this.model} is hauling a load`);
  }
}

class Motorcycle extends Vehicle {
  move() {
    console.log(`${this.make} ${this.model} is riding at speed`);
  }
}

const vehicles = [
  new Car('Toyota', 'Corolla'),
  new Truck('Ford', 'F-150'),
  new Motorcycle('Honda', 'CBR'),
];

vehicles.forEach(v => v.move());
