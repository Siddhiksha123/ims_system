const express = require("express");
const router = express.Router();
const productionOrderHandler = require("../handlers/productionOrderHandler");

// Placeholder for the products array
let products = [];

// Define routes related to products
router.get("/", (req, res) => {
  // Implement logic to retrieve all products
  res.json(products);
});

router.post("/", (req, res) => {
  // Implement logic to add a new product
  const newProduct = req.body;

  // Add "bread" and "peanut butter" to the new product
  newProduct.ingredients = ["bread", "peanut butter"];

  products.push(newProduct);

  res.json({ message: "Product added successfully", product: newProduct });
});

// Use productionOrderHandler for production order routes
router.use("/production-order", productionOrderHandler);

module.exports = router;
