const Product = require("../Schema/product");
const factory = require("./handlerfactory");
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const {
  UploadArrayofImages,
} = require("../middlewares/uploadimagesmiddleware");

exports.UploadProductImage = UploadArrayofImages([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 5 },
]);
// apply image processing 
exports.ResizeProductImage = asyncHandler(async (req, res, next) => {
  // image processing for imageCover
  if (req.files.imageCover) {
    const imageCoverFileName = `product-${uuidv4()}-${Date.now()}-cover.jpeg`;
    await sharp(req.files.imageCover[0].buffer)
      .resize(2000, 2000)
      .toFormat("jpeg")
      .jpeg({ quality: 85 })
      .toFile(`uploads/products/${imageCoverFileName}`);
    // upload image name to our db
    req.body.imageCover = imageCoverFileName;
  }
  // image processing for images
  if (req.files.images) {
    req.body.images = [];
    await Promise.all(
      req.files.images.map(async (imag, index) => {
        const ImagesFileName = `product-${uuidv4()}-${Date.now()}-${index + 1}.jpeg`;
        await sharp(imag.buffer)
          .resize(2000, 2000)
          .toFormat("jpeg")
          .jpeg({ quality: 85 })
          .toFile(`uploads/products/${ImagesFileName}`);
        req.body.images.push(ImagesFileName);
      })
    );
  }
  next();
});

// @desc  creatproduct
// @route post/api/product
// @access private
exports.creatProduct = factory.createone(Product);

// @desc  get all list of products
// @route get /api/products
// @acess public
exports.getProducts = factory.getall(Product);

// @desc  get a specific productby id
// @route get /api/product/:id
// @acess public
exports.getProduct = factory.getone(Product);

// @desc  update a specific productby id
// @route put /api/product/:id
// @acess private
exports.updateProduct = factory.updateone(Product);

// @desc  delete a specific productby id
// @route delate /api/product/:id
// @acess private
exports.deleteProduct = factory.deleteone(Product);
