// @des rules

const { check } = require("express-validator");
const slugify = require("slugify");
const validatormiddelware = require("../../middlewares/validatormiddelware");

exports.CreatcategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3 })
    .withMessage("Too short category name")
    .isLength({ max: 20 })
    .withMessage("Too long category name").custom((value, { req }) => {
      req.body.slug = slugify(value);
      return true;
    }),
  validatormiddelware,
];

exports.GetCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid category id format"),
  validatormiddelware,
];

exports.UpdateCategoryValidator = [
  check("id").optional().isMongoId("").withMessage("invalid category id format"),
  check("name").optional().custom((value,{req})=>{
    req.body.slug = slugify(value);
    return true;
  }),
  validatormiddelware,
];

exports.DeleteCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid category id format"),
  validatormiddelware,
];
