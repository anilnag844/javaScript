
// CommonJS — import and use the Circle module
const Circle = require('./circle');

const c = new Circle(5);
console.log(c.area().toFixed(2));  // 78.54
console.log(c.toString());         // Circle with radius 5
