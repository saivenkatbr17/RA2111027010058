// backend/controllers/productsController.js
const { getTopProducts, getProductDetails } = require("../utils");

// Controller function to fetch top products for a specific category
exports.getTopProducts = async (req, res) => {
  const { categoryName } = req.params;
  try {
    // Call the function to fetch top products from the external API
    const products = await getTopProducts(categoryName);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Controller function to fetch product details by ID
exports.getProductDetails = async (req, res) => {
  const { productId } = req.params;
  try {
    // Call the function to fetch product details from the external API
    const product = await getProductDetails(productId);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product details" });
  }
};
