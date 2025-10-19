const express = require("express");

const {
  creatbrand,
  getbrands,
  getbrand,
  updatebrand,
  deletebrand,
  UploadBrandImage,
  ResizeBrandImage
} = require("../controllers/Brands");
const {
  CreatbrandValidator,
  GetbrandValidator,
  UpdatebrandValidator,
  DeletebrandValidator,
  
} = require("../utils/validators/Brandsvalidator");

const router = express.Router();

router
  .route("/")
  .post( UploadBrandImage,ResizeBrandImage,CreatbrandValidator, creatbrand)
  .get(getbrands);
router
  .route("/:id")
  .get(GetbrandValidator, getbrand)
  .put(UpdatebrandValidator, updatebrand)
  .delete(DeletebrandValidator, deletebrand);
module.exports = router;
