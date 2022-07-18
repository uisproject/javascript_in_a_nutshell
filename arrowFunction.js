const x = () => "hello world";
// console.log(x);

// adding params
const y = (a, b) => a + b;
// console.log(y(1, 2));

// adding default params
const z = (a = 1, b = 2) => a + b;
// console.log(z());

// adding rest params
const w = (...args) => args; // this will convert into array
// w(1, 2, 3, 4, 5);
// console.log(w(1, 2, 3, 4, 5));

// adding arrow function to object
const obj = () => ({ name: "John" });
// console.log(obj());

// adding arrow function to array
const arr = () => [1, 2, 3];
// console.log(arr());

// arrow function pipeline
const a = (b) => (c) => (d) => b + c + d;
// console.log(a(1)(2)(3));

const b = (a) => (b) => (c) => a + b - c;
const g = b(3);
console.log(g(4)(2));

// so the logic turns out to be like this:
// since b(3) it will pass into (a)
// and then g(4)(2) it will passes into (b) and (c)
// so to calculate it it would be : 3 + 4 - 2
