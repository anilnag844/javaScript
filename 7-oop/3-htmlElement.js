
class HtmlElement {
  constructor(type, value) {
    this.type  = type;
    this.value = value;
  }

  click()  { console.log(`${this.type} clicked`); }
  focus()  { console.log(`${this.type} focused`); }
}

class Paragraph extends HtmlElement {
  constructor(text) {
    super('paragraph', text);
  }
}

class Select extends HtmlElement {
  constructor(items = []) {
    super('select', '');
    this.items = items;
  }

  render() {
    console.log(`<select>`);
    this.items.forEach(item => console.log(`  <option>${item}</option>`));
    console.log(`</select>`);
  }
}

const p   = new Paragraph('Hello World');
const sel = new Select(['Option 1', 'Option 2', 'Option 3']);

p.focus();
p.click();
sel.render();
