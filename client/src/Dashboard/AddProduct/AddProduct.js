import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    price: "",
    oldPrice: "",
    isFeatured: "",
    brand: "",
    stock: "",
    discount: "",
    rams: "",
    weight: "",
    size: "",
    rating: 0,
    media: [],
  });

  // 🟢 handle input change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      // Agar multiple files select ki hain to purani files ke sath nayi add karni
      const newFiles = Array.from(files);
      setFormData((prev) => ({
        ...prev,
        [name]: [...prev.media, ...newFiles],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 🟢 delete media file
  const handleDeleteFile = (index) => {
    const updatedFiles = [...formData.media];
    updatedFiles.splice(index, 1);
    setFormData({ ...formData, media: updatedFiles });
  };

  return (
    <div className="container py-3 bg-white add-product-form">
      {/* Row 1 */}
      <div className="row mb-3">
        <div className="col">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />

          <label className="mt-2">Product Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row mb-3">
        <div className="col-3">
          <label>Product Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Select --</option>
            <option>Fashion</option>
            <option>Bags</option>
            <option>Jewelery</option>
          </select>
        </div>
        <div className="col-3">
          <label>Product Sub Category</label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Select --</option>
            <option>Fashion</option>
            <option>Bags</option>
            <option>Jewelery</option>
          </select>
        </div>
        <div className="col-3">
          <label>Product Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <label>Product Old Price</label>
          <input
            type="number"
            name="oldPrice"
            value={formData.oldPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="row mb-3">
        <div className="col-3">
          <label>Is Featured</label>
          <select
            name="isFeatured"
            value={formData.isFeatured}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Select --</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-3">
          <label>Product Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <label>Product Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <label>Product Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      {/* Row 4 */}
      <div className="row mb-3">
        <div className="col-3">
          <label>Product RAMS</label>
          <select
            name="rams"
            value={formData.rams}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Select --</option>
            <option>2GB</option>
            <option>4GB</option>
            <option>8GB</option>
            <option>16GB</option>
          </select>
        </div>
        <div className="col-3">
          <label>Product Weight</label>
          <select
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Select --</option>
            <option>0.5kg</option>
            <option>1kg</option>
            <option>2kg</option>
          </select>
        </div>
        <div className="col-3">
          <label>Product Size</label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Select --</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="col-3">
          <label>Product Rating</label>
          <div>
            <Rating
              name="rating"
              value={formData.rating}
              onChange={(e, newValue) =>
                setFormData({ ...formData, rating: newValue })
              }
            />
          </div>
        </div>
      </div>

      {/* Row 5 - Media Upload */}
      <div className="row mb-3">
        <div className="col-6">
          <label>Media & Images</label>
          <input
            type="file"
            name="media"
            multiple
            onChange={handleChange}
            className="form-control"
          />

          {/* Media Preview List */}
          <div className="mt-3">
            {formData.media.length > 0 &&
              formData.media.map((file, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center mb-2 p-2 border rounded"
                >
                  {/* Agar image hai to preview */}
                  {file.type.startsWith("image/") && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      width="50"
                      height="50"
                      className="me-2 rounded"
                    />
                  )}
                  <span className="me-2">{file.name}</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteFile(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col text-end">
          <button className="btn btn-primary">Save Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
