// ==================== Sum of Arguments ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Rest operator (...items) collects all arguments into a real array
// - Smart overload: accepts either spread args sum(1,2,3) or an array sum([1,2,3])
// - If a single array is passed as the first argument, unwrap it first
// - reduce() with no initial value uses the first element as the accumulator
// - Guard empty input: reduce() with no initial value throws on empty arrays

// -------------------- Implementation --------------------
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = items[0]; // unwrap array argument
  }

  if (items.length === 0) {
    return 0;
  }

  return items.reduce((a, b) => a + b);
}

// -------------------- Test Cases --------------------
// Called with spread arguments
console.log(sum(1, 2, 3, 4));       // 10
console.log(sum(10, 20, 30));        // 60
console.log(sum(5));                 // 5  — single arg

// Called with an array
console.log(sum([1, 2, 3, 4]));     // 10
console.log(sum([-1, -2, 3]));      // 0

// Edge cases
console.log(sum());                  // 0  — no args
console.log(sum([]));               // 0  — empty array

// ==================== End of Sum of Arguments ====================
