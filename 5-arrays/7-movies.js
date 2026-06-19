// ==================== Movies Pipeline ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Method chaining: filter → sort → reverse → map in one pipeline
// - filter(): keep only movies from 2018 with rating >= 4
// - sort((a,b) => a.rating - b.rating): ascending by rating
// - reverse(): flip to descending (highest rated first)
// - map(m => m.title): extract just the titles into a new array
// - Each method returns a new array — original movies is never mutated

// -------------------- Data --------------------
const movies = [
  { title: 'Avengers: Infinity War', year: 2018, rating: 4.7 },
  { title: 'Black Panther',          year: 2018, rating: 4.5 },
  { title: 'Venom',                  year: 2018, rating: 3.2 },
  { title: 'Incredibles 2',          year: 2018, rating: 4.0 },
  { title: 'Dunkirk',                year: 2017, rating: 4.5 },
  { title: 'Get Out',                year: 2017, rating: 4.3 },
];

// -------------------- Pipeline --------------------
const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating) // ascending
  .reverse()                            // descending (highest first)
  .map(m => m.title);

console.log('Top 2018 movies (by rating):', titles);
// ['Avengers: Infinity War', 'Black Panther', 'Incredibles 2']

// -------------------- Step-by-step breakdown --------------------
const filtered  = movies.filter(m => m.year === 2018 && m.rating >= 4);
console.log('Filtered:', filtered.map(m => m.title));
// ['Avengers: Infinity War', 'Black Panther', 'Incredibles 2']

const sorted = [...filtered].sort((a, b) => a.rating - b.rating);
console.log('Sorted asc:', sorted.map(m => m.title));

const topRated = [...sorted].reverse();
console.log('Sorted desc:', topRated.map(m => m.title));

// Original unchanged
console.log('Original count:', movies.length); // 6

// ==================== End of Movies Pipeline ====================
