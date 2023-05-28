const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB connection URL
const url = "mongodb://localhost:27017";
const dbName = "travel_app_db";

// function to estabilish connection
mongoose
  .connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application with a non-zero status code
  });

// Define user collection Schema
const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  gender: String,
});
// To Create Mongoose model
const User = mongoose.model("User", userSchema);

const destinationSchema = new mongoose.Schema({
  place: String,
  country: String,
  description: String,
});

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const itinerarySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);
const Itinerary = mongoose.model("Itinerary", itinerarySchema);

// Create a Mongoose model for the "destinations" collection
const Destination = mongoose.model("Destination", destinationSchema);

async function retrieveDataFromCollection(req, res, Model) {
  try {
    const data = await Model.find({}).select("-__v");
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch the data", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
// API routes for retrieving data from collection

app.get("/api/v1/destinations", async (req, res) => {
  retrieveDataFromCollection(req, res, Destination);
});

// to retrieve users
app.get("/api/v1/users", async (req, res) => {
  retrieveDataFromCollection(req, res, User);
});

// to retrieve reviews collections
app.get("/api/v1/reviews", async (req, res) => {
  retrieveDataFromCollection(req, res, Review);
});

// to retrive itineraries collections
app.get("/api/v1/itineraries", async (req, res) => {
  retrieveDataFromCollection(req, res, Itinerary);
});

// For adding data into database
app.post("/api/v1/add-users", async (req, res) => {
  try {
    const newData = req.body;

    const user = new User(newData);
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Failed to add data", error);
    res.status(500).json({ error: "Failed to add data" });
  }
});

// For adding data into Destinations
app.post("/api/v1/add-destinations", async (req, res) => {
  try {
    const newData = req.body;
    const destination = new Destination(newData);
    const savedDestinations = await destination.save();

    res.status(201).json(savedDestinations);
  } catch (error) {
    console.error("Failed to add data", error);
    res.status(500).json({ error: "Failed to add data" });
  }
});

// For adding data into Itineraries
app.post("/api/v1/add-itineraries", async (req, res) => {
  try {
    const newData = req.body;
    const itineraries = new Itinerary(newData);
    const savedItineraries = await itineraries.save();

    res.status(201).json(savedItineraries);
  } catch (error) {
    console.error("Failed to add data", error);
    res.status(500).json({ error: "Failed to add data" });
  }
});

// For adding data into reviews
app.post("/api/v1/add-reviews", async (req, res) => {
  try {
    const newData = req.body;
    const reviews = new Review(newData);
    const savedReviews = await reviews.save();

    res.status(201).json(savedReviews);
  } catch (error) {
    console.error("Failed to add data", error);
    res.status(500).json({ error: "Failed to add data" });
  }
});

// Delete Operation
app.delete("/api/v1/users/:name", async (req, res) => {
  const userName = req.params.name;

  try {
    const deletedUser = await User.findOneAndDelete({ name: userName });

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Failed to delete user", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});
