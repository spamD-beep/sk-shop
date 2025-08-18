import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SubCategory = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // 👈 per page products

  const products = [
    { id: "P001", name: "Nike Shoes", category: "Men", subCategories: ["Shoes", "Sports", "Casual"], image: "https://via.placeholder.com/80x50" },
    { id: "P002", name: "Smart Watch", category: "Women", subCategories: ["Accessories", "Electronics"], image: "https://via.placeholder.com/80x50" },
    { id: "P003", name: "Leather Handbag", category: "Women", subCategories: ["Bags", "Fashion"], image: "https://via.placeholder.com/80x50" },
    { id: "P004", name: "Bluetooth Earbuds", category: "Men", subCategories: ["Electronics", "Audio"], image: "https://via.placeholder.com/80x50" },
    { id: "P005", name: "Men’s Jacket", category: "Men", subCategories: ["Clothing", "Winter Wear"], image: "https://via.placeholder.com/80x50" },
    { id: "P006", name: "Kids Toy Car", category: "Kids", subCategories: ["Toys", "Vehicles"], image: "https://via.placeholder.com/80x50" },
  ];

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
                  {currentProducts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => toggleProduct(product.id)}
                        />
                      </td>
                      <td>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          style={{ width: "80px", height: "50px", objectFit: "cover", borderRadius: "5px" }} 
                        />
                      </td>
                      <td>
                        <span style={getCategoryStyle(product.category)}>
                          {product.category}
                        </span>
                      </td>
                      <td>
                        {product.subCategories.map((sub, index) => (
                          <span key={index} style={getCategoryStyle(sub)}>
                            {sub}
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
