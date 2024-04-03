const express = require("express");
const router = express.Router();
const { getTopProducts, getProductDetails } = require("../utils");

router.get("/:categoryName", async (req, res) => {
  const { categoryName } = req.params;
  try {
    const products = await getTopProducts(categoryName);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.get("/:categoryName/:productId", async (req, res) => {
  const { categoryName, productId } = req.params;
  try {
    const product = await getProductDetails(categoryName, productId);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product details" });
  }
});

module.exports = router;
