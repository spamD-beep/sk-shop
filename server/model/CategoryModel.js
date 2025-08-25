import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  subCategoryName: { type: String, required: true },
  path: { type: String, required: true, unique: false }, 
  mediaFiles: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true }
    }
  ]
});

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    path: { type: String, required: true, unique: true }, 
    mediaFiles: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
      }
    ],
    subCategories: [subCategorySchema]
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
