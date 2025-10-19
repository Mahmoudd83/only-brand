const mongoose = require("mongoose");

const Schemaa = mongoose.Schema;

const BrandsSchema = new Schemaa(
  {
    name: {
      type: String,
      required: [true, "Category required"],
      unique: [true, "Category must be uniqe"],
      minlength: [3, "Too short category name"],
      maxlength: [20, "Too long category name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    image: String,
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const SetImageUrl = (doc) => {
  if (doc.image) {
    const ImageUrl = `${process.env.BASE_URL}/brands/${doc.image}`;
    doc.image = ImageUrl;
  }
};

// init mongoose middleware  
BrandsSchema.post("init", function (doc) {
  SetImageUrl(doc);
});

// save mongoose middleware  

BrandsSchema.post("save", (doc) => {
  SetImageUrl(doc);
});
const Brands = mongoose.model("Brands", BrandsSchema);

module.exports = Brands;
