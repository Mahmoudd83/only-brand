const express = require("express");
const {
  creatsubcategory,
  getsubcategories,
  getsubcategory,
  updatesubcategory,
  deletesubcategory,
  setcategoryidToBody,
  creatfileobject

} = require("../controllers/subCategory");
const {
  CreatsubcategoryValidator,
  GetsubCategoryValidator,
  UpdatesubCategoryValidator,
  DeletesubCategoryValidator,
} = require("../utils/validators/SubCategoryvalidator ");
// mergeparams : allow us to access parametre from another router

const router = express.Router({ mergeParams: true  });



router
  .route("/")
  .post(setcategoryidToBody,CreatsubcategoryValidator, creatsubcategory)
  .get(creatfileobject,getsubcategories);
router
  .route("/:id")
  .get(GetsubCategoryValidator, getsubcategory)
  .put(UpdatesubCategoryValidator, updatesubcategory)
  .delete(DeletesubCategoryValidator, deletesubcategory);

module.exports = router;
