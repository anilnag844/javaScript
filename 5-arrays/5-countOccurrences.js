// ==================== Count Occurrences ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Counts how many times a value appears in an array
// - reduce() approach: accumulator starts at 0, adds 1 on each match
// - filter() alternative: filter matches then check length
// - for...of approach: manual loop, easier to read for beginners

// -------------------- Implementation (reduce) --------------------
function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    return accumulator + (current === searchElement ? 1 : 0);
  }, 0);
}

// -------------------- Alternative (for...of) --------------------
function countOccurrencesLoop(array, searchElement) {
  let count = 0;
  for (let element of array) {
    if (element === searchElement) {
      count++;
    }
  }
  return count;
}

// -------------------- Alternative (filter) --------------------
const countOccurrencesFilter = (array, searchElement) =>
  array.filter(el => el === searchElement).length;

// -------------------- Test Cases --------------------
const numbers = [1, 2, 3, 1, 4, 1];

console.log(countOccurrences(numbers, 1));       // 3 — appears 3 times
console.log(countOccurrences(numbers, 2));       // 1 — appears once
console.log(countOccurrences(numbers, 9));       // 0 — not found
console.log(countOccurrences([], 1));            // 0 — empty array

console.log(countOccurrencesLoop(numbers, 1));   // 3
console.log(countOccurrencesFilter(numbers, 1)); // 3

// ==================== End of Count Occurrences ====================
