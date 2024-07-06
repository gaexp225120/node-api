const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
  const products = await MyModel.find({ price: { $gt: 150 } }).exec();
  console.log(products);
  res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = async (req, res) => {
  const { type } = req.query();
  const products = await Product.find(
    { name: /${type}/i },
    "name price"
  ).exec();
  res.status(200).json({ msg: "products", data: products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
