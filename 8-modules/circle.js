
// CommonJS module — export a class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  toString() {
    return `Circle with radius ${this.radius}`;
  }
}

module.exports = Circle;
