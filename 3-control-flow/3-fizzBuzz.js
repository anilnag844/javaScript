// ==================== FizzBuzz ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Classic control flow exercise using if/else if chains
// - Order matters: check divisible by BOTH (15) before checking 3 or 5 alone
// - Input validation: check type first and return early to avoid bad input
// - Returning 'Not a number' is more descriptive than NaN for invalid input
// - A for loop over a range exercises all four branches together

// -------------------- Implementation --------------------
function fizzBuzz(input) {
  if (typeof input !== 'number') {
    return 'Not a number';
  }

  if (input % 3 === 0 && input % 5 === 0) {
    return 'FizzBuzz';
  }

  if (input % 3 === 0) {
    return 'Fizz';
  }

  if (input % 5 === 0) {
    return 'Buzz';
  }

  return input;
}

// -------------------- Test Cases (all four branches) --------------------
console.log(fizzBuzz(15));      // 'FizzBuzz' — divisible by both 3 and 5
console.log(fizzBuzz(9));       // 'Fizz'     — divisible by 3 only
console.log(fizzBuzz(10));      // 'Buzz'     — divisible by 5 only
console.log(fizzBuzz(17));      // 17         — not divisible by 3 or 5
console.log(fizzBuzz('hello')); // 'Not a number' — invalid input

// -------------------- Range: 1 to 20 --------------------
for (let i = 1; i <= 20; i++) {
  console.log(fizzBuzz(i));
}

// ==================== End of FizzBuzz ====================