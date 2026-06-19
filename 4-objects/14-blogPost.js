// ==================== Blog Post Object ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Objects can hold mixed types: strings, numbers, booleans, arrays, nested objects
// - Arrays of objects (comments) allow multiple items of the same shape
// - Access nested data with dot notation: post.comments[0].author
// - Use Array methods (map, filter, forEach) to work with nested arrays

// -------------------- Blog Post Data --------------------
const post = {
  title:    'JavaScript Objects',
  body:     'Objects are key-value pairs that store data and behavior.',
  author:   'Mosh',
  views:    10,
  comments: [
    { author: 'Alice', body: 'Great post!'   },
    { author: 'Bob',   body: 'Very helpful.' }
  ],
  isLive: true
};

console.log('Full post:', post);

// -------------------- Accessing Nested Data --------------------
console.log('Title:', post.title);
console.log('First comment author:', post.comments[0].author);
console.log('Comment count:', post.comments.length);

// -------------------- Working with Comments Array --------------------
console.log('All comment authors:');
post.comments.forEach(c => console.log(`- ${c.author}: ${c.body}`));

// Add a new comment
post.comments.push({ author: 'Charlie', body: 'Thanks for sharing!' });
console.log('Comments after push:', post.comments.length); // 3

// Increment views
post.views++;
console.log('Views after increment:', post.views); // 11

// ==================== End of Blog Post Object ====================
