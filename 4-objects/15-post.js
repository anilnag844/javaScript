// ==================== Post Constructor Function ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Constructor functions create objects of the same shape repeatedly
// - PascalCase naming signals it should be used with 'new'
// - Default values (views: 0, isLive: false) set consistent initial state
// - 'new' creates an empty {}, binds 'this', and returns the object
// - Use methods on the instance to update state rather than direct mutation

// -------------------- Constructor --------------------
function Post(title, body, author) {
  this.title    = title;
  this.body     = body;
  this.author   = author;
  this.views    = 0;       // default: no views yet
  this.comments = [];      // default: no comments yet
  this.isLive   = false;   // default: draft, not published
}

// -------------------- Test Cases --------------------
const post1 = new Post('JavaScript Basics', 'Learn JS fundamentals.', 'Mosh');
console.log('New post (draft):', post1);

// Simulate publishing
post1.isLive = true;
post1.views  = 42;
post1.comments.push({ author: 'Alice', body: 'Great intro!' });
console.log('Published post:', post1);

// Create a second post — independent object
const post2 = new Post('Node.js Intro', 'Server-side JavaScript.', 'Anil');
console.log('Second post views:', post2.views);  // 0 — independent default

// instanceof check
console.log(post1 instanceof Post); // true
console.log(post2 instanceof Post); // true

// ==================== End of Post Constructor Function ====================
