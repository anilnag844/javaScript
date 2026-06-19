// ==================== Except (Exclude Values) ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Returns a new array with specified values removed (does not mutate original)
// - Uses for...of + Array.includes() to skip excluded elements
// - Alternative: Array.filter() is more idiomatic and concise
// - Pure function: original array is never modified

// -------------------- Implementation (for...of) --------------------
function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

// -------------------- Alternative (filter) --------------------
const exceptAlt = (array, excluded) =>
  array.filter(element => !excluded.includes(element));

// -------------------- Test Cases --------------------
const numbers = [1, 2, 3, 4];

console.log(except(numbers, [1, 2]));     // [3, 4]
console.log(except(numbers, [4]));        // [1, 2, 3]
console.log(except(numbers, []));         // [1, 2, 3, 4] — nothing excluded
console.log(except(numbers, [1,2,3,4])); // [] — all excluded
console.log(numbers);                     // [1, 2, 3, 4] — original unchanged

console.log(exceptAlt(numbers, [1, 2]));  // [3, 4]
console.log(exceptAlt(numbers, [4]));     // [1, 2, 3]

// ==================== End of Except ====================
