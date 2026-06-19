// ==================== Custom Includes ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Implements Array.includes() manually using a for...of loop
// - for...of + early return: exits as soon as a match is found (efficient)
// - Built-in Array.includes() is preferred in real code — use custom for learning
// - === strict equality: no type coercion (5 !== '5')

// -------------------- Implementation (for...of) --------------------
function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
}

// -------------------- Test Cases --------------------
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));    // true  — found
console.log(includes(numbers, -1));   // false — not found
console.log(includes(numbers, '1'));  // false — strict equality, no coercion
console.log(includes([], 1));         // false — empty array

// Compare with built-in
console.log(numbers.includes(1));    // true  — same result
console.log(numbers.includes(-1));   // false — same result

// ==================== End of Custom Includes ====================
