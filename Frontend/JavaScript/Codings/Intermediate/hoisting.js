// Hoisting is a feature where we can declare the variable and function and it will be eventually hoisted to the top of the scope

// However, it's important to note that only the declarations are hoisted, not the initializations or assignments.

// Variables are hoisted with an initial value of undefined, and functions are hoisted in their entirety.

// Variable Hoisting
console.log(name); // Output: undefined -> statement appears before the variable declaration, it does not throw an error.
var name = "Gohul";

// Function Hoisting
sayHello(); // it will be called anywhere
// In this example, the function "sayHello()" is called before its declaration in the code. However, it still executes successfully because the function declaration is hoisted to the top of its scope.
function sayHello() {
  console.log(
    "Hello Gohul, please explain how the hoisting works in JavaScript"
  );
}

// if you declare a variable using let or const, or if you define a function using a function expression, they are not hoisted.

// Hoisting can be a powerful feature, but it's generally recommended to declare variables and functions at the beginning of their respective scopes to avoid confusion and improve code readability.
// Understanding hoisting helps to explain why some seemingly out-of-order code still executes as expected.
