import Category from "../model/CategoryModel.js";
import cloudinary from "../config/Cloudnary.js";
import fs from "fs";

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")        // space -> -
    .replace(/&/g, "-and-")      // & -> and
    .replace(/[^\w\-]+/g, "")    // remove special chars
    .replace(/\-\-+/g, "-");     // multiple - -> single -

// ✅ Add Category
export const addCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    if (!req.files || req.files.length === 0)
      return res.status(400).json({ msg: "No files uploaded" });

    const mediaFiles = [];
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "categories",
      });
      mediaFiles.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
      fs.unlinkSync(file.path);
    }

    let category = await Category.findOne({ categoryName });
    if (!category) {
      category = new Category({
        categoryName,
        path: slugify(categoryName), // 👈 path add
        mediaFiles,
      });
    } else {
      category.mediaFiles.push(...mediaFiles);
    }

    await category.save();
    res.status(201).json({ success: true, category });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
export const addSubCategory = async (req, res) => {
  try {
    const { productCategory, subCategoryName } = req.body;
    const category = await Category.findOne({ categoryName: productCategory });
    if (!category) return res.status(404).json({ msg: "Category not found" });

    const mediaFiles = [];
    if (req.files) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, { folder: "subcategories" });
        mediaFiles.push({ public_id: result.public_id, url: result.secure_url });
        fs.unlinkSync(file.path);
      }
    }

    category.subCategories.push({
      subCategoryName,
      path: slugify(subCategoryName), // 👈 path add for subCategory
      mediaFiles,
    });

    await category.save();
    res.status(201).json({ success: true, category });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}, "categoryName");
    res.json(categories);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ msg: "Category not found" });
    res.json(category);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ msg: "Category not found" });

    if (req.body.categoryName) category.categoryName = req.body.categoryName;

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, { folder: "categories" });
        category.mediaFiles.push({ public_id: result.public_id, url: result.secure_url });
        fs.unlinkSync(file.path);
      }
    }

    await category.save();
    res.json({ success: true, category });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ msg: "Category not found" });
    res.json({ success: true, msg: "Category deleted", category });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
