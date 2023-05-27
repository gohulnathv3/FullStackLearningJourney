const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB connection URL
const url = "mongodb://localhost:27017";
const dbName = "travel_app_db";

// API route to retrieve data from the collection
app.get("/api/v1/destinations", async (req, res) => {
  try {
    const collectionName = "destinations";
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find({}).toArray();

    client.close();

    res.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// to retrieve users
app.get("/api/v1/users", async (req, res) => {
  try {
    const collectionName = "users";
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find({}).toArray();

    client.close();

    res.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// to retrieve reviews collections
app.get("/api/v1/reviews", async (req, res) => {
  try {
    const collectionName = "reviews";
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find({}).toArray();

    client.close();

    res.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// to retrive itineraries collections
app.get("/api/v1/itineraries", async (req, res) => {
  try {
    const collectionName = "users";
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find({}).toArray();

    client.close();

    res.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
