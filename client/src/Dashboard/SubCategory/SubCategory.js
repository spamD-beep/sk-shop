import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from '../../api/categoryApi';

const SubCategory = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // 👈 per page products
  const { data: products = [], isLoading } = useGetAllCategoriesQuery();

  // ✅ Checkbox toggle   
  const toggleProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // ✅ Pagination Logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // ✅ Background color by category
  const getCategoryStyle = (category) => {
    switch (category) {
      case "Men":
        return { backgroundColor: "#d1e7dd", padding: "4px 8px", borderRadius: "5px", marginRight: "5px" }; // greenish
      case "Women":
        return { backgroundColor: "#f8d7da", padding: "4px 8px", borderRadius: "5px", marginRight: "5px" }; // pinkish
      case "Kids":
        return { backgroundColor: "#cff4fc", padding: "4px 8px", borderRadius: "5px", marginRight: "5px" }; // bluish
      default:
        return { backgroundColor: "#e2e3e5", padding: "4px 8px", borderRadius: "5px", marginRight: "5px" }; // gray
    }
  };

  return (
    <div className="row products ">
      <div className="col">
        {/* 🔹 First Row (Heading + Buttons) */}
        <div className="row align-items-center mb-3">
          <div className="col-md-6">
            <h2 style={{ fontSize: "14pt", fontWeight: "600" }}>Sub Category List</h2>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-success btn-sm me-2">Export</button>
            <Link to="/AddSubCategory" className="btn btn-primary btn-sm">Add Sub Category</Link>
          </div>
        </div>

        {/* 🔹 Table */}
        <div className="row bg-white py-2">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>IMAGE</th>
                    <th>CATEGORY NAME</th>
                    <th>SUB CATEGORY NAMES</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => toggleProduct(product._id)}
                        />
                      </td>
                      <td>
                        <img 
                          src={product.mediaFiles[0].url} 
                          alt={product.categoryName} 
                          style={{ width: "80px", height: "50px", objectFit: "cover", borderRadius: "5px" }} 
                        />
                      </td>
                      <td>
                        <span style={getCategoryStyle(product.categoryName)}>
                          {product.categoryName}
                        </span>
                      </td>
                      <td>
                        {product.subCategories.map((sub, index) => (
                          <span key={index} style={getCategoryStyle(sub.subCategoryName)}>
                            {sub.subCategoryName}
                          </span>
                        ))}
                      </td>
                      <td>
                        <button className="btn btn-primary btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-2">
              <small>Page {currentPage} of {totalPages}</small>
              <div>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
