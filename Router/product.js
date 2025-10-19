const express = require("express");

const {
  creatProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  UploadProductImage,
  ResizeProductImage,
} = require("../controllers/product");
const {
  CreatProductValidator,
  GetProductValidator,
  UpdateProductValidator,
  DeleteProductValidator,
} = require("../utils/validators/Productvalidator");

const router = express.Router();

router
  .route("/")
  .post(UploadProductImage,ResizeProductImage,CreatProductValidator, creatProduct)
  .get(getProducts);
router
  .route("/:id")
  .get(GetProductValidator, getProduct)
  .put(UploadProductImage,ResizeProductImage,UpdateProductValidator, updateProduct)
  .delete(DeleteProductValidator, deleteProduct);
module.exports = router;
