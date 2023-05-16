let countries = ["Canada", "America", "India", 1947, true, "United Kingdom"];

// to iterate the array elements using for each
console.log("Iteration Array elements using for each");
countries.forEach((s) => console.log(s));

// interview question 1
console.log("Interview Question Output");
var i = 0;
for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}

console.log("For Of Loop Output");
for (const country of countries) {
  console.log(country);
}
console.log("For in Loop Output 1");
for (const country in countries) {
  console.log(countries[country]);
}

console.log("For in Loop Output 2");
// if key value pairs are there in an array, we've to use for..in loop
const symbols = {
  yt: "youtube",
  ig: "instagram",
  fb: "facebook",
  sc: "snapchat",
};

for (const symbol in symbols) {
  console.log(symbol + ": " + symbols[symbol]);
}
