// so i want to see about the order of the execution between timeout vs promise

console.log("1");

// timeout is set behind
setTimeout(() => {
  console.log("2");
}, [0]);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

// result 1,4,3,2
