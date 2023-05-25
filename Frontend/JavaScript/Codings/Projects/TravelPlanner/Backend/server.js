const express = require("express");
const { MongoClient } = require("mongodb");
// Mongo DB URL Connection
const url = "mongodb://localhost:27017";
// Database and collection name
const dbName = "travel_app_db";
const destinationCollection = "destinations";

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define API routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Example API route to handle GET request
app.get("/api/users", (req, res) => {
  // Replace this with your actual implementation
  const users = [
    { id: 1, name: "Gohul Nath V" },
    { id: 2, name: "Pavithran R" },
  ];
  res.json(users);
});

// Example API route to handle POST request
app.post("/api/users", (req, res) => {
  // Replace this with your actual implementation
  const { name } = req.body;
  const newUser = { id: 3, name };
  res.json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
