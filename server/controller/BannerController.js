import Banner from "../model/BannerModel.js";
import cloudinary from "../config/Cloudnary.js";
import fs from "fs";

// Upload banner
export const uploadBanner = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file uploaded" });

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "ecommerce_banners",
    });

    const banner = new Banner({
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    await banner.save();

    fs.unlinkSync(req.file.path);

    res.status(201).json({ msg: "Banner uploaded", banner });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ msg: err.message });
  }
};

// Get all banners
export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get single banner
export const getBannerById = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findById(id);
    if (!banner) return res.status(404).json({ msg: "Banner not found" });
    res.status(200).json(banner);
  } catch (err) {
    console.error("Get Banner Error:", err);
    res.status(500).json({ msg: err.message });
  }
};

// Update banner
export const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findById(id);
    if (!banner) return res.status(404).json({ msg: "Banner not found" });

    // Only update image if new file uploaded
    if (req.file) {
      await cloudinary.uploader.destroy(banner.image.public_id);
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "ecommerce_banners",
      });
      banner.image.public_id = result.public_id;
      banner.image.url = result.secure_url;
      fs.unlinkSync(req.file.path);
    }

    await banner.save();
    res.status(200).json({ msg: "Banner updated", banner });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ msg: err.message });
  }
};

// Delete banner
export const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findByIdAndDelete(id);
    res.status(200).json({ msg: "Banner deleted successfully", banner });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
