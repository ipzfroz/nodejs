const lsh = require('lodash');

let arr1 = ['a', 'b', 'c', 'd']; // test array
console.log(arr1);
let new_arr1 = lsh.chunk(arr1, 2); // Creates an array of elements split into groups the length of second parameter.
console.log(new_arr1);

console.log('---');

let arr2 = ['a']; // test array
console.log(arr2);
let new_arr2 = lsh.concat(arr2, 'b', ['c']);  // Creates a new array concatenating array with any additional arrays and/or values.
console.log(new_arr2);

console.log('---');

let arr3 = ['a', 'b', 'c', 'd']; // test array
console.log(arr3);
let new_arr3 = lsh.drop(arr3, 2); // Creates a slice of array with n elements dropped from the beginning.
console.log(new_arr3);

console.log('---');

let arr4 = ['a', 'b', 'c', 'd']; // test array
console.log(arr4);
let new_arr4 = lsh.dropRight(arr4, 2); // Creates a slice of array with n elements dropped from the end.
console.log(new_arr4);

console.log('---');

let arr5 = ['a', 'b', 'c', 'd']; // test array
console.log(arr5);
let new_arr5 = lsh.fill(arr5, '*', 1,3); // Fills elements of array with value from start up to, but not including, end.
console.log(new_arr5);