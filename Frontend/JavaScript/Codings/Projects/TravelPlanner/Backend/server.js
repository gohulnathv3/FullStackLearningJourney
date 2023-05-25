const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'StudentRepo';

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    // Create a new MongoClient
    const client = new MongoClient(url, { useUnifiedTopology: true });

    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected to MongoDB');

    // Access the database
    const db = client.db(dbName);

    // Perform database operations
    const collection = db.collection("StudentRepo");
    const data = await collection.find({}).toArray();
    console.log(data);

    // Close the database connection
    client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();