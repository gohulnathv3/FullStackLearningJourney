// Objects are a powerful data structure in JavaScript, and they provide a flexible way to organize and manipulate data in your programs.
// Object Creation: You can create an object using the object literal syntax {} or the Object constructor.
// Object literal

// Accessing Object Properties:
// Object properties can be accessed using dot notation (object.property) or bracket notation (object['property']).

let person = {
  name: "John",
  age: 25,
  city: "New York",
};
console.log(person.age, person.city, person.name);
console.table(person);

// Using Object constructor
let car = new Object();
car.make = "Honda";
car.model = "Civic";
car.year = 2022;
console.log(car.make, car.model, car.year);
console.table(car);

// Modifying Object Properties: Object properties can be modified by assigning new values to them.
// Adding and Removing Object Properties:You can add new properties to an object or remove existing properties using the dot notation or bracket notation.

person.age = 30;
person["city"] = "San Francisco";
console.log("After Modifying Objects");
console.table(person);

person.job = "Engineer"; // Adding a new property
delete person.age; // Removing an existing property
console.log("After adding and removing properties from person object");
console.table(person);

// Object Methods: Objects can have methods, which are functions associated with the object.
let rectangle = {
  width: 10,
  height: 5,
  calculateArea: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.calculateArea()); // Output: 50

// Object Iteration: You can iterate over the properties of an object using for...in loop.

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Object Cloning and Merging: You can clone an object or merge multiple objects using various techniques. One commonly used method is the Object.assign() method.

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Property Existence Check:You can check if an object has a specific property using the hasOwnProperty() method.

if (person.hasOwnProperty("name")) {
  console.log("This Property exists");
} else {
  console.log("This Property not exists");
}

// Nested Objects: Objects in JavaScript can have properties that are objects themselves, allowing for nested structures.

let person1 = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

console.log(person1.address.city); // Output: "New York"
