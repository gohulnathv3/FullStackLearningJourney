function outer() {
  var outer = "I'm outside variable";
  function inner() {
    var inner = "I'm inside variable";
    console.log(outer + ", " + inner);
  }
  inner();
}
outer();

// In this example, the inner function is nested within the outer function.
// When the outer function is called, it creates a scope that includes the variable outer variable and defines the inner function within that scope.
// When the inner function is called, it has access to both outer variable and inner variable.
