import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAddSubCategoryMutation,
  useGetCategoriesQuery,
} from "../../api/categoryApi";

const AddSubCategory = () => {
  const { register, handleSubmit, reset } = useForm();
  const [productCategory, setProductCategory] = useState("");
  
  // 🟢 RTK Query se categories fetch
  const { data: categories = [], isLoading: isFetching } = useGetCategoriesQuery();
  const [addSubCategory, { isLoading }] = useAddSubCategoryMutation();

  const onSubmit = async (data) => {
    if (!productCategory) {
      alert("Please select a product category!");
      return;
    }

    const formData = new FormData();
    formData.append("productCategory", productCategory);
    formData.append("subCategoryName", data.subCategoryName);
    formData.append("subCategoryPath", data.subCategoryPath); // 🆕 Path bhi send karna

    try {
      const response = await addSubCategory(formData).unwrap();
      console.log("SubCategory Saved:", response);
      alert("SubCategory saved successfully!");
      reset();
      setProductCategory("");
    } catch (err) {
      console.error("Error saving subcategory:", err);
      alert("Failed to save subcategory");
    }
  };

  return (
    <div className="container py-3 bg-white">
      <h4 className="mb-3">Add Sub Category</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Category Dropdown */}
        <div className="mb-3">
          <label className="form-label">Product Category</label>
          <select
            className="form-select"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            disabled={isFetching}
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.categoryName}>
                {cat.categoryName}
              </option>
            ))}
          </select>
        </div>

        {/* Sub Category Name */}
        <div className="mb-3">
          <label className="form-label">Sub Category Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter sub category name"
            {...register("subCategoryName", { required: true })}
          />
        </div>

        {/* Sub Category Path (slug/URL) */}
        <div className="mb-3">
          <label className="form-label">Sub Category Path</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter sub category path (e.g. mobiles, laptops)"
            {...register("subCategoryPath", { required: true })}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-end">
          <button type="submit" className="btn btn-success" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Sub Category"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSubCategory;
