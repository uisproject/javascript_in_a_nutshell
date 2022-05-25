// Agenda

// from()       || array
// includes()   || boolean
// indexOf()    || number
// isArray()    || boolean
// join()       || string
// map()        || array
// of()         || array
// pop()        || string
// push()       || number
// reduce()     || any

// --
// Array.from()
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
// console.log(Array.from("foo"));
// console.log(Array.from([1, 2, 3], (x) => x + x));
// so i just know this and this is awesome, this takes 2 params : the array,string, set, map, or even nodeList in HTML and second is the map fn remember that we can use any logic within the map function so basically it's similar to map fn, but it's really good when you want to separate the string into arrays, because you can't do that with map

// example Array.from() for taking nodeList
// Create an array based on a property of DOM Elements
// const images = document.getElementsByTagName('img');
// const sources = Array.from(images, image => image.src);
// const insecureSources = sources.filter(link => link.startsWith('http://'));

// --
// Array.prototype.includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// const array1 = [1, 2, 3];
// console.log(array1.includes(1));
// console.log(array1.includes(5));
// // so it's like every() but the differences is every can have condition wether every array meets the condition or not while the includes it will check wether the value matches in the array, if yes it will return true, otherwise false
// // but you also can specify from what index, i mean like if you specify 3,2 it means it will read from index 2 until end and check wether there is value of 3 or not
// console.log(array1.includes(1, 0));
// console.log(array1.includes(2, 2));

// --
// Array.prototype.indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log(beasts.indexOf("Bison"));
// so this will search the element of the array and will return the index of the element if found, if not it will return -1, i think this can be used to find the element of the array but the problem is it has strict case, maybe you would find includes(), find(), some() or every() might be more useful but if you want to target the index of element this one is awesome

// --

// Array.isArray()
// The Array.isArray() method determines whether the passed value is an Array.
// console.log(Array.isArray([1, 2, 3])); // true
// Array.isArray({ foo: 123 }); // false
// Array.isArray("foobar"); // false
// Array.isArray(undefined); // false

// --

// Array.prototype.join()
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join("-"));
// interestingly this will convert the array into string but separated by something in default if you don't put anything for the separator it will comma, but you can put any kind you like, just remember if there is no element in array it will return empty string

// --

// Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// map is letting us to modify the each elements in array

// --

// Array.of()
// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
// console.log(Array.of(1, 2, 3, 4, 5));

// --

// Array.prototype.pop()
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// console.log(plants.pop());
// The removed element from the array; undefined if the array is empty.

// --
// Array.prototype.push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// const animals = ["pigs", "goats", "sheep"];
// const count = animals.push("cows");
// console.log(count);

// --
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// so in contrary it's used for calculating the value
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// console.log(
//   array1.reduce(
//     (totalValue, currentValue, curIdx, arr) => totalValue + currentValue,
//     0
//   )
// );
// // as you can see that there are 2 important values totalValue and currentValue, totalValues is telling the value on the initial value, you can see there is 0 after the function, that indicates the totalValue if the totalValue increased or decreased that will be calculated while current value is the current element in the array
// const data = [
//   {
//     name: "kyle",
//     age: 26,
//   },
//   {
//     name: "Son",
//     age: 26,
//   },
//   {
//     name: "Job",
//     age: 31,
//   },
// ]; // let's say you want to organize this to tell that age of 31 there are ... like that
// const dataResult = data.reduce((groupedPpl, person) => {
//   const age = person.age;
//   if (groupedPpl[age] == null) groupedPpl[age] = [];
//   groupedPpl[age].push(person);
//   return groupedPpl;
// }, {});

// console.log(dataResult);
// this is the example of using reduce with obj
// in this example you can imagine the groupedPpl as an empty obj, as the person is being iterative it is try to push into the object if there is no duplication in age

// another interesting thing about reduce is that if you don't put any initial value it will take the first element as the first initial value but it's not recommended as if the array is empty there is no init value thus it will become  error
