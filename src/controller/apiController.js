const express = require("express");
const router = express.Router();
const productionOrderHandler = require("../handlers/productionOrderHandler");
const productionOrderBL = require("../businessLogic/productionOrderBL");

let products = [];

// Get all products
router.get("/products", (req, res) => {
  res.json(products);
});

// Add a new product
router.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ message: "Product added", product: newProduct });
});

// Delete a product by index
router.delete("/products/:index", (req, res) => {
  const index = parseInt(req.params.index);
  products.splice(index, 1);
  res.json({ message: "Product deleted" });
});

// Modify a product by index
router.put("/products/:index", (req, res) => {
  const index = parseInt(req.params.index);
  products[index] = req.body;
  res.json({ message: "Product modified", modifiedProduct: products[index] });
});

// Get count of products
router.get("/products/count", (req, res) => {
  const productCount = products.length;
  res.json({ count: productCount });
});

// Remove a particular product by name
router.delete("/products/remove/:productName", (req, res) => {
  const productName = req.params.productName;
  products = products.filter(product => product.name !== productName);
  res.json({ message: `Product '${productName}' removed` });
});

// Create a new production order with amount, product name, and quantity
router.post("/products/production-order", (req, res) => {
  const { productName, quantity, amount } = req.body;

  // Validate input
  if (!productName || !quantity || !amount) {
    return res.status(400).json({ message: "Please provide productName, quantity, and amount" });
  }

  // Calculate the total amount
  const totalAmount = parseFloat(amount) * parseInt(quantity);

  // Create the production order
  const newProductionOrder = {
    productName,
    quantity: parseInt(quantity),
    amount: parseFloat(amount),
    totalAmount,
  };

  productionOrderBL.createProductionOrder(newProductionOrder);
  res.json({ message: "Production order created successfully", order: newProductionOrder });
});

// Get all production orders with price details
router.get("/products/production-order", (req, res) => {
  const allProductionOrders = productionOrderBL.getAllProductionOrders().map(order => {
    return {
      ...order,
      price: productionOrderBL.calculatePrice(order.ingredients),
    };
  });
  res.json(allProductionOrders);
});

// Production Order routes
router.use("/products/production-order", productionOrderHandler);

module.exports = router;
