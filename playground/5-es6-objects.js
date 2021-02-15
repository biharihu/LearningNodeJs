// Object property shorthand

const name = "Akash";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "HSR Layout",
};

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: akash = 5 } = product;

console.log(akash);
