// src/server.js

const express = require("express");
const app = express();

const apiController = require("./controller/apiController");

const cors = require("cors");

// Importing the authentication module
const dbConnection = require("../Database/Authentication");
const router= require("../Routes/router");

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);

// Updated Homepage route to print "Hello, World!"
app.get("/HomePage", (req, res) => {
    res.send("Hellosddcs, World!");
});

// API Controller for handling routes
app.use("/api", apiController);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Product Inventory Management System server is running on http://localhost:${PORT}`);
});
