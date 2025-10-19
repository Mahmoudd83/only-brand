// @des rules
// ctrl + D  to update the words
const { check ,body} = require("express-validator");
const slugify = require("slugify");


const validatormiddelware = require("../../middlewares/validatormiddelware");
const CategorySchema = require("../../Schema/category");
const SubCategorySchema = require("../../Schema/subCategory");

exports.GetProductValidator = [
  check("id").isMongoId("").withMessage("invalid Product id format"),
  validatormiddelware,
];

exports.UpdateProductValidator = [
  check("id").isMongoId("").withMessage("invalid Product id format"),
  body("title").optional().custom((value,{req})=>{
    req.body.slug = slugify(value);
    return true;
  }),
  validatormiddelware,
];

exports.DeleteProductValidator = [
  check("id").isMongoId("").withMessage("invalid Product id format"),
  validatormiddelware,
];

exports.CreatProductValidator = [
  check("title")
    .notEmpty()
    .withMessage("Product title is required")
    .isLength({ min: 3 })
    .withMessage("Product title too short")
    .isLength({ max: 100 })
    .withMessage("Product title too long").custom((value, { req }) => {
      req.body.slug = slugify(value);
      return true;
    }),
  check("description")
    .notEmpty()
    .withMessage("product description is required")
    .isLength({ min: 10 })
    .withMessage("product description too short")
    .isLength({ max: 1000 })
    .withMessage("product description too long"),
  check("price")
    .isNumeric()
    .withMessage("Product price must be a number")
    .notEmpty()
    .withMessage("Product price is required")
    .isLength({ min: 1, max: 1000 })
    .withMessage("Product price must be between 1 and 1000")
    .isLength({ min: 1, max: 1000 })
    .withMessage("Product price must be between 1 and 1000"),
  check("priceAfterDiscount")
    .optional()
    .isNumeric()
    .withMessage("Product price after dicount must be a number")
    .toFloat()
    .custom((value, { req }) => {
      if (value >= req.body.price) {
        throw new Error(
          "Product price after discount must be less than or equal to product price"
        );
      }
      return true;
    }),
  check("quantity")
    .isNumeric()
    .withMessage("Product quantity must be a number")
    .notEmpty()
    .withMessage("Product quantity is required"),
  check("sold")
    .optional()
    .isNumeric()
    .withMessage("Product sold must be a number"),
  check("imageCover").notEmpty().withMessage("Product image cover is required"),
  check("images")
    .optional()
    .isArray()
    .withMessage("Product images must be an array"),
  check("colors")
    .optional()
    .isArray()
    .withMessage("Product colors must be an array"),
  check("ratingsAverage")
    .optional()
    .isNumeric()
    .withMessage("Product rating average must be a number")
    .isLength({ min: 1, max: 5 })
    .withMessage("Product rating average must be between 1 and 5"),
  check("ratingsQuantity")
    .optional()
    .isNumeric()
    .withMessage("Product rating count must be a number"),
  check("category")
    .notEmpty()
    .withMessage("Product must belong to a category")
    .isMongoId()
    .withMessage("invalid category id format")
    .custom((value) =>
      CategorySchema.findById(value).then((category) => {
        if (!category) {
          return Promise.reject(
            new Error(`no category for this id ${value} found`)
          );
        }
      })
    ),
  check("subcategories")
    .optional()
    .isMongoId()
    .withMessage("invalid subcategory id format")
    .custom((subcategoriesIds) =>
      SubCategorySchema.find({
        _id: { $exists: true, $in: subcategoriesIds },
      }).then((result) => {
        if (result.length < 1 || result.length !== subcategoriesIds.length) {
          return Promise.reject(
            new Error(`invalid subcategories ids ${subcategoriesIds} found`)
          );
        }
      })
    )
    .custom((value, { req }) =>
      SubCategorySchema.find({ category: req.body.category }).then(
        (subcategories) => {
          const subcategoriedIdsinDB = [];
          subcategories.forEach((subcategory) =>
            subcategoriedIdsinDB.push(subcategory._id.toString())
          );
          if (!value.every((subcategoryId) =>subcategoriedIdsinDB.includes(subcategoryId))) {
            return Promise.reject(
              new Error(
                `subcategory not belong to  this category ${req.body.category}`
              )
            );
          }
        }
      )
    ),
  check("brands").optional().isMongoId().withMessage("invalid brand id format"),
  validatormiddelware,
];
