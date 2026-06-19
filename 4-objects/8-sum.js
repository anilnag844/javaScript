// ==================== Sum of Multiples of 3 and 5 ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Sum all numbers from 0 to limit that are divisible by 3 OR 5
// - Use || (OR) so numbers divisible by both (e.g. 15) are counted only once
// - Rename inner variable to avoid shadowing the function name
// - Alternative: filter + reduce is more functional and expressive

// -------------------- Implementation (for loop) --------------------
function sum(limit) {
  let total = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  return total;
}

// -------------------- Alternative (filter + reduce) --------------------
const sumMultiples = limit =>
  [...Array(limit + 1).keys()]
    .filter(i => i % 3 === 0 || i % 5 === 0)
    .reduce((acc, i) => acc + i, 0);

// -------------------- Test Cases --------------------
console.log(sum(0));  // 0  — no multiples
console.log(sum(3));  // 3  — only 3
console.log(sum(5));  // 8  — 3 + 5
console.log(sum(10)); // 33 — 3+5+6+9+10
console.log(sum(15)); // 60 — 15 counted once via ||

console.log(sumMultiples(0));  // 0
console.log(sumMultiples(3));  // 3
console.log(sumMultiples(5));  // 8
console.log(sumMultiples(10)); // 33
console.log(sumMultiples(15)); // 60

// ==================== End of Sum of Multiples ====================
