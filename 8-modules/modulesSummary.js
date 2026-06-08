// -------------------- Quick Summary (For Revision) --------------------
// - Module: A file that encapsulates related code and exposes only what's needed
// - CommonJS (CJS): Node.js default → require() / module.exports
// - ES6 Modules (ESM): Browser & modern Node → import / export
// - Named export: export multiple things by name → import { name } from ...
// - Default export: one main thing per file → import anything from ...
// - Babel: Transpiles modern JS (ES6+) → older JS browsers can understand
// - Webpack: Bundles multiple module files → one optimised file for browser
// - Tree shaking: Webpack removes unused exports from the final bundle
// - Module scope: Variables in a module are private — not added to window
// - Circular dependency: A imports B, B imports A — avoid this pattern
// ----------------------------------------------------------------------


// ———————————————————————
// 1. COMMONJS MODULES (Node.js default)
// ———————————————————————
console.log('1. COMMONJS');

// circle.js
// class Circle { ... }
// module.exports = Circle;                  ← single export

// math.js — multiple exports
// function add(a, b) { return a + b; }
// function sub(a, b) { return a - b; }
// module.exports = { add, sub };

// app.js
// const Circle       = require('./circle');  ← single
// const { add, sub } = require('./math');    ← named destructure


// ———————————————————————
// 2. ES6 MODULES (ESM)
// ———————————————————————
console.log('\n2. ES6 MODULES');

// Named exports — circle.js
// export function area(r)  { return Math.PI * r ** 2; }
// export function perim(r) { return 2 * Math.PI * r; }

// Import named
// import { area, perim } from './circle.js';
// import { area as circleArea } from './circle.js';  ← alias

// Default export — one per file
// export default class Circle { ... }
// import Circle from './circle.js';                  ← any name works

// Import everything as namespace
// import * as CircleUtils from './circle.js';
// CircleUtils.area(5);


// ———————————————————————
// 3. MODULE SCOPE
// ———————————————————————
console.log('\n3. MODULE SCOPE');

// Each module has its own scope — variables are NOT global
// module A: const x = 1;   → invisible to module B
// module B: const x = 2;   → no conflict

// Only what you export is public
// Everything else is private by default — great for encapsulation


// ———————————————————————
// 4. BABEL — Transpiler
// ———————————————————————
console.log('\n4. BABEL');

// Problem: Modern JS (ES6+) not supported in all browsers
// Solution: Babel converts it to ES5 that all browsers understand

// Input (ES6+)
// const greet = (name) => `Hello ${name}`;

// Output (ES5 — Babel compiled)
// var greet = function(name) { return 'Hello ' + name; };

// Install:  npm install --save-dev @babel/core @babel/cli @babel/preset-env
// Config:   .babelrc → { "presets": ["@babel/preset-env"] }
// Run:      npx babel src --out-dir dist


// ———————————————————————
// 5. WEBPACK — Bundler
// ———————————————————————
console.log('\n5. WEBPACK');

// Problem: Browsers can't easily load 100+ module files
// Solution: Webpack bundles everything into one (or few) optimised file(s)

// What Webpack does:
// → Starts from entry point (index.js)
// → Follows all import/require paths
// → Combines into one bundle.js
// → Minifies and optimises for production

// Install: npm install --save-dev webpack webpack-cli
// Config:  webpack.config.js
//   module.exports = {
//     entry:  './src/index.js',
//     output: { filename: 'bundle.js', path: __dirname + '/dist' },
//     mode:   'production'
//   };
// Run: npx webpack

// Webpack + Babel together (most common setup):
// → Babel transpiles modern JS to ES5
// → Webpack bundles into one file for the browser


// ———————————————————————
// POPULAR INTERVIEW QUESTIONS — MODULES
// ———————————————————————

// 1. What is a JavaScript module?
// - A file that encapsulates code and exposes only what it exports
// - Prevents polluting the global scope
// - Enables reusability and separation of concerns

// 2. What is the difference between CommonJS and ES6 modules?
// - CommonJS: require() / module.exports — synchronous, Node.js default
// - ES6: import / export — synchronous static loading, static analysis, tree-shakeable (dynamic import() is async)
// - ESM is the modern standard; Node.js supports both

// 3. What is the difference between named and default exports?
// - Named: export multiple things, must import by exact name (or alias)
// - Default: one per file, import with any name you choose
// Example:
// Named:   export const PI = 3.14;       → import { PI } from './math.js'
// Default: export default class Circle   → import C from './circle.js'

// 4. What does Babel do?
// - Transpiles modern JavaScript (ES6+) to older JavaScript (ES5)
// - Ensures compatibility with older browsers
// - Works as a plugin in Webpack build pipeline

// 5. What does Webpack do?
// - Bundles multiple JS module files into one file for the browser
// - Follows the dependency graph starting from entry point
// - Supports loaders (Babel) and plugins for optimisation

// 6. What is tree shaking?
// - Webpack removes unused exports from the final bundle
// - Reduces file size → faster page loads
// - Only works with ES6 modules (static imports), not CommonJS

// 7. What is module scope?
// - Variables declared in a module are scoped to that module
// - They do NOT get attached to the global (window) object
// - Prevents naming conflicts between different files

// 8. How do you use a module in the browser?
// - Add type="module" to the script tag:
//   <script type="module" src="app.js"></script>
// - Or bundle with Webpack and load the bundle normally
