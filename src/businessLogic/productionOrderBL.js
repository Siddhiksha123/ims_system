// productionOrderBL.js

class ProductionOrderBL {
  constructor() {
    this.productionOrders = [];
  }

  getAllProductionOrders() {
    return this.productionOrders;
  }

  createProductionOrder(order) {
    // Your logic to create a production order
    // ...
    this.productionOrders.push(order);
  }

  calculatePrice(ingredients) {
    // Your logic to calculate the price based on ingredients
    // ...
  }
}

module.exports = new ProductionOrderBL();
