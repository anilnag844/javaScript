// ==================== Stopwatch ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Private fields (#) are true private — inaccessible outside the class
// - duration accumulates across multiple start/stop cycles
// - Date.now() returns milliseconds; divide by 1000 for seconds
// - Guard clauses throw early if start/stop called in wrong state
// - reset() clears all state back to initial values

// -------------------- Implementation --------------------
class Stopwatch {
  #startTime = null;
  #running   = false;
  #duration  = 0;

  start() {
    if (this.#running) { throw new Error('Stopwatch is already running.'); }
    this.#running   = true;
    this.#startTime = Date.now();
  }

  stop() {
    if (!this.#running) { throw new Error('Stopwatch is not started.'); }
    this.#running  = false;
    this.#duration += (Date.now() - this.#startTime) / 1000;
  }

  reset() {
    this.#startTime = null;
    this.#running   = false;
    this.#duration  = 0;
  }

  get duration() {
    return this.#duration;
  }
}

// -------------------- Test Cases --------------------
const sw = new Stopwatch();

// Single start/stop
sw.start();
sw.stop();
console.log('Duration after first stop:', sw.duration); // ~0 seconds (near-instant)

// Accumulates across multiple cycles
sw.start();
sw.stop();
console.log('Duration after second stop (accumulated):', sw.duration);

// Reset clears everything
sw.reset();
console.log('Duration after reset:', sw.duration); // 0

// Error: start when already running
try {
  sw.start();
  sw.start(); // throws
} catch (e) {
  console.log('Error:', e.message); // 'Stopwatch is already running.'
}
sw.stop();

// Error: stop when not running
try {
  sw.stop(); // throws — already stopped
} catch (e) {
  console.log('Error:', e.message); // 'Stopwatch is not started.'
}

// Private field is not accessible outside the class
// console.log(sw.#duration); // SyntaxError — truly private

// ==================== End of Stopwatch ====================
