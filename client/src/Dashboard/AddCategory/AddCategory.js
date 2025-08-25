import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddCategoryMutation } from "../../api/categoryApi";

const AddCategory = () => {
  const { register, handleSubmit, reset } = useForm();
  const [mediaFiles, setMediaFiles] = useState([]);
  const [addCategory, { isLoading }] = useAddCategoryMutation();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaFiles(files);
  };

  const handleDeleteFile = (index) => {
    const updated = [...mediaFiles];
    updated.splice(index, 1);
    setMediaFiles(updated);
  };

  const onSubmit = async (data) => {
    if (mediaFiles.length === 0) {
      alert("Please upload at least one file!");
      return;
    }

    const formData = new FormData();
    formData.append("categoryName", data.categoryName);
    formData.append("categoryPath", data.categoryPath); // ✅ new field added
    mediaFiles.forEach((file) => formData.append("media", file));

    try {
      const response = await addCategory(formData).unwrap();
      console.log("Category saved:", response);
      alert("Category saved successfully!");
      reset();
      setMediaFiles([]);
    } catch (err) {
      console.error("Error saving category:", err);
      alert("Failed to save category");
    }
  };

  return (
    <div className="container py-3 bg-white">
      <h4 className="mb-3">Add Category</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Category Name */}
        <div className="mb-3">
          <label className="form-label">Category Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter category name"
            {...register("categoryName", { required: true })}
          />
        </div>

        {/* ✅ Category Path */}
        <div className="mb-3">
          <label className="form-label">Category Path</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter category path (e.g. /electronics)"
            {...register("categoryPath", { required: true })}
          />
        </div>

        {/* File Input */}
        <div className="mb-3">
          <label className="form-label">Select Files</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="form-control"
          />
        </div>

        {/* Preview Section */}
        <div className="mt-3">
          {mediaFiles.map((file, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-2 p-2 border rounded"
            >
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

        {/* Submit Button */}
        <div className="mt-4 text-end">
          <button type="submit" className="btn btn-success" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Category"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
