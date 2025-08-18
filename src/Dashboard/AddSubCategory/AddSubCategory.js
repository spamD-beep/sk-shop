import React, { useState } from "react";

const AddSubCategory = () => {
  const [productCategory, setProductCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");

  // 🟢 Dummy Product Categories (backend/API se bhi aa sakte hain)
  const productCategories = ["Electronics", "Fashion", "Home", "Books", "Sports"];

  // 🟢 Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productCategory) {
      alert("Please select a product category!");
      return;
    }

    if (!subCategoryName.trim()) {
      alert("Please enter sub category name!");
      return;
    }

    const formData = {
      productCategory,
      subCategoryName,
    };

    console.log("Form Submitted:", formData);

    // 👉 Backend call yahan karni hai (axios/fetch)
    // axios.post("/api/subcategory", formData);
  };

  return (
    <div className="container py-3 bg-white">
      <h4 className="mb-3">Add Sub Category</h4>

      <form onSubmit={handleSubmit}>
        {/* Product Category Dropdown */}
        <div className="mb-3">
          <label className="form-label">Product Category</label>
          <select
            className="form-select"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="">-- Select Category --</option>
            {productCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
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
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
            placeholder="Enter sub category name"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-end">
          <button type="submit" className="btn btn-success">
            Save Sub Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSubCategory;
