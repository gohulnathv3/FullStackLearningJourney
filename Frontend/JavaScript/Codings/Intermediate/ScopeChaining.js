var country = "India";
console.log("Line 2 ", country);

function sayCountry() {
  // var country = "Canada";
  console.log("Line 5", country);
  sayCountryTwo();

  function sayCountryTwo() {
    var country = "America";
    console.log("Line 9", country);
  }
}
sayCountry();

// Scope chaining allows inner functions to access variables and functions from their outer functions
// enabling encapsulation and data privacy. It's important to note that inner functions have access to variables in the outer scope at the time they are defined, not at the time they are executed.
// Understanding scope chaining is crucial for writing maintainable and organized JavaScript code, as it helps in avoiding naming conflicts and allows for modular and reusable code structures.
