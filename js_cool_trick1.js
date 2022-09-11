// Hiding object property
const x = {
  message: "hello world!",
};

Object.defineProperty(x, "secret", { enumerable: false, value: "hail hydra!" });

console.log(x);

// if you want to see the data you can just log it directly
console.log(x.secret);
