// ==================== Star Pattern ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Nested loops: outer loop controls rows, inner loop builds each row's pattern
// - String.repeat(n) is a cleaner alternative to building strings in a loop
// - Reverse triangle: count rows down instead of up
// - Input validation: guard against non-numbers and negative values

// -------------------- Implementation (nested loop) --------------------
function showStars(rows) {
  if (typeof rows !== 'number' || rows < 0) {
    console.log('Invalid input: rows must be a non-negative number');
    return;
  }

  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++) {
      pattern += '*';
    }
    console.log(pattern);
  }
}

// -------------------- Alternative (String.repeat) --------------------
function showStarsRepeat(rows) {
  for (let row = 1; row <= rows; row++) {
    console.log('*'.repeat(row));
  }
}

// -------------------- Reverse Triangle --------------------
function showStarsReverse(rows) {
  for (let row = rows; row >= 1; row--) {
    console.log('*'.repeat(row));
  }
}

// -------------------- Test Cases --------------------
console.log('--- showStars(1) ---');
showStars(1);
// *

console.log('--- showStars(2) ---');
showStars(2);
// *
// **

console.log('--- showStars(5) ---');
showStars(5);
// *
// **
// ***
// ****
// *****

console.log('--- showStars(0) ---');
showStars(0); // no output

console.log('--- showStars(-3) ---');
showStars(-3); // 'Invalid input: rows must be a non-negative number'

console.log('--- showStarsRepeat(5) ---');
showStarsRepeat(5);

console.log('--- showStarsReverse(5) ---');
showStarsReverse(5);
// *****
// ****
// ***
// **
// *

// ==================== End of Star Pattern ====================