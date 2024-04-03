const express = require("express");
//const productsRoute = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
