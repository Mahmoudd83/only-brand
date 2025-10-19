const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const ApiFeature = require("../utils/apiFeatures");

exports.deleteone = (model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const document = await model.findByIdAndDelete({ _id: id });
    if (!document) {
      return next(new ApiError(`no document for this id ${id}`, 404));
    }
    res.status(204).json({});
  });

exports.updateone = (model) =>
  asyncHandler(async (req, res, next) => {
    const document = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!document) {
      return next(
        new ApiError(`no document for this id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ data: document });
  });

exports.createone = (model) =>
  asyncHandler(async (req, res) => {
    const document = await model.create(req.body);
    res
      .status(201)
      .json({ data: document, message: "document added successfully" });
  });

exports.getone = (model) =>
  asyncHandler(async (req, res, next) => {
    const document = await model.findById(req.params.id);
    if (!document) {
      return next(
        new ApiError(`no document for this id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ data: document });
  });

exports.getall = (model) =>
  asyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterobj) {
      filter = req.filterobj;
    }
    let documentscount = await model.countDocuments();
    const apiFeatures = new ApiFeature(model.find(filter), req.query)
      .filter()
      .limitFields()
      .keyword()
      .paginate(documentscount)
      .sort();
    let { Query, paginationResult } = apiFeatures;

    const document = await Query;
    res
      .status(200)
      .json({ results: document.length, paginationResult, data: document });
  });
