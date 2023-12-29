const express = require("express");
const app = express();
const apiController = require("./controller/apiController");

// Placeholder for the products array
let products = [];

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Product Inventory Management System");
});

// Use the apiController for handling product-related routes
app.use("/api", apiController);

app.listen(8080, () => {
  console.log("Product Inventory Management System server is running on http://localhost:8080");
});

// localhost:8080/api/<Rest>


// Dashboard -> login -> for any api call -> header -> (username/password or Auth Token)
