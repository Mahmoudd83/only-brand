// package / modules /libraries
const path = require("path");

const express = require("express");
const morgan = require("morgan");

const UserRoute = require("./Router/user");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const CategoryRoute = require("./Router/category");
const ApiError = require("./utils/ApiError");
const globalError = require("./middlewares/errorrmiddleware");
const SubCategoryRoute = require("./Router/subCategoryRoute");
const BrandsRoute = require("./Router/Brands");
const ProductRoute = require("./Router/product");
const dbconnection = require("./config/database");

// connect to DB
dbconnection();


// app express
const app = express();

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode:${process.env.NODE_ENV}`);
}
// middleware parsing
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

// Mount Routes
app.use("/api/user", UserRoute);
app.use("/api/category", CategoryRoute);
app.use("/api/subcategory", SubCategoryRoute);
app.use("/api/brand", BrandsRoute);
app.use("/api/product", ProductRoute);

// create error for route if route isn't correct
app.all("*", (req, res, next) => {
  next(new ApiError(`can't found this route: ${req.originalUrl}`, 400));
});

// global error handling middleware in express, only
app.use(globalError);


//port
const port = 5000;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});

// Handle error outside express
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejectionError :${err.name} |${err.message}`);
  server.close(() => {
    console.error(`unhandledRejectionError :${err.name} |${err.message}`, err);
    console.log('shutting down');
    process.exit(1);
  });
});
