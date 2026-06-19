// ==================== Move Element ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Moves an element at 'index' by 'offset' positions (positive = right, negative = left)
// - Returns a new array — does not mutate the original (spread to clone first)
// - splice(index, 1) removes the element; splice(position, 0, element) inserts it
// - Returns null on invalid offset to allow callers to check for failure

// -------------------- Implementation --------------------
function move(array, index, offset) {
  const position = index + offset;

  if (position < 0 || position >= array.length) {
    console.error('Invalid offset.');
    return null;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

// -------------------- Test Cases --------------------
const numbers = [1, 2, 3, 4];

console.log(move(numbers, 1, 1));   // [1, 3, 2, 4] — move 2 one step right
console.log(move(numbers, 1, -1));  // [2, 1, 3, 4] — move 2 one step left
console.log(move(numbers, 0, 3));   // [2, 3, 4, 1] — move 1 to the end
console.log(move(numbers, 3, -3));  // [4, 1, 2, 3] — move 4 to the front

// Edge cases
console.log(move(numbers, 1, 10));  // null — offset too large
console.log(move(numbers, 1, -5));  // null — offset too small
console.log(numbers);               // [1, 2, 3, 4] — original unchanged

// ==================== End of Move Element ====================
