// -------------------- Quick Summary (For Revision) --------------------
// - if/else: Run code based on conditions (login, access, pricing rules)
// - switch: Multiple-choice logic (weekday tasks, grade system)
// - for loop: Repeat with counters (notifications, attempts)
// - while: Repeat until condition fails (timer countdown)
// - do...while: Runs at least once (retry connection)
// - Infinite loop + break: Search until found (finding item)
// - for...in: Loop through object properties (user profile)
// - for...of: Loop through iterable values (cart items, playlist)
// - forEach: Array processing (price list, logs)
// - break: Stop loop early (STOP command)
// - continue: Skip items (OUT-of-stock)
// - Labeled break: Exit nested loops (seat checker)
// - Early return: Clean logic exits (password check)
// - Guard clause: Prevent errors (division by zero)
// - entries(): Loop index + value (playlist with numbering)
// ----------------------------------------------------------------------

// ———————————————————————
// 1. CONDITIONAL STATEMENTS
// ———————————————————————
console.log('1. IF / ELSE — Real Life Examples');

// Simple if → Check login
let isLoggedIn = true;
if (isLoggedIn) {
  console.log('Welcome back!');
}

// if...else → Check bank balance
let balance = 120;
if (balance >= 100) {
  console.log('Purchase successful!');
} else {
  console.log('Insufficient funds');
}

// if...else if → Student grade
let score = 82;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');      // ← runs
} else if (score >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: F');
}

// Ternary → Check driving eligibility
let age = 17;
let canDrive = age >= 18 ? 'Can drive' : 'Cannot drive';
console.log(canDrive);


// ———————————————————————
// 2. SWITCH STATEMENT
// ———————————————————————
console.log('\n2. SWITCH — Real Life Examples');

// Weekday reminder
let day = 6;
switch (day) {
  case 1: console.log('Gym Day'); break;
  case 2: console.log('Study Day'); break;
  case 3: console.log('Grocery Day'); break;
  case 4: console.log('Work from Home'); break;
  case 5: console.log('Movie Night'); break;
  default: console.log(`Relax, it’s weekend!`); // ← runs
}

// Grade system (Fall-through)
let grade = 'C';
switch (grade) {
  case 'A':
  case 'B':
  case 'C': console.log('You passed!'); break; // ← runs
  default: console.log('Try again.');
}


// ———————————————————————
// 3. LOOPS
// ———————————————————————
console.log('\n3. LOOPS — Real Life Examples');

// 3.1 for loop → Send 3 notifications
console.log('→ for');
for (let i = 1; i <= 3; i++) {
  console.log(`Notification #${i} sent`);
}

// 3.2 while loop → Countdown timer
console.log('→ while');
let seconds = 3;
while (seconds > 0) {
  console.log(`Timer: ${seconds} sec`);
  seconds--;
}

// 3.3 do...while → Ask user at least once
console.log('→ do...while');
let attempts = 0;
do {
  console.log('Trying to connect to server…');
  attempts++;
} while (attempts < 3);

// 3.4 Infinite loop with break → Searching for item
console.log('→ Infinite + break');
let products = ['pen', 'mouse', 'book', 'laptop'];
let index = 0;
while (true) {
  if (products[index] === 'laptop') {
    console.log('Laptop found!');
    break; // stop
  }
  index++;
}


// ———————————————————————
// 4. ITERATION OVER DATA
// ———————————————————————
console.log('\n4. ITERATION — Real Life Examples');

// 4.1 for...in → Loop user profile fields
console.log('→ for...in (user profile)');
let user = { name: 'Ali', age: 25, role: 'admin' };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// 4.2 for...of → Loop cart items
console.log('→ for...of (shopping cart)');
let cart = ['Shoes', 'Watch', 'Cap'];
for (let item of cart) {
  console.log(`Added to order: ${item}`);
}

// 4.3 forEach → Price list
console.log('→ forEach (price list)');
let prices = [100, 250, 400];
prices.forEach((price, index) => {
  console.log(`Item ${index + 1} price: $${price}`);
});


// ———————————————————————
// 5. LOOP CONTROL — break & continue
// ———————————————————————
console.log('\n5. break & continue — Real Life Examples');

// Skip out-of-stock items (continue)
// Stop scanning when item is "STOP" (break)
let items = ['apple', 'banana', 'OUT', 'orange', 'STOP', 'grapes'];

for (let item of items) {
  if (item === 'OUT') continue;      // skip out-of-stock
  if (item === 'STOP') break;        // stop scanning
  console.log(`Processing: ${item}`);
}

// Labeled break → Exit nested search
console.log('→ labeled break (seat checker)');
outer:
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`Checking seat ${row}-${col}`);
    if (row === 2 && col === 2) {
      console.log('Seat reserved!');
      break outer; // exit both loops
    }
  }
}


// ———————————————————————
// 6. BONUS PATTERNS — Real Life
// ———————————————————————
console.log('\n6. BONUS');

// Early return → Validate password
function validatePassword(pass) {
  if (!pass) return 'Password missing';
  if (pass.length < 6) return 'Too short';
  return 'Valid password';
}
console.log(validatePassword('12345'));

// Guard clause → Safe division
function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by 0';
  }
  return a / b;
}
console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // 'Cannot divide by 0'

// Nullish coalescing (??) → User settings with defaults
let userTheme = null;
let theme = userTheme ?? 'dark';
console.log(`Theme: ${theme}`); // 'dark' — null triggers default

// Optional chaining (?.) → Safe nested access
let loggedInUser = null;
console.log(loggedInUser?.profile?.name ?? 'Guest'); // 'Guest' — no TypeError

// Loop with index → Playlist
let playlist = ['Song A', 'Song B', 'Song C'];
for (let [i, song] of playlist.entries()) {
  console.log(`${i + 1}. ${song}`);
}