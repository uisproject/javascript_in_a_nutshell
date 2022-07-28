// uint means “unsigned integer” while int means “signed integer”. Unsigned integers only contain positive numbers (or zero).
// Unsigned integers are used when we know that the value that we are storing will always be non-negative (zero or positive).
// there are two types of unsigned integers:
// 1. Uint8Array
// 2. Uint16Array
// 3. Uint32Array
// 4. Uint64Array
// 5. Uint8ClampedArray
// 6. Uint16ClampedArray
// 7. Uint32ClampedArray
// 8. Uint64ClampedArray

// from stackoverflow:
// Uint***Arrays construct non-typed arrays (commented by @zfor, so, for example, push would be undefined) with numbers only (still bytes). The difference is that each constructor array has different byte range in memory. Uint8Array has 1 byte only, then the limit of a number is 255. Uint16Array is 2 bytes long, then the limit is 65535. Uint32Array is 4 bytes long, so the limit is 4294967295.

// When constructing a Uint*Array you declare the array length as the first argument:
let arr = new Uint8Array(2);
console.log(arr); // this will result Uint8Array(2) [ 0, 0 ]

let arr2 = new Uint8Array([255, 256]); // let's test this with the memory exceed the limit of 255
console.log(arr2); // the result will be Uint16Array(2) [ 255, 0 ] unless you change the Uint8Array to Uint16Array, then it will print the result as Uint16Array(2) [ 255, 256 ]

// now let's talk about Uint*ClampedArray.
// Looking at the examples for Uint8ClampedArray and Uint8Array, it looks like the difference is how values are treated when assigned.

// If you are trying to set one element to a clamped array to any value outside of the range 0-255, it will simply default to 0 or 255 (depending on whether the value is smaller or larger). A normal Uint8Array array just takes the first 8 bit of the value.

let arr3 = new Uint8Array([10, -10, 10.9, 10.1, -45.5, 256]);
console.log(arr3); // Uint8Array(6) [ 10, 246, 10, 10, 211, 0 ]

let arr4 = new Uint8ClampedArray([10, -10, 10.9, 10.1, -45.5, 256]);
console.log(arr4); // Uint8ClampedArray(6) [ 10, 0, 11, 10, 0, 255 ]

// You can notice the difference of these 2 arrays.
// 1. it's working as long the value is below the memory limit
// 2. if you give minus value on uint*array it will be treated like the limit of the memory - the value, so if you give value of -10, the result would be 246, while the Uint*ClampedArray will be treated as 0.
// 3. Decimal number will be rounded with floor function for Uint*Array while the Uint*ClampedArray will be rounded with ceil function.
// 4. when the value is larger than the limit of the memory, Uint*Array will be treated as 0, while Uint*ClampedArray will be treated as the limit of the memory.
