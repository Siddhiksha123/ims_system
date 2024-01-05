const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config(); 

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// Define User model
const User = mongoose.model('newuser', {
    name: String,
    email: String,
    password: String
});

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET;

// Signup Route
app.post("/signup", async function(req, res) {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Users already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.json({
            msg: "User Created Successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Signin Route
app.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ error: "User does not exist" });
        }

        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }

        // Create a JWT token for authentication
        const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET, { expiresIn: '1h' });

        // Include the token in the response
        res.json({
            msg: "Authentication Successful",
            user: existingUser,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get welcome message Route
app.get("/", function(req, res) {
    res.send("Welcome to the user database.");
});

// Get all users Route
app.get("/users", async function(req, res) {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Delete all users Route
app.delete("/users", async function(req, res) {
    try {
        await User.deleteMany({});
        res.json({ msg: "All users deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Set up the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
