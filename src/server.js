const express = require("express");
const app = express();
const apiController = require("./controller/apiController");

app.use(express.json());

// Homepage
app.get("/HomePage", (req, res) => {
  res.send("Product Inventory Management System");
});

// API Controller for handling routes
app.use("/api", apiController);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Product Inventory Management System server is running on http://localhost:${PORT}`);
});
