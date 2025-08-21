import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllBannersQuery, useDeleteBannerMutation } from "../../api/bannerApi";
import { FaEdit, FaTrash } from "react-icons/fa";

const HomeBanner = () => {
  const { data: banners = [], isLoading, error } = useGetAllBannersQuery();
  const [deleteBanner] = useDeleteBannerMutation();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const productsPerPage = 5;

  const deleteHandle = (id) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      deleteBanner(id)
        .then(() => {
          alert("Banner deleted successfully!");
        })
        .catch((error) => {
          console.error("Delete Failed:", error);
          alert("Failed to delete banner!");
        });
    }
  };

  const toggleProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = banners.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(banners.length / productsPerPage);

  if (isLoading) return <p>Loading banners...</p>;
  if (error) return <p>Error loading banners</p>;

  return (
    <div className="row products">
      <div className="col">
        <div className="row align-items-center mb-3">
          <div className="col-md-6">
            <h2 style={{ fontSize: "14pt", fontWeight: "600" }}>
              Home Sliders Banners
            </h2>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-success btn-sm me-2">Export</button>
            <Link to="/AddHomeSlider" className="btn btn-primary btn-sm">
              Add Home Slide
            </Link>
          </div>
        </div>

        <div className="row bg-white py-2">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>IMAGE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProducts.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product._id)}
                          onChange={() => toggleProduct(product._id)}
                        />
                      </td>
                      <td>
                        <img
                          src={product.image.url}
                          alt="banner"
                          style={{
                            width: "80px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </td>
                      <td>
                        <FaEdit
                          className="text-primary me-3"
                          style={{ cursor: "pointer" }}
                          title="Edit"
                          onClick={() => navigate(`/AddHomeSlider/${product._id}`)}  // ✅ id pass kar di
                        />
                        <FaTrash
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          title="Delete"
                          onClick={() => deleteHandle(product._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {banners.length > 0 && (
              <div className="d-flex justify-content-between align-items-center mt-2">
                <small>
                  Page {currentPage} of {totalPages}
                </small>
                <div>
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, totalPages)
                      )
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
