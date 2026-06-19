// ==================== Max of Two Numbers ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Control flow: use if/else or ternary to branch based on a condition
// - Ternary is a concise one-liner for simple if/else returns
// - Math.max() is the built-in alternative for finding the maximum value
// - Both approaches return the first argument when values are equal

// -------------------- if/else Version --------------------
function maxIfElse(a, b) {
  if (a > b) return a;
  else return b;
}

// -------------------- Ternary Version --------------------
function max(a, b) {
  return a > b ? a : b;
}

// -------------------- Test Cases --------------------
console.log(max(5, 3));   // 5  — first arg is larger
console.log(max(3, 5));   // 5  — second arg is larger
console.log(max(5, 5));   // 5  — equal values
console.log(max(-2, -8)); // -2 — negative numbers

// Verify both implementations match
console.log(maxIfElse(5, 3));   // 5
console.log(maxIfElse(3, 5));   // 5

// -------------------- Built-in Alternative --------------------
// Math.max() handles multiple values and is preferred in real code
console.log(Math.max(5, 3));          // 5
console.log(Math.max(1, 9, 3, 7));   // 9  — works with any number of args
console.log(Math.max(...[4, 2, 8])); // 8  — spread an array

// ==================== End of Max ====================