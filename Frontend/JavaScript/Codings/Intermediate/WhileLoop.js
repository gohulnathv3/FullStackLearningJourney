// The while loop in JavaScript allows you to execute a block of code repeatedly as long as a specified condition is true.
// Here's the basic syntax of a while loop:
// while (condition) {
//     // code to be executed
//   }
// condition: Specifies the condition that needs to be evaluated. If the condition is true, the loop will continue to execute. If the condition is false, the loop will stop.

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// The while loop provides a way to repeatedly execute a block of code based on a condition.
// It is useful when you don't know in advance how many times the loop needs to be executed, and
// the loop termination is determined by the condition.
// Remember to ensure that the condition eventually evaluates to false to prevent infinite loops.

// Do While Loop
// Printing 1 to 10 numbers using do while
var initialization = 0;
do {
  console.log(initialization);
  initialization++;
} while (initialization <= 10);
