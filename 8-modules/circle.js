// ==================== Circle Module (CommonJS) ====================

// -------------------- Quick Summary (For Revision) --------------------
// - module.exports = Class exposes this class as the module's single export
// - require('./circle') in another file receives exactly what's assigned here
// - Input validation in the constructor prevents bad state from the start
// - Private backing field (_radius) with getter/setter for controlled access

class Circle {
  constructor(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Radius must be a positive number.');
    }
    this._radius = value;
  }

  area() {
    return Math.PI * this._radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this._radius;
  }

  toString() {
    return `Circle with radius ${this._radius}`;
  }
}

module.exports = Circle;

// Named exports alternative (ESM style, for reference):
// export class Circle { ... }
// export default Circle;
