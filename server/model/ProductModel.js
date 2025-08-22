import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productDes:{
        type:String,
        required:true
    },
    productCat:{
        type:String,
        required:true
    },
    productSubCat:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productOldPrice:{
        type:Number,
        required:true
    },
    productFeatured:{
        type:String,
        emu:["Yes","No"],
        required:true
    },
    productBrand:{
        type:String,
        required:true
    },
    productStock:{
        type:Number,
        required:true
    },
    productDiscount:{
        type:Number,
        required:true
    },
    productSize:{
        type:String,
        emu:["S","M","L","XL"],
        required:false
    },
    productRating:{
        type:Number,
        min:0,
        max:5,
        required:true
    },
    image: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  },
  { timestamps: true }
)
const Product=mongoose.model("Product",productSchema);
export default Product;