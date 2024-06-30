require("dotenv").config();
const express = require("express");
const app = express();
// db parameters
const port = process.env.PORT || 3000;
const connectDB = require("./db/connect");
// router parameters
const productsRouter = require("./routes/products");
// not found parameters
const notFoundMiddeleWare = require("./middleware/not-found");
const errorMiddeleWare = require("./middleware/error-handler");
// to json
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});
app.use("/api/v1/products", productsRouter);
// not found
app.use(notFoundMiddeleWare);
app.use(errorMiddeleWare);
const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
