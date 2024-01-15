const express = require("express");
const router = express.Router();
const productionOrderBL = require("../businessLogic/productionOrderBL");

// Get all production orders with price details
router.get("/production-order", (req, res) => {
  const allProductionOrders = productionOrderBL.getAllProductionOrders().map(order => {
    return {
      ...order,
      price: productionOrderBL.calculatePrice(order.ingredients),
    };
  });
  res.json(allProductionOrders);
});

module.exports = router;
