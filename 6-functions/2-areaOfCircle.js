// ==================== Area of Circle (Getter / Setter) ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Getter (get): accesses a computed property like a regular property (no parentheses)
// - Setter (set): intercepts assignment and allows validation
// - Getters recalculate on every access — useful for derived values
// - Math.PI is a built-in constant: 3.141592653589793
// - Formula: area = π × r²

// -------------------- Object with Getter and Setter --------------------
const circle = {
  _radius: 1, // _ convention signals "internal" property

  get radius() {
    return this._radius;
  },

  set radius(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Radius must be a positive number.');
    }
    this._radius = value;
  },

  get area() {
    return Math.PI * this._radius * this._radius;
  }
};

// -------------------- Test Cases --------------------
console.log('radius:', circle.radius);              // 1
console.log('area (r=1):', circle.area);            // 3.14159...

circle.radius = 5;
console.log('radius after set:', circle.radius);   // 5
console.log('area (r=5):', circle.area.toFixed(2)); // 78.54

circle.radius = 10;
console.log('area (r=10):', circle.area.toFixed(2)); // 314.16

// Invalid radius — setter validation
try {
  circle.radius = -3;
} catch (e) {
  console.log('Error:', e.message); // 'Radius must be a positive number.'
}

try {
  circle.radius = 'big';
} catch (e) {
  console.log('Error:', e.message); // 'Radius must be a positive number.'
}

// ==================== End of Area of Circle ====================
