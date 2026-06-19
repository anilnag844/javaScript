// ==================== Get Max ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Finds the maximum value in an array using reduce()
// - reduce() with no initial value uses the first element as accumulator
// - Guard empty array: reduce() with no initial value throws on empty arrays
// - Alternative: Math.max(...array) via spread — concise but can hit stack limit on huge arrays
// - for loop alternative: explicit and easy to understand

// -------------------- Implementation (reduce) --------------------
function getMax(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array.reduce((a, b) => (a > b) ? a : b);
}

// -------------------- Alternative (for loop) --------------------
function getMaxLoop(array) {
  if (array.length === 0) {
    return undefined;
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// -------------------- Alternative (Math.max + spread) --------------------
const getMaxSpread = array =>
  array.length === 0 ? undefined : Math.max(...array);

// -------------------- Test Cases --------------------
const numbers = [1, 2, 3, 4];

console.log(getMax(numbers));         // 4
console.log(getMax([3, 1, 4, 1, 5])); // 5
console.log(getMax([-3, -1, -4]));    // -1 — all negative
console.log(getMax([7]));             // 7  — single element
console.log(getMax([]));              // undefined — empty array

console.log(getMaxLoop(numbers));     // 4
console.log(getMaxSpread(numbers));   // 4

// ==================== End of Get Max ====================
