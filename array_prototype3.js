// Agenda

// reduceRight()        || any
// reverse()            || array
// shift()              || any
// slice()              || array
// some()               || boolean
// sort()               || array
// splice()             || array
// toString()           || string
// unshift()            || number

// --

// Array.prototype.reduceRight()
// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// const array0 = [11, 22, 33];
// const result = array0.reduceRight((total, value) => total - value);
// console.log(result);
// // it's just the same like regular reduce but the difference is it's read on the right side, buy you can also put the init value like the regular reducer does but for the sake of the example i didn't put that

// // let's try another example you want to flatten the array
// const array1 = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const result2 = array1
//   .reduceRight((total, value) => total.concat(value))
//   .sort();

// console.log(result2);

// --

// Array.prototype.reverse()
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// const array1 = ["one", "two", "three"];
// const array2 = [5, 1, 3, 2, 5, 7];
// console.log(array2.reverse());
// yeah it's basically just reverse the array but it doesn't mean to sort the number array

// --

// Array.prototype.shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// const array1 = [1, 2, 3];
// console.log(array1.shift());
// console.log(array1);

// --

// Array.prototype.slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(2)); // start from index 2 to finish
// console.log(animals.slice(2, 4)); //start from index 2 until 3 not 4
// console.log(animals.slice(-2)); // this will read from the last 2 elements in array
// console.log(animals.slice(2, -1)); // this will read from index 2 until the first index from right but the previous one

// --

// Array.prototype.some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// const array = [5, 5, 3, 5, 5];
// console.log(array.some((element) => element === 5));

// so it's like every() but instead of false when only passed one, some() will return true if the condition met even it's only one

// --

// Array.prototype.sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
// const months = ["March", "Jan", "Feb", "Dec"];
// const array1 = [1, 30, 4, 21, 100000];
// const array2 = [
//   {
//     x: "abc",
//     age: 21,
//   },
//   {
//     x: "def",
//     age: 55,
//   },
// ];

// // console.log(array1.sort());
// console.log(array1.sort((a, b) => a - b)); //asc
// console.log(array1.sort((a, b) => b - a)); //desc
// console.log(array2.sort((a, b) => b.age - a.age)); // desc age

// --

// Array.prototype.splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
// const months = ["Jan", "March", "April", "June"];

// console.log(months.splice(1, 0, "Feb")); // since delete count is 0 it will add at index 1 and move the previous element at index 1 to 2
// console.log(months);
// console.log(months.splice(-1, 1, "May")); // delete count is 1 so it will replace the last index to 'may'
// console.log(months);
// this return the deleted element in array

// --

// Array.prototype.toString()
// The toString() method returns a string representing the specified array and its elements.
// const array1 = [1, 2, "a", "1a"];
// console.log(array1.toString());
// this will convert the array into string separated by comma like join() but this only give comma can't be modified like join()

// --

// Array.prototype.unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// const array1 = [1, 2, 3];
// console.log(array1.push(4, 5));
// console.log(array1);
// interestingly that this is like push() but push will add elements into array from the last but unshift() is adding elements from first or 0 index

// --

// Array.prototype.values()
// The values() method returns a new array iterator object that contains the values for each index in the array.

const array1 = ["a", "b", "c"];
for (const x of array1.values()) {
  console.log(x);
}

// haiyaaa this only duplicate the array maybe this will be useful for the concept of un-mutable variable
