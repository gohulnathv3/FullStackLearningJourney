const { MongoClient } = require("mongodb");
const faker = require("faker");

const url = "mongodb://localhost:27017";
const dbName = "travel_app_db";
const collectionName = "destinations";

async function generateAndInsertData() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const numDestinations = 20; // Number of destinations to generate

    const destinations = Array.from({ length: numDestinations }, () => ({
      place: faker.address.city(),
      country: faker.address.country(),
      description: faker.lorem.paragraph(),
      // Add more fields as needed
    }));

    const result = await collection.insertMany(destinations);
    console.log(`${result.insertedCount} destinations inserted`);

    client.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

generateAndInsertData();
