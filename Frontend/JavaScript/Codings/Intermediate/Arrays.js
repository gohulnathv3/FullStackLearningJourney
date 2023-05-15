//Arrays - visit:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var countries = ["Japan", "Canada", "America", "India", "UK"];
var primeMinister = new Array(
  "Narendra Modi - India",
  "Joe Biden - USA",
  "Justin Trudo - Canada",
  "Jee Ping Ching - North Korea"
);

console.log(countries);
// to remove last element use pop
countries.pop();
console.log("After pop operation\n\n", countries);
// to add new value to first element use pop
countries.unshift("New Value");
console.log("After Unshift operation\n\n", countries);
// to remove first element use pop
countries.shift();
// to add elements in the array
countries.push("Russia", "London");
console.log(countries);
console.log("After Unshift operation\n\n", countries);

// to find out the array elements, it's also helpful to loop the array
console.log("Length of the Array", countries.length);
console.log(primeMinister);

// declare various data types
var user = ["Gohul", "gohul.va@gmail.com", 9655666545, "M"];
console.log("Printing user", user);
// to print the array index
console.log(user.indexOf("M"));
// to check if the element is presented in the array
console.log("Element value", user.indexOf("unknown")); // output -1
// if the result is in -1, then we can tell the user saying that "Data not found"

// to convert it to Array
console.log(Array.from("Gohul"));
