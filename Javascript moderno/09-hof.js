const array = [
  {name: "iPhone", price: 5000, quantity: 2},
  {name: "MacBooPro", price: 20000, quantity: 1},
  {name: "Magic Mouse", price: 1000, quantity: 5},
];

// find
const find = array.find((product) => {
  return product.name === "iPhone"
});

// findIndex
const findIndex = array.findIndex((product) => {
  return product.name === "MacBooPro"
});

// some
const some = array.some((product) => {
  return product.name === "MacBooPro"
});

// every
const every = array.every((product) => {
  return product.price >= 1000
});

// map
const map = array.map((product) => {
  return {
    ...product,
    subtotal : product.quantity * product.price
  }
});

// filter
const filter = array.filter((product) => {
  return product.price > 1000
});

// reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity)
}, 0)

console.log(reduce); 