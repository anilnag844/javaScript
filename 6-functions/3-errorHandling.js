// ==================== Error Handling ====================

// -------------------- Quick Summary (For Revision) --------------------
// - throw new Error('msg') creates an Error object with a message property
// - try/catch wraps risky code; catch receives the Error object
// - finally always runs — use for cleanup (closing connections, resetting state)
// - Validate inputs at function boundaries; throw early with a clear message
// - Array.isArray() is the correct way to check for arrays (typeof returns 'object')

// -------------------- Implementation --------------------
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error('Invalid array.');
  }

  return array.reduce((accumulator, current) => {
    return accumulator + (current === searchElement ? 1 : 0);
  }, 0);
}

// -------------------- Valid call --------------------
try {
  const count = countOccurrences([1, 2, 1, 3, 1], 1);
  console.log('Count of 1:', count); // 3
} catch (e) {
  console.log('Error:', e.message);
}

// -------------------- null input → throws --------------------
try {
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log('null input →', e.message); // 'Invalid array.'
}

// -------------------- String input → throws --------------------
try {
  const count = countOccurrences('not an array', 1);
  console.log(count);
} catch (e) {
  console.log('string input →', e.message); // 'Invalid array.'
}

// -------------------- Empty array → valid, returns 0 --------------------
try {
  const count = countOccurrences([], 1);
  console.log('Empty array count:', count); // 0
} catch (e) {
  console.log('Error:', e.message);
}

// -------------------- finally block example --------------------
try {
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log('Caught:', e.message);
} finally {
  console.log('finally always runs — use for cleanup');
}

// ==================== End of Error Handling ====================
