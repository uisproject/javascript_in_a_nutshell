// I just found something interesting in javascript apparently if you compare 2 objects with the same content ti will return false even tho the content is same
const a = {
  b: "b",
  a: 1,
};

const b = {
  b: "b",
  a: 1,
};

// console.log(a === b); // result false

// I also try using Object.is() but the result below still false

const c = [
  {
    a: 1,
    b: "a",
  },
  {
    a: 2,
    b: "b",
  },
];

const target = {
  a: 2,
  b: "b",
};

// c.map((item) => {
//   console.log(item);
//   console.log(target);
//   const result = Object.is(item, target);
//   console.log(result);
//   console.log("----");
// });

// based on https://stackoverflow.com/users/2515275/benny-powers, he said that
// "Objects are reference types, which means the equality operators operate on a reference to the object in memory, not to its contents."
// so it makes sense why it gives false because they reference difference memory

// so the solution is to serialized the object into json stringify and compare it
// console.log(JSON.stringify(a) === JSON.stringify(b)); // this will gives true

// but the problem is the order of the content is important since it converts into string, so in that case you might need to sort the content of the object if you want to compare the content of the object with another object

const ordered = Object.keys(a)
  .sort()
  .reduce((obj, key) => {
    //   the logic is about to create a new object and assign the object based on key
    obj[key] = a[key];
    // console.log(obj);
    console.log(key);
    return obj;
  }, {});

// console.log(ordered);

// if you are confuse it will be translated like
// 1st
// obj.a = 1

// 2nd
// obj.b = 'b'

// thus  return => {a:1},{b:'b'}
