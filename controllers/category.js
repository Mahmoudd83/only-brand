const categorySchema = require("../Schema/category");
const asyncHandler = require("express-async-handler");
const factory = require("./handlerfactory");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const { Uploadsinglimage } = require("../middlewares/uploadimagesmiddleware");

exports.UploadCategoryImage = Uploadsinglimage("image");
// apply image processing  
exports.ResizeCategoryImage = asyncHandler(async (req, res, next) => {
  const filename = `category-${uuidv4()}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(200, 200)
    .toFormat("jpeg")
    .jpeg({ quality: 5 })
    .toFile(`uploads/categories/${filename}`);
  // upload image name to our db
  req.body.image = filename;
  next();
});
// @desc  creatcategory
// @route post/api/category
// @access private
exports.creatcategory = factory.createone(categorySchema);

// @desc  get all list of category
// @route get /api/category
// @acess public
exports.getcategories = factory.getall(categorySchema);

// @desc  get a specific categoryby id
// @route get /api/category/:id
// @acess public
exports.getcategory = factory.getone(categorySchema);

// @desc  update a specific categoryby id
// @route put /api/category/:id
// @acess private
exports.updatecategory = factory.updateone(categorySchema);

// @desc  delete a specific categoryby id
// @route delate /api/category/:id
// @acess private
exports.deletecategory = factory.deleteone(categorySchema);
