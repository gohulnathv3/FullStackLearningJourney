const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  gender: String,
  password: String,
});

// Define additional methods or hooks on the user schema
userSchema.statics.findOneByUsername = async function (name) {
  return this.findOne({ name });
};

// Create the User model using the schema
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
