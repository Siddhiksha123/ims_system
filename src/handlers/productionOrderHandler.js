const express = require("express");
const router = express.Router();
const productionOrderBL = require("../businessLogic/productionOrderBL");

router.get("/getAllProductionOrders", (req, res) => {
  // Implement logic to retrieve all production orders
  const productionOrders = productionOrderBL.getAllProductionOrders();
  res.json(productionOrders);
});

router.post("/addProductionOrder", (req, res) => {
  // Implement logic to create a new production order
  const newProductionOrder = req.body;

  // Add "bread" and "peanut butter" to the new production order
  newProductionOrder.ingredients = ["bread", "peanut butter"];

  productionOrderBL.createProductionOrder(newProductionOrder);
  res.json({ message: "Production order created successfully", order: newProductionOrder });
});

module.exports = router;
