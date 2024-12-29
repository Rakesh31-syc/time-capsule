const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Models
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const LetterSchema = new mongoose.Schema({
  senderEmail: { type: String, required: true },
  recipientEmail: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  deliveryDate: { type: Date, required: true },
});

const User = mongoose.model("User", UserSchema);
const Letter = mongoose.model("Letter", LetterSchema);

// Middleware for Auth
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized access" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
};

// Routes

// User Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: "Invalid email or password" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", userEmail: user.email, authToken: token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

// Save Letter
app.post("/save-letter", authenticate, async (req, res) => {
  const { senderEmail, recipientEmail, subject, message, deliveryDate } = req.body;

  try {
    const newLetter = new Letter({ senderEmail, recipientEmail, subject, message, deliveryDate });
    await newLetter.save();
    res.status(201).json({ message: "Letter saved successfully" });
  } catch (err) {
    console.error("Error saving letter:", err);
    res.status(500).json({ error: "Failed to save letter" });
  }
});

// Send Letter
app.post("/send-letter", authenticate, async (req, res) => {
  const { senderEmail, recipientEmail, subject, message, deliveryDate } = req.body;

  try {
    const newLetter = new Letter({ senderEmail, recipientEmail, subject, message, deliveryDate });
    await newLetter.save();

    // Replace the following with your email service logic
    const emailPayload = {
      to: recipientEmail,
      from: senderEmail,
      subject: subject,
      text: message,
    };

    // Simulating email sending (use services like SendGrid or Nodemailer)
    console.log("Simulated Email Payload:", emailPayload);

    res.status(201).json({ message: "Letter sent successfully" });
  } catch (err) {
    console.error("Error sending letter:", err);
    res.status(500).json({ error: "Failed to send letter" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
