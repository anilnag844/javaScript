// ==================== Array From Range ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Build an array of consecutive numbers between min and max (inclusive)
// - Use a for loop pushing each value, or Array.from() for a one-liner
// - Guard against invalid input: min > max produces an empty array (not an error)
// - Useful for generating ranges, pagination, test data

// -------------------- Implementation (for loop) --------------------
function arrayFromRange(min, max) {
  if (min > max) {
    return [];
  }

  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

// -------------------- Alternative (Array.from) --------------------
const arrayFromRangeAlt = (min, max) =>
  min > max ? [] : Array.from({ length: max - min + 1 }, (_, i) => i + min);

// -------------------- Test Cases --------------------
console.log(arrayFromRange(1, 4));    // [1, 2, 3, 4]
console.log(arrayFromRange(-2, 2));   // [-2, -1, 0, 1, 2]
console.log(arrayFromRange(5, 5));    // [5]  — single element
console.log(arrayFromRange(4, 1));    // []   — min > max, empty

console.log(arrayFromRangeAlt(1, 4));   // [1, 2, 3, 4]
console.log(arrayFromRangeAlt(-2, 2));  // [-2, -1, 0, 1, 2]

// ==================== End of Array From Range ====================
