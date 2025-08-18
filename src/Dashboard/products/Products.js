import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Products = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // 👈 per page products

  const products = [
    { id: "P001", name: "Nike Shoes", category: "Fashion", subCategory: "Footwear", price: "Rs. 3,500", sales: 70 },
    { id: "P002", name: "Smart Watch", category: "Electronics", subCategory: "Gadgets", price: "Rs. 6,200", sales: 45 },
    { id: "P003", name: "Leather Handbag", category: "Fashion", subCategory: "Accessories", price: "Rs. 2,800", sales: 90 },
    { id: "P004", name: "Bluetooth Earbuds", category: "Electronics", subCategory: "Audio", price: "Rs. 4,200", sales: 60 },
    { id: "P005", name: "Men’s Jacket", category: "Fashion", subCategory: "Clothing", price: "Rs. 5,500", sales: 80 },
    { id: "P006", name: "Kids Toy Car", category: "Toys", subCategory: "Vehicles", price: "Rs. 1,200", sales: 35 },
  ];

  // ✅ Checkbox toggle
  const toggleProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // ✅ Search filter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Pagination Logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="row products ">
      <div className="col">
        {/* 🔹 First Row (Heading + Buttons) */}
        <div className="row align-items-center mb-3">
          <div className="col-md-6">
            <h2 style={{ fontSize: "14pt", fontWeight: "600" }}>Products</h2>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-success btn-sm me-2">Export</button>
            <Link to="/AddProducts" className="btn btn-primary btn-sm">Add Product</Link>
          </div>
        </div>

        {/* 🔹 Second Row (Category + Search) */}
        <div className="row bg-white py-3 align-items-center">
          <div className="col-md-6 mb-2">
            <label style={{ fontWeight: "600", marginRight: "10px", fontSize: "10pt" }}>
              Category By:
            </label>
            <select className="form-select d-inline-block w-auto">
              <option value="10">Men's</option>
              <option value="20">Women's</option>
              <option value="30">Baby</option>
              <option value="40">Boys</option>
              <option value="50">Girls</option>
            </select>
          </div>

          {/* ✅ Searchbar with Icon */}
          <div className="col-md-6 mb-2 text-end">
            <div className="d-inline-flex align-items-center border rounded px-2 py-1">
              <FaSearch className="me-2 text-muted" />
              <input
                type="text"
                className="form-control form-control-sm border-0"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>
        </div>

        {/* 🔹 Table */}
        <div className="row bg-white py-2">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table  align-middle">
                <thead className="table-light">
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>PRODUCT</th>
                    <th>CATEGORY</th>
                    <th>SUBCATEGORY</th>
                    <th>PRICE</th>
                    <th>SALES</th>
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
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.subCategory}</td>
                      <td>{product.price}</td>
                      <td>
                        <div style={{ width: "120px", background: "#f1f1f1", borderRadius: "10px", overflow: "hidden" }}>
                          <div
                            style={{
                              width: `${product.sales}%`,
                              background: product.sales > 70 ? "green" : product.sales > 40 ? "orange" : "red",
                              height: "8px",
                            }}
                          ></div>
                        </div>
                        <small>{product.sales}%</small>
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
};

export default Products;
