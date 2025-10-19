const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "subcategory must be unique"],
      min: [2, "too short subcategory name"],
      max: [20, "subcategory name too long"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: [true, "subcategory must be belong to parent ('category')"],
    },
  },
  { timestamps: true }
);

const subCategory = mongoose.model("subcategory", subCategorySchema);

module.exports = subCategory;
