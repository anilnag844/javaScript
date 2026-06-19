// ==================== Max of Two Numbers ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Control flow: use if/else or ternary to branch based on a condition
// - Ternary is a concise one-liner for simple if/else returns
// - Math.max() is the built-in alternative for finding the maximum value
// - Both approaches return the first argument when values are equal

// -------------------- if/else Version --------------------
function maxIfElse(a, b) {
  if (a > b) { return a; }
  else { return b; }
}

// -------------------- Ternary Version --------------------
function max(a, b) {
  return a > b ? a : b;
}

// -------------------- Test Cases --------------------
console.log(max(1, 2));   // 2  — second arg is larger
console.log(max(5, 3));   // 5  — first arg is larger
console.log(max(5, 5));   // 5  — equal values
console.log(max(-2, -8)); // -2 — negative numbers

console.log(maxIfElse(1, 2));   // 2
console.log(maxIfElse(5, 3));   // 5

// -------------------- Built-in Alternative --------------------
console.log(Math.max(1, 2));          // 2
console.log(Math.max(1, 9, 3, 7));   // 9
console.log(Math.max(...[4, 2, 8])); // 8

// ==================== End of Max of Two Numbers ====================
