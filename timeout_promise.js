// the goal is to get the new value after setTimeout is done
let x = 0; // make this to be 5

const fn = async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      x = 5;
      res();
    }, 1000);
  });
};

fn().then((res) => {
  console.log(x);
});
