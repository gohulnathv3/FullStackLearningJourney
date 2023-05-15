// To add increement
minimumIncreement("50000"); // declared function can be retrieved anywhere, this is one type of code hoisting

function minimumIncreement(a) {
  var total = 5000 + parseInt(a);
  console.log(`"Hurrah!! your salary increemented from ${a} to ${total}!!!"`);
}

// maximumIncreement(4000);

var maximumIncreement = function (a) {
  var total = 10000 + parseInt(a);
  console.log(`"Hurrah!! your salary increemented from ${a} to ${total}!!!"`);
};

maximumIncreement(4000);

// Variable Declaration
console.log(name);
var name = "Gohul";

function sayMe() {
  var name = "Ajith";
  console.log("hello user!", name);
}
sayMe();

console.log(name);
