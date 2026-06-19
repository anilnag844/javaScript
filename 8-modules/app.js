// ==================== App Entry Point (CommonJS) ====================

// -------------------- Quick Summary (For Revision) --------------------
// - require() loads a module synchronously and returns its module.exports
// - The path './circle' is relative to this file (no .js extension needed in CJS)
// - __dirname: absolute path of the current file's directory (Node.js global)
// - __filename: absolute path of the current file (Node.js global)

const Circle = require('./circle');

// -------------------- Basic Usage --------------------
const c = new Circle(5);
console.log(c.area().toFixed(2));       // 78.54
console.log(c.perimeter().toFixed(2));  // 31.42
console.log(c.toString());              // Circle with radius 5

// -------------------- Getter / Setter --------------------
c.radius = 10;
console.log(c.area().toFixed(2));       // 314.16

// -------------------- Input Validation --------------------
try {
  const bad = new Circle(-3);
} catch (e) {
  console.log('Error:', e.message); // 'Radius must be a positive number.'
}

try {
  c.radius = 0;
} catch (e) {
  console.log('Error:', e.message); // 'Radius must be a positive number.'
}

// -------------------- Node.js Module Globals --------------------
console.log('__dirname:', __dirname);   // absolute path to this directory
console.log('__filename:', __filename); // absolute path to this file
