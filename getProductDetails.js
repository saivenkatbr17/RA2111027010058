async function getProductDetails(productId) {
  try {
    const response = await fetch(``);
    if (!response.ok) {
      throw new Error("Failed to fetch product details from the API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product details from the API");
  }
}

module.exports = {
  getTopProducts,
  getProductDetails,
};
