// the logic of using debounce is to clear the timer and set it again
// when the function is called again
// this is useful for when you want to throttle a function
// but you don't want to call it too often
// for example, if you want to call sayHi() every second
// but you don't want to call it more than once every second

// const debounce = (fn, delay) => {
//   let timer;
//   return (() => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(), delay);
//   })();
// };

// i think this is the best way to do it and more readable
const debounce2 = (fn, delay) => {
  let timer;
  clearTimeout(timer);
  timer = setTimeout(() => fn(), delay);
};

const sayHi = () => {
  console.log("hi");
};

// debounce(sayHi, 1000);
debounce2(sayHi, 1000);
