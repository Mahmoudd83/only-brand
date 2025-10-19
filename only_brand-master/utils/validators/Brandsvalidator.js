// @des rules

const { body,check } = require("express-validator");
const slugify = require("slugify");

const validatormiddelware = require("../../middlewares/validatormiddelware");

exports.GetbrandValidator = [
  check("id").isMongoId("").withMessage("invalid brand id format"),
  validatormiddelware,
];

exports.UpdatebrandValidator = [
  check("id").isMongoId("").withMessage("invalid brand id format"),
  body("name").optional().custom((value, { req }) => {
    req.body.slug = slugify(value);
    return true;
  }),
  validatormiddelware,
];

exports.DeletebrandValidator = [
  check("id").isMongoId("").withMessage("invalid brand id format"),
  validatormiddelware,
];

exports.CreatbrandValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 3 })
    .withMessage("Too short brand name")
    .isLength({ max: 20 })
    .withMessage("Too long brand name").custom((value, { req }) => {
      req.body.slug = slugify(value);
      return true;
    }),
  validatormiddelware,
];
