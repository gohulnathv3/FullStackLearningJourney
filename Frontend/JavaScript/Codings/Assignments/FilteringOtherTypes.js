// TODO: filtering out other types in the array

let countries = ["Canada", "America", "India", 1947, true, "United Kingdom"];
// using continue keyword -> It is used to skip the rest of code if the codition is true and continue iteration
for (let i = 0; i < countries.length; i++) {
  if (typeof countries[i] == "string") continue;
  console.log(countries[i]);
}

// using break keyword -> It is used to break the loop and exit.
console.log("Break Keyword Logic started");
for (let i = 0; i < countries.length; i++) {
  if (countries[i] == true) break;
  console.log(countries[i]);
}
