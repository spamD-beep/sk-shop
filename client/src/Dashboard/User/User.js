import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const User = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const usersPerPage = 5;

  // 🟢 Dummy Users Data
  const users = [
    { id: "U001", name: "Ali Khan", email: "ali@example.com", phone: "0312-1234567", image: "https://i.pravatar.cc/40?img=1" },
    { id: "U002", name: "Sara Ahmed", email: "sara@example.com", phone: "0321-9876543", image: "https://i.pravatar.cc/40?img=2" },
    { id: "U003", name: "Hassan Raza", email: "hassan@example.com", phone: "0333-4445566", image: "https://i.pravatar.cc/40?img=3" },
    { id: "U004", name: "Ayesha Noor", email: "ayesha@example.com", phone: "0345-1112233", image: "https://i.pravatar.cc/40?img=4" },
    { id: "U005", name: "Bilal Iqbal", email: "bilal@example.com", phone: "0300-6543210", image: "https://i.pravatar.cc/40?img=5" },
    { id: "U006", name: "Maryam Fatima", email: "maryam@example.com", phone: "0308-5554433", image: "https://i.pravatar.cc/40?img=6" },
  ];

  // 🔍 Search filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📄 Pagination Logic
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // ✅ Select/Deselect Row
  const handleCheckboxChange = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((uid) => uid !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  // ✅ Select/Deselect All
  const handleSelectAll = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]); // Unselect all
    } else {
      setSelectedUsers(currentUsers.map((u) => u.id)); // Select all
    }
  };

  return (
    <div className="row productRow">
      <div className="col bg-white py-2">
        {/* 🟢 Header with Search */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <h2 style={{ fontSize: "14pt", fontWeight: "600" }}>Users List</h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "20px",
              padding: "5px 10px",
              background: "#f9f9f9",
            }}
          >
            <FaSearch style={{ marginRight: "8px", color: "#666" }} />
            <input
              type="text"
              placeholder="Search user..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // reset page on new search
              }}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "13px",
              }}
            />
          </div>
        </div>

        {/* 🟢 Table */}
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={
                      selectedUsers.length === currentUsers.length &&
                      currentUsers.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE NO</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleCheckboxChange(user.id)}
                    />
                  </td>
                  <td>
                    <img
                      src={user.image}
                      alt={user.name}
                      style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 🟢 Pagination */}
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              background: currentPage === 1 ? "#eee" : "#fff",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                margin: "0 3px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                background: currentPage === index + 1 ? "#007bff" : "#fff",
                color: currentPage === index + 1 ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              background: currentPage === totalPages ? "#eee" : "#fff",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
