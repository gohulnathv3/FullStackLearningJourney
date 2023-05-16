// Syntax concat()
// concat(value0)
// concat(value0, value1)
// concat(value0, value1, /* … ,*/ valueN)

const numbers = [1, 2, 3, 4, 5, 6, 7];
const alphabets = ["a", "b", "c", "d", "e", "f"];
const alphabetsCaps = ["A", "B", "C", "D", "E", "F"];

const alphaNumeric = numbers.concat(alphabets, alphabetsCaps);
console.log(alphaNumeric);
