
class Stopwatch {
  #startTime = null;
  #running   = false;
  #duration  = 0;

  start() {
    if (this.#running) throw new Error('Stopwatch is already running.');
    this.#running   = true;
    this.#startTime = Date.now();
  }

  stop() {
    if (!this.#running) throw new Error('Stopwatch is not started.');
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

const sw = new Stopwatch();
sw.start();
sw.stop();
console.log(sw.duration);
sw.reset();
console.log(sw.duration);
