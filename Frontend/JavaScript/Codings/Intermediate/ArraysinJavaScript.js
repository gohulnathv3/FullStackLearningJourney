// In JavaScript, an array is a data structure that allows you to store multiple values in a single variable.
// Declaration and Initialization:
// You can declare and initialize an array using the array literal syntax [] or the Array constructor.
// Empty array
let emptyArray = [];
console.log(emptyArray);

// Array with initial values
let sampleNumebers = [1, 2, 3, 4, 5];
console.log(sampleNumebers);

// Array using the Array constructor
let fruits = new Array("apple", "banana", "orange");
console.log(fruits);

// Accessing Array Elements:

// Array elements are accessed using zero-based indices.
// You can access an element by its index using the bracket notation array[index].
let countries = ["Japan", "Canada", "America", "India", "UK"];
console.log(countries[1]); // output Canada
console.log(countries[2]); // output America

// Modifying array elements -> You can modify array elements by assigning new values to specific indices.
let numeric = [1, 2, 3, 4, 5];
numeric[2] = 10;
console.log(numeric); // Output: [1, 2, 10, 4, 5]

// Array Methods:
// JavaScript provides many built-in methods for working with arrays. Some commonly used methods include
// push: Adds one or more elements to the end of an array.
// pop: Removes the last element from an array and returns it.
// concat: Concatenates two or more arrays and returns a new array.
// slice: Extracts a section of an array and returns a new array.
// indexOf: Returns the first index at which a given element is found in the array.
// forEach: Executes a provided function once for each array element.
// map: Creates a new array with the results of calling a provided function on every element in the array.
let numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
console.log("After push", numbers);

numbers.pop(); // [1, 2, 3]
console.log("After pop", numbers);

let combined = numbers.concat([4, 5]); // [1, 2, 3, 4, 5]
console.log("After concat", combined);

let sliced = numbers.slice(1, 3); // [2, 3]
console.log("After sliced", sliced);

let index = numbers.indexOf(2); // 1
console.log("After Index", index);

numbers.forEach(function (num) {
  console.log(num); // Output: 1 2 3
});
console.log("After forEach", numbers);

let doubled = numbers.map(function (num) {
  return num * 2;
}); // [2, 4, 6]
console.log("After map", doubled);

let doubledWithArrowFunction = numbers.map((num) => num * 2); // [2, 4, 6]
console.log("After map using ArrowFunction", doubledWithArrowFunction);

// Multidimensional Arrays: JavaScript allows you to create multidimensional arrays by nesting arrays within arrays.

let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(matrix[0][1]); // Output: 2
console.log(matrix[1][1]); // Output: 4
