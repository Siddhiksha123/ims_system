// Placeholder for business logic related to production orders

class ProductionOrderBL {
    constructor() {
      this.productionOrders = [];
    }
  
    getAllProductionOrders() {
      return this.productionOrders;
    }
  
    createProductionOrder(order) {
      // Add default ingredients "bread" and "peanut butter" if not provided
      order.ingredients = order.ingredients || ["bread", "peanut butter"];
  
      this.productionOrders.push(order);
    }
  }
  
  module.exports = new ProductionOrderBL();
  