// ==================== Calculate Grade ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Grade scale: 0-59: F | 60-69: D | 70-79: C | 80-89: B | 90-100: A
// - Separation of concerns: calculateAverage handles math, calculateGrade handles logic
// - Early return pattern: each if returns immediately, no else needed
// - Guard against empty array: division by zero returns NaN
// - Alternative: use reduce() instead of for...of for calculating average

// -------------------- Helper: Calculate Average --------------------
function calculateAverage(marks) {
  if (!marks || marks.length === 0) {
    return 0;
  }
  return marks.reduce((acc, val) => acc + val, 0) / marks.length;
}

// -------------------- Implementation --------------------
function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) { return 'F'; }
  if (average < 70) { return 'D'; }
  if (average < 80) { return 'C'; }
  if (average < 90) { return 'B'; }
  return 'A';
}

// -------------------- Test Cases (all grade boundaries) --------------------
console.log(calculateGrade([30, 40, 50]));        // 'F' — average: 40
console.log(calculateGrade([60, 65, 64]));        // 'D' — average: 63
console.log(calculateGrade([70, 75, 74]));        // 'C' — average: 73
console.log(calculateGrade([80, 80, 50]));        // 'C' — average: 70
console.log(calculateGrade([80, 85, 88]));        // 'B' — average: 84.3
console.log(calculateGrade([90, 95, 100]));       // 'A' — average: 95

// Edge cases
console.log(calculateGrade([]));                  // 'F' — empty array, average: 0
console.log(calculateGrade([100]));               // 'A' — single element

// ==================== End of Calculate Grade ====================