import React, { useState } from "react";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);

  // 🟢 Handle File Change
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setMediaFiles((prev) => [...prev, ...newFiles]);
  };

  // 🟢 Delete File
  const handleDeleteFile = (index) => {
    const updated = [...mediaFiles];
    updated.splice(index, 1);
    setMediaFiles(updated);
  };

  // 🟢 Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      alert("Please enter category name!");
      return;
    }

    if (mediaFiles.length === 0) {
      alert("Please upload at least one file!");
      return;
    }

    const formData = new FormData();
    formData.append("categoryName", categoryName);
    mediaFiles.forEach((file) => {
      formData.append("media", file);
    });

    console.log("Form Submitted:", { categoryName, mediaFiles });

    // Backend call yahan karni hai (axios/fetch se)
    // axios.post("/api/category", formData);
  };

  return (
    <div className="container py-3 bg-white">
      <h4 className="mb-3">Add Category</h4>

      <form onSubmit={handleSubmit}>
        {/* Category Name */}
        <div className="mb-3">
          <label className="form-label">Category Name</label>
          <input
            type="text"
            className="form-control"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
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
          {mediaFiles.length > 0 &&
            mediaFiles.map((file, index) => (
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

        {/* Submit Button */}
        <div className="mt-4 text-end">
          <button type="submit" className="btn btn-success">
            Save Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
