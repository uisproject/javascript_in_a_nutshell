// Agenda

// at()         || string
// concat()     || array
// entries()    || array
// every()      || boolean
// filter()     || array
// find()       || any
// findIndex()  || number
// flat()       || array
// flatMap()    || array
// forEach()    || any

// Array.prototype.at()
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// so the interesting part we usually use something like colors[0] or when we get the last we would do this color[color.length-1] but this thing make things easier just simply say -1 if you want to get the last on, similar when you use char.at()
// const colors = ["red", "green", "blue"];
// console.log(colors.at(-1)); //this will get the last index

// --

// Array.prototype.concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = ["g", "h", "i"];

// const newArr = array1.concat(array2, array3);
// console.log(newArr);

// --

// Array.prototype.entries()
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// so it's like defining the array like the object, which is has key, value
// const array1 = ["a", "b", "c"];
// const iterator = array1.entries();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// so these three guys here feels like there are pointer on them, the pointer is start from zero so when you print the next().value for the first time so it will print the index 0 and when you print again it will print the next array and so on until the limit of the array itself

// you can also make this into loop like this
// for (const [index, element] of array1.entries()) {
//   console.log(index, element); // the index will act as key in this
// }

// --

// Array.prototype.every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every((currentValue) => currentValue < 35));
// so if there is one element that doesn't match the condition it will return false

// --

// Array.prototype.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// console.log(words.filter((word) => word.length < 6));
// console.log(words.filter((word) => word !== "spray"));

// --

// Array.prototype.find()
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];
// console.log(array1.find((num) => num === 12));
// console.log(array1.find((num) => num === 55));
// console.log(array1.find((num) => num < 12));

// so remember if the condition meet it will only find the first element

// --

// Array.prototype.findIndex()
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// const array1 = [5, 12, 8, 130, 44];
// console.log(array1.findIndex((num) => num === 12));
// console.log(array1.findIndex((num) => num === 55));
// console.log(array1.findIndex((num) => num < 12));

// similar to find() but instead of undefined when you meet empty element it wil return -1 and remember it's just return the index which the element met the condition, added that the first meet condition element

// --

// Array.prototype.flat()
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat()); // output 0,1,2,3,4
// // so basically this will remove the nested array or likely breakdown the array in array
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr1.flat(3)); // the parameter of flat means how deep the array you want to break out

// --

// Array.prototype.flatMap()
// The idea
// let arr = [1, 2, 3, 4];
// const n = arr.length;
// const acc = new Array(n * 2);
// for (let i = 0; i < n; i++) {
//   let x = arr[i];
//   acc[i * 2] = x;
//   acc[i * 2 + 1] = x * 2;
// }
// console.log(acc); // want to output this [1, 2, 2, 4, 3, 6, 4, 8]
// // if you compare the above and thinking why not use the regular map like below
// console.log(arr.map((x) => [x, x * 2])); // this will result [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ] ]
// // so it's not like what you want huh so the idea is using the flat to breakdown the arrays of array
// console.log(arr.flatMap((x) => [x, x * 2])); // [1, 2, 2, 4,3, 6, 4, 8]

// // so the conclusion is map is normally good when you want to manage the data without returning array like this
// console.log(arr.map((x) => x * 2)); // you don't return the array so that's the best way to pick which one is better
// // but you need to be careful that flatMap is only breaking down one depth of array

// --

// Array.prototype.forEach()
// The forEach() method executes a provided function once for each array element.
// const array1 = ["a", "b", "c"];
// array1.forEach((item, index, array) => {
//   console.log(item);
//   console.log(index);
//   console.log(array);
// });

// so unlike the other prototype, this one is a function so you can't put this inside the console.log, rather use this to do something in iteration with the element
// need to mention that this can't use asynchronously so you must remember that you can't use async technique
