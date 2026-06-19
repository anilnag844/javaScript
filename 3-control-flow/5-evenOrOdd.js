// ==================== Even or Odd ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Use modulus (%) to check if a number is even or odd: n % 2 === 0 → even
// - Ternary operator gives a concise inline if/else for labelling
// - Separate the check into a helper function for reusability
// - A negative limit means the loop condition is false from the start — no output
// - Input validation: return early for non-numbers or negative limits

// -------------------- Helper --------------------
function isEven(n) {
  return n % 2 === 0;
}

// -------------------- Implementation --------------------
function showNumbers(limit) {
  if (typeof limit !== 'number' || limit < 0) {
    console.log('Invalid input: limit must be a non-negative number');
    return;
  }

  for (let i = 0; i <= limit; i++) {
    const message = isEven(i) ? 'EVEN' : 'ODD';
    console.log(`${i} is ${message}`);
  }
}

// -------------------- Test Cases --------------------
console.log('--- limit: 10 ---');
showNumbers(10);

console.log('--- limit: 0 (single iteration) ---');
showNumbers(0);

console.log('--- limit: 1 (two iterations) ---');
showNumbers(1);

console.log('--- limit: -5 (negative — invalid) ---');
showNumbers(-5);

console.log('--- limit: "hello" (non-number — invalid) ---');
showNumbers('hello');

// ==================== End of Even or Odd ====================