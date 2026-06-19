// ==================== HTML Element (Inheritance) ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Base class: defines shared properties and methods for all HTML elements
// - extends: child class inherits all methods from the parent
// - super(args): must be called in child constructor before using 'this'
// - Method override: child can add its own methods (render) without touching parent
// - Inherited methods: subclasses get click() and focus() for free
// - instanceof: verifies the inheritance chain

// -------------------- Base Class --------------------
class HtmlElement {
  constructor(type, value) {
    this.type  = type;
    this.value = value;
  }

  click()  { console.log(`${this.type} clicked`); }
  focus()  { console.log(`${this.type} focused`); }
  toString() { return `<${this.type}>${this.value}</${this.type}>`; }
}

// -------------------- Subclass: Paragraph --------------------
class Paragraph extends HtmlElement {
  constructor(text) {
    super('paragraph', text); // sets this.type = 'paragraph', this.value = text
  }
}

// -------------------- Subclass: Select --------------------
class Select extends HtmlElement {
  constructor(items = []) {
    super('select', '');
    this.items = items;
  }

  render() {
    console.log('<select>');
    this.items.forEach(item => console.log(`  <option>${item}</option>`));
    console.log('</select>');
  }
}

// -------------------- Test Cases --------------------
const p   = new Paragraph('Hello World');
const sel = new Select(['Option 1', 'Option 2', 'Option 3']);

// Inherited methods work on both subclasses
p.focus();    // paragraph focused
p.click();    // paragraph clicked
console.log(p.toString()); // <paragraph>Hello World</paragraph>

sel.click();  // select clicked  — inherited from HtmlElement
sel.focus();  // select focused  — inherited from HtmlElement
sel.render(); // own method

// instanceof verifies the inheritance chain
console.log(p instanceof Paragraph);   // true
console.log(p instanceof HtmlElement); // true — inherited
console.log(sel instanceof Select);    // true
console.log(sel instanceof HtmlElement); // true

// ==================== End of HTML Element ====================
