// Intl Format Number
const number = 123456;
const f = new Intl.NumberFormat("id", {
  currency: "IDR",
  style: "currency",
});

console.log(f.format(number));
