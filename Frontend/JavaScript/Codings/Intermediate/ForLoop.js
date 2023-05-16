// The for loop in JavaScript allows you to execute a block of code for a fixed number of times or based on a specific condition.
// Here's the basic syntax of a for loop:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// //   }

// initialization: Initializes a variable before the loop starts. It is executed only once.
// condition: Defines the condition that must be true for the loop to continue executing. If the condition evaluates to false, the loop stops.
// increment/decrement: Updates the variable value after each iteration of the loop. It allows you to control the loop iteration.

// Printing 1 to 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// Advanced for concepts
// We have an array fruits that contains three elements: 'apple', 'banana', and 'orange'.
// The for loop iterates over the array using the index i from 0 to fruits.length - 1.
// Inside the loop, we access the current element using fruits[i] and assign it to the fruit variable.
// We have added conditional statements inside the loop:
// If the fruit is 'banana', the continue statement is executed, which skips the rest of the code for the current iteration and moves to the next iteration.
// If the fruit is 'orange', the break statement is executed, which terminates the loop immediately.
// For each fruit that is not 'banana', it prints "Fruit: [fruit]" to the console.

const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];

  if (fruit === "banana") {
    continue; // Skip the rest of the code and continue to the next iteration if the fruit is 'banana'
  }

  console.log("Fruit:", fruit);

  if (fruit === "orange") {
    break; // Exit the loop if the fruit is 'orange'
  }
}
