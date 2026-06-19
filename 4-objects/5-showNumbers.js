// ==================== Even or Odd ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Use modulus (%) to check if a number is even or odd: n % 2 === 0 → even
// - Ternary operator gives a concise inline if/else for labelling
// - Separate the check into a helper function for reusability
// - A negative limit means the loop never runs — no output
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

console.log('--- limit: 0 ---');
showNumbers(0);

console.log('--- limit: 1 ---');
showNumbers(1);

console.log('--- limit: -5 ---');
showNumbers(-5); // 'Invalid input'

console.log('--- limit: "hello" ---');
showNumbers('hello'); // 'Invalid input'

// ==================== End of Even or Odd ====================
