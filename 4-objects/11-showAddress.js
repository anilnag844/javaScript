
const address = {
  street:  '123 Main St',
  city:    'Austin',
  zipCode: 78701
};

showAddress(address);

function showAddress(address) {
  for (let key in address)
    console.log(key, address[key]);
}
