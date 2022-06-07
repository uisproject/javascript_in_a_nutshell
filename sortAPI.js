// by Yawning Yacare

const text = ["abc", "ghi", "cde", "fgh", "abb", "zza", "ffa"];
const number = [1, 3, 52, 1, 84, 6, 8, 9, 2, 4, 54, 21, 2, 3, 1, 55];

console.log(text.sort((a, b) => (a === b ? 0 : a > b ? -1 : 1)));
console.log(number.sort((a, b) => (a === b ? 0 : a > b ? -1 : 1)));
