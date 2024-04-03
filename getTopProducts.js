const fetch = require("node-fetch");

async function getTopProducts(categoryName) {
  try {
    const response = await fetch(``);
    if (!response.ok) {
      throw new Error("Failed to fetch products from the API");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products from the API");
  }
}

module.exports = {
  getTopProducts,
};
