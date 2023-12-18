const express = require("express");
const app = express();
let products = [];
fafa
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Product Inventory Management System");
});

app.get("/products", function (req, res) {
    res.json(products);
});

app.post("/products", function (req, res) {
    // Always add 1 bread
    const existingBread = products.find(product => product.name.toLowerCase() === "bread");

    if (existingBread) {
        existingBread.quantity += 1;
        res.json({ msg: "Bread quantity increased successfully", product: existingBread });
    } else {
        const newBread = { name: "Bread", price: 1, quantity: 1 };
        products.push(newBread);
        res.json({ msg: "Bread added successfully", product: newBread });
    }
});

app.put("/products/:id", function (req, res) {
    // Empty PUT command
    res.json({ msg: "No updates made" });
});

app.delete("/products", function (req, res) {
    // Delete all products
    products = [];
    res.json({ msg: "All products deleted successfully" });
});

app.listen(8080, () => {
    console.log("Product Inventory Management System server is running on http://localhost:8080");
});
