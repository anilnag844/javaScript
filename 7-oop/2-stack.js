// ==================== Stack (WeakMap Private Pattern) ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Stack: LIFO (Last In, First Out) data structure
// - WeakMap stores private data keyed by 'this' — not accessible from outside
// - WeakMap vs private field (#): WeakMap is the older pattern, still asked in interviews
// - push(): add to top | pop(): remove from top | peek(): view top without removing
// - count getter returns size without exposing the internal array
// - Guard clauses throw on pop/peek when stack is empty

// -------------------- Implementation --------------------
const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(item) {
    _items.get(this).push(item);
  }

  pop() {
    const items = _items.get(this);
    if (items.length === 0) { throw new Error('Stack is empty.'); }
    return items.pop();
  }

  peek() {
    const items = _items.get(this);
    if (items.length === 0) { throw new Error('Stack is empty.'); }
    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}

// -------------------- Test Cases --------------------
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log('peek:', stack.peek());  // 30 — top item, not removed
console.log('count:', stack.count);  // 3
console.log('pop:', stack.pop());    // 30 — removes top
console.log('count after pop:', stack.count); // 2
console.log('pop:', stack.pop());    // 20
console.log('pop:', stack.pop());    // 10

// Error: pop on empty stack
try {
  stack.pop();
} catch (e) {
  console.log('Error:', e.message); // 'Stack is empty.'
}

// Error: peek on empty stack
try {
  stack.peek();
} catch (e) {
  console.log('Error:', e.message); // 'Stack is empty.'
}

// Private items not accessible from outside
console.log('_items accessible?', _items.get(stack)); // [] — only via WeakMap key
// With # private fields this would be a SyntaxError

// ==================== End of Stack ====================
