const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config/config");
const User = require("../db-server");

const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ phoneNumber });
    if (!existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create User
    const user = new User({
      name,
      phoneNumber,
      gender,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Failed to register user", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

const login = async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    // Find the user by phone number
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error("Failed to login", error);
    res.status(500).json({ error: "Failed to login" });
  }
};
module.exports = { register, login };