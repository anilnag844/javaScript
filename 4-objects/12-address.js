
const a1 = createAddress('123 Main St', 'Austin', 78701);
console.log(a1);

const a2 = new Address('456 Oak Ave', 'Dallas', 75201);
console.log(a2);

function createAddress(street, city, zipCode) {
  return { street, city, zipCode };
}

function Address(street, city, zipCode) {
  this.street  = street;
  this.city    = city;
  this.zipCode = zipCode;
}
