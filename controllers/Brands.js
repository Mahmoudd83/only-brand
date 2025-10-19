const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const { Uploadsinglimage } = require("../middlewares/uploadimagesmiddleware");
const Brands = require("../Schema/Brands");
const factory = require("./handlerfactory");

exports.UploadBrandImage = Uploadsinglimage("image");
// apply image processing by sharp
exports.ResizeBrandImage = asyncHandler(async (req, res, next) => {
  const filename = `brand-${uuidv4()}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(200, 200)
    .toFormat("jpeg")
    .jpeg({ quality: 95 })
    .toFile(`uploads/brands/${filename}`);
  // upload image name to our db
  req.body.image = filename;
  next();
});
// @desc  creatbrand
// @route post/api/brand
// @access private
exports.creatbrand = factory.createone(Brands);

// @desc  get all list of brands
// @route get /api/brand
// @acess public
exports.getbrands = factory.getall(Brands);

// @desc  get a specific  brand by id
// @route get /api/brand/:id
// @acess public
exports.getbrand = factory.getone(Brands);

// @desc  update a specific brand id
// @route put /api/brand/:id
// @acess private
exports.updatebrand = factory.updateone(Brands);

// @desc  delete a specific Brand by id
// @route delate /api/brand/:id
// @acess private
exports.deletebrand = factory.deleteone(Brands);
