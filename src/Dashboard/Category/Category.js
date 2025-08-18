import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Categorys = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // 👈 per page products

  const products = [
    { id: "P001", name: "Nike Shoes", image: "https://via.placeholder.com/80x50" },
    { id: "P002", name: "Smart Watch", image: "https://via.placeholder.com/80x50" },
    { id: "P003", name: "Leather Handbag", image: "https://via.placeholder.com/80x50" },
    { id: "P004", name: "Bluetooth Earbuds", image: "https://via.placeholder.com/80x50" },
    { id: "P005", name: "Men’s Jacket", image: "https://via.placeholder.com/80x50" },
    { id: "P006", name: "Kids Toy Car", image: "https://via.placeholder.com/80x50" },
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

  return (
    <div className="row products ">
      <div className="col">
        {/* 🔹 First Row (Heading + Buttons) */}
        <div className="row align-items-center mb-3">
          <div className="col-md-6">
            <h2 style={{ fontSize: "14pt", fontWeight: "600" }}>Category List</h2>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-success btn-sm me-2">Export</button>
            <Link to="/AddCategory" className="btn btn-primary btn-sm">Add Category</Link>
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
                      <td>{product.name}</td>
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

export default Categorys;
