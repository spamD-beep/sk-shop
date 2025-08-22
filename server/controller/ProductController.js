import Product from "../model/ProductModel.js";
import cloudinary from "../config/Cloudnary.js";
import fs from "fs";
export const addProduct=async (req,res)=> {
    try {
        const result= await cloudinary.uploader.upload(req.file.path,{
            folder:"Product Image"
        });
        const newProduct=await new Product({
      productName: req.body.productName,
      productDes: req.body.productDes,
      productCat: req.body.productCat,
      productSubCat: req.body.productSubCat,
      productPrice: req.body.productPrice,
      productOldPrice: req.body.productOldPrice,
      productFeatured: req.body.productFeatured,
      productBrand: req.body.productBrand,
      productStock: req.body.productStock,
      productDiscount: req.body.productDiscount,
      productSize: req.body.productSize || null, 
      productRating: req.body.productRating ,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    await newProduct.save();

    fs.unlinkSync(req.file.path);
    res.status(200).json({message:"Product Upload SuccessFully"})
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}