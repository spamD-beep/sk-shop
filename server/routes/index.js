import express from "express";
import upload from "../middleware/multer.js";  
import { deleteBanner, getBanners, uploadBanner, getBannerById, updateBanner } from "../controller/BannerController.js";
import { addCategory, addSubCategory, getCategories, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controller/CategoryController.js";
import { addProduct } from "../controller/ProductController.js";
const router = express.Router();

router.post("/banners", upload.single("media"), uploadBanner);
router.get("/banners", getBanners);
router.get("/banners/:id", getBannerById);
router.put("/banners/:id", upload.single("media"), updateBanner);
router.delete("/banners/:id", deleteBanner);

router.post("/category", upload.array("media", 5), addCategory);
router.post("/subcategory", upload.array("media", 5), addSubCategory);
router.get("/categories", getCategories);
router.get("/all-categories", getAllCategories);
router.get("/category/:id", getCategoryById);
router.put("/category/:id", upload.array("media", 5), updateCategory);
router.delete("/category/:id", deleteCategory);

router.post("/product", upload.single("media"), addProduct);
export default router;
