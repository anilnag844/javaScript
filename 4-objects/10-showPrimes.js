// ==================== Prime Numbers ====================

// -------------------- Quick Summary (For Revision) --------------------
// - A prime number is divisible only by 1 and itself (must be > 1)
// - 1 is NOT a prime by definition — guard against it explicitly
// - Optimisation: only loop up to Math.sqrt(number) — a factor larger than
//   the square root always has a corresponding smaller factor already checked
// - getPrimes() returns an array using Array.from + filter for reusability

// -------------------- isPrime --------------------
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let factor = 2; factor <= Math.sqrt(number); factor++) {
    if (number % factor === 0) {
      return false;
    }
  }

  return true;
}

// -------------------- showPrimes (logs to console) --------------------
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

// -------------------- getPrimes (returns array) --------------------
function getPrimes(limit) {
  return Array.from({ length: limit - 1 }, (_, i) => i + 2).filter(isPrime);
}

// -------------------- isPrime: direct tests --------------------
console.log('--- isPrime checks ---');
console.log(isPrime(1));   // false — not prime by definition
console.log(isPrime(2));   // true  — smallest prime
console.log(isPrime(17));  // true
console.log(isPrime(25));  // false — 5 × 5

// -------------------- showPrimes: range tests --------------------
console.log('--- showPrimes(1) ---');
showPrimes(1); // no output

console.log('--- showPrimes(10) ---');
showPrimes(10); // 2 3 5 7

console.log('--- showPrimes(20) ---');
showPrimes(20); // 2 3 5 7 11 13 17 19

// -------------------- getPrimes: array variant --------------------
console.log('--- getPrimes(20) ---');
console.log(getPrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

// ==================== End of Prime Numbers ====================
