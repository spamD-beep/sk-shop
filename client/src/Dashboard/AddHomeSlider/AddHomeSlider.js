import React, { useState, useEffect } from "react";
import { useAddBannerMutation, useUpdateBannerMutation, useGetBannerByIdQuery } from "../../api/bannerApi";
import { useNavigate, useParams } from "react-router-dom";

const AddHomeSlider = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mediaFiles, setMediaFiles] = useState([]);
  const [addBanner] = useAddBannerMutation();
  const [updateBanner] = useUpdateBannerMutation();
  const { data: bannerData } = useGetBannerByIdQuery(id, { skip: !id });

  // Set existing image for update
  useEffect(() => {
    if (bannerData && bannerData.image) {
      setMediaFiles([{ preview: bannerData.image.url, existing: true }]);
    }
  }, [bannerData]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaFiles(files.map(f => ({ file: f })));
  };

  const handleDeleteFile = (index) => {
    setMediaFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (mediaFiles.length === 0) {
        alert("Please upload at least one file!");
        return;
      }
      if (mediaFiles[0].file) formData.append("media", mediaFiles[0].file);

      if (id) {
        // Update
        await updateBanner({ id, formData }).unwrap();
        alert("Banner updated successfully!");
      } else {
        // Create
        await addBanner(formData).unwrap();
        alert("Banner added successfully!");
      }
      setMediaFiles([]);
      navigate("/HomeBannerSlider");
    } catch (err) {
      console.error(err);
      alert("Operation failed!");
    }
  };

  return (
    <div className="container py-3 bg-white">
      <h4 className="mb-3">{id ? "Update Home Slider" : "Add Home Slider"}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Select Files</label>
          <input type="file" multiple={!id} onChange={handleFileChange} className="form-control" />
        </div>
        <div className="mt-3">
          {mediaFiles.map((item, i) => (
            <div key={i} className="d-flex align-items-center mb-2 p-2 border rounded">
              <img
                src={item.file ? URL.createObjectURL(item.file) : item.preview}
                alt="banner"
                width="50"
                height="50"
                className="me-2 rounded"
              />
              <span className="me-2">{item.file ? item.file.name : "Existing Image"}</span>
              <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDeleteFile(i)}>Delete</button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-end">
          <button type="submit" className="btn btn-success">{id ? "Update Slider" : "Save Slider"}</button>
        </div>
      </form>
    </div>
  );
};

export default AddHomeSlider;
