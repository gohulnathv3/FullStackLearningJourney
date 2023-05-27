const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB connection URL
const url = "mongodb://localhost:27017";
const dbName = "travel_app_db";

// function to estabilish connection
async function connectToDatabase() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = client.db(dbName);
  return { client, db };
}

// Route handler for retrieving data from a collection
async function retrieveDataFromCollection(req, res, collectionName) {
  try {
    const { client, db } = await connectToDatabase();
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();
    client.close();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch the data", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

// API routes for retrieving data from collection

app.get("/api/v1/destinations", async (req, res) => {
  retrieveDataFromCollection(req, res, "destinations");
});

// to retrieve users
app.get("/api/v1/users", async (req, res) => {
  retrieveDataFromCollection(req, res, "users");
});

// to retrieve reviews collections
app.get("/api/v1/reviews", async (req, res) => {
  retrieveDataFromCollection(req, res, "reviews");
});

// to retrive itineraries collections
app.get("/api/v1/itineraries", async (req, res) => {
  retrieveDataFromCollection(req, res, "itineraries");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
