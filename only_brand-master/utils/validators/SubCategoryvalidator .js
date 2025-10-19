// @des rules
const { check,body } = require("express-validator");
const slugify = require("slugify");

const validatormiddelware = require("../../middlewares/validatormiddelware");

exports.GetsubCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid subcategory id format"),
  validatormiddelware,
];

exports.UpdatesubCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid subcategory id format"),
  check("name").notEmpty().withMessage("subcategory name is required"),
  body("name")
    .optional()
    .custom((value, { req }) => {
      req.body.slug = slugify(value);
      return true;
    }),

  validatormiddelware,
];

exports.DeletesubCategoryValidator = [
  check("id").isMongoId("").withMessage("invalid subcategory id format"),
  validatormiddelware,
];

exports.CreatsubcategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 2 })
    .withMessage("Too short subcategory name")
    .isLength({ max: 20 })
    .withMessage("Too long subcategory name").custom((value, { req }) => {
      req.body.slug = slugify(value);
      return true;
    }),
  check("category")
    .notEmpty()
    .withMessage("subcategoy must be belong to categoty")
    .isMongoId()
    .withMessage("invalid category id format"),
  validatormiddelware,
];
