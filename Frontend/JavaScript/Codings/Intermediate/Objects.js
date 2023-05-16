var user = {
  firstName: "Gohul",
  lastName: "Nath V",
  phoneNumber: 9655666545,
  country: "India",
  role: "Developer",
  turnedEighteen: true,
};

console.log(user.firstName); // Output: Gohul
console.log(user.lastName); // Output: Nath V
console.log(user.phoneNumber); // it shows the phoneNumber 9655666545
console.log(user.country); // Output: India
console.log(user.role); // Output: Developer
console.log(user.turnedEighteen); // Output: True
// Adding one more objects
user.gender = "Male";
console.table(user); // Printing the objects in table
