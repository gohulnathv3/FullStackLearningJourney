sayHello();

function sayHello() {
  console.log("Hello!!!");
}
// global context is not fully available at node, but browser the has ability to get the whole JS context
if (2 == "2") {
  console.log("this is true");
} else {
  console.log("this is false");
}

//  Variables in the global context
var hello = "Hello";
let username = "Gohul";
const country = "India";

// Function in global context
function sayHello() {
  console.log("Hello global context!!!");
}

// Accessing variables and calling the function
console.log(hello); // accessed via the window object window.hello (it will through error here because node we don't have the global context)
console.log(username); // Output: 30 (accessed via the window object) window.username
console.log(country); // Output: "USA" (accessed via the window object) window.country
sayHello();

// non global context
console.log("Non Global Context WorkSpace Begin");
// function greet() {
//     var name = "Alice";
//     console.log("Hello, " + name);
//   }

//   greet(); // Output: "Hello, Alice"
//   console.log(name); // Output: ReferenceError: name is not defined
