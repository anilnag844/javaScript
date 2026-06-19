// ==================== Count Truthy Values ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Falsy values in JS (exactly 6): false, 0, '', null, undefined, NaN
// - Everything else is truthy
// - if (value) implicitly checks truthiness — no === true needed
// - for...of iterates over array elements directly
// - Alternative: arr.filter(Boolean).length — concise one-liner

// -------------------- Implementation (for...of) --------------------
function countTruthy(arr) {
  let count = 0;
  for (let value of arr) {
    if (value) {
      count++;
    }
  }
  return count;
}

// -------------------- Alternative (filter) --------------------
const countTruthyFilter = arr => arr.filter(Boolean).length;

// -------------------- Test Cases --------------------
// All 6 falsy values + 2 truthy values
const mixed = [false, 0, '', null, undefined, NaN, 2, 3];
console.log(countTruthy(mixed));       // 2
console.log(countTruthyFilter(mixed)); // 2

// All truthy
const allTruthy = [1, 'hello', true, {}, []];
console.log(countTruthy(allTruthy));       // 5
console.log(countTruthyFilter(allTruthy)); // 5

// All falsy
const allFalsy = [0, null, undefined, '', false, NaN];
console.log(countTruthy(allFalsy));       // 0
console.log(countTruthyFilter(allFalsy)); // 0

// Empty array
console.log(countTruthy([]));       // 0
console.log(countTruthyFilter([])); // 0

// ==================== End of Count Truthy Values ====================
