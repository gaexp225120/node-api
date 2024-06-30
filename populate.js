require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/products");

const jsonProducts = require("./product.json");

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URL);
    await Product.insertMany(jsonProducts);

    console.log("Connect Success");
  } catch (error) {
    console.log(error);
  }
};

start();
