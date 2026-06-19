// ==================== Landscape Check ====================

// -------------------- Quick Summary (For Revision) --------------------
// - A screen is landscape when width > height
// - Boolean return: directly return a comparison expression (no if needed)
// - String return: use if/else to describe the orientation explicitly
// - Equal width and height is a square — neither landscape nor portrait

// -------------------- Boolean Version (ternary) --------------------
function isLandscape(width, height) {
  return width > height;
}

// -------------------- Descriptive Version (if/else) --------------------
function getOrientation(width, height) {
  if (width > height) return 'Landscape';
  else if (width < height) return 'Portrait';
  else return 'Square';
}

// -------------------- Test Cases --------------------
console.log(isLandscape(800, 700)); // true  — wider than tall
console.log(isLandscape(700, 800)); // false — taller than wide
console.log(isLandscape(800, 800)); // false — equal (square, not landscape)
console.log(isLandscape(0, 0));     // false — zero dimensions

console.log(getOrientation(800, 700)); // 'Landscape'
console.log(getOrientation(700, 800)); // 'Portrait'
console.log(getOrientation(800, 800)); // 'Square'

// ==================== End of Landscape Check ====================