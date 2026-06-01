
const address1 = new Address('123 Main St', 'Austin', 78701);
const address2 = new Address('123 Main St', 'Austin', 78701);
const address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

function Address(street, city, zipCode) {
  this.street  = street;
  this.city    = city;
  this.zipCode = zipCode;
}

function areEqual(a1, a2) {
  return a1.street  === a2.street  &&
         a1.city    === a2.city    &&
         a1.zipCode === a2.zipCode;
}

function areSame(a1, a2) {
  return a1 === a2;
}
