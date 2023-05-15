function isEven(element) {
  //   if (element % 2 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return element % 2 === 0;
}
console.log(isEven(3));

// looping Array
var final = [2, 4, 6, 8].every(isEven);
console.log(final);

// how the callbacks
var final = [2, 4, 7, 8].every((element) => element % 2 === 0); // if we don't have return type, have to use ()

console.log(final);
