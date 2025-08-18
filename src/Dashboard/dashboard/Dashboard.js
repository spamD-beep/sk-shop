import React, { useState } from "react";
import dashBanner from "../../assets/img/dashBanner.png";
import { IoMdAdd } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 🟢 Chart Icons
import { IoGiftSharp, IoStatsChartSharp } from "react-icons/io5";
import { RiPieChartFill } from "react-icons/ri";
import { TbChartBubbleFilled } from "react-icons/tb";
import { TiSocialPinterestCircular } from "react-icons/ti";

const Dashboard = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = [
    {
      id: "P001",
      name: "Nike Shoes",
      category: "Fashion",
      subCategory: "Footwear",
      price: "Rs. 3,500",
      sales: 70, // % Sales
    },
    {
      id: "P002",
      name: "Smart Watch",
      category: "Electronics",
      subCategory: "Gadgets",
      price: "Rs. 6,200",
      sales: 45,
    },
    {
      id: "P003",
      name: "Leather Handbag",
      category: "Fashion",
      subCategory: "Accessories",
      price: "Rs. 2,800",
      sales: 90,
    },
  ];
  // 🟢 Orders Data
  const orders = [
    {
      orderId: "ORD001",
      paymentId: "PAY123",
      name: "Ali Khan",
      phone: "03001234567",
      address: "Lahore, Pakistan",
      pincode: "54000",
      amount: "Rs. 5,000",
      email: "ali@example.com",
      userId: "USR01",
      status: "Pending",
      date: "2025-08-17",
      products: [
        {
          productId: "P001",
          productName: "Shoes",
          image: "https://via.placeholder.com/50",
          quantity: 2,
          price: 2000,
        },
        {
          productId: "P002",
          productName: "Watch",
          image: "https://via.placeholder.com/50",
          quantity: 1,
          price: 1000,
        },
      ],
    },
    {
      orderId: "ORD001",
      paymentId: "PAY123",
      name: "Ali Khan",
      phone: "03001234567",
      address: "Lahore, Pakistan",
      pincode: "54000",
      amount: "Rs. 5,000",
      email: "ali@example.com",
      userId: "USR01",
      status: "Pending",
      date: "2025-08-17",
      products: [
        {
          productId: "P001",
          productName: "Shoes",
          image: "https://via.placeholder.com/50",
          quantity: 2,
          price: 2000,
        },
        {
          productId: "P002",
          productName: "Watch",
          image: "https://via.placeholder.com/50",
          quantity: 1,
          price: 1000,
        },
      ],
    },
    {
      orderId: "ORD001",
      paymentId: "PAY123",
      name: "Ali Khan",
      phone: "03001234567",
      address: "Lahore, Pakistan",
      pincode: "54000",
      amount: "Rs. 5,000",
      email: "ali@example.com",
      userId: "USR01",
      status: "Pending",
      date: "2025-08-17",
      products: [
        {
          productId: "P001",
          productName: "Shoes",
          image: "https://via.placeholder.com/50",
          quantity: 2,
          price: 2000,
        },
        {
          productId: "P002",
          productName: "Watch",
          image: "https://via.placeholder.com/50",
          quantity: 1,
          price: 1000,
        },
      ],
    },
    {
      orderId: "ORD001",
      paymentId: "PAY123",
      name: "Ali Khan",
      phone: "03001234567",
      address: "Lahore, Pakistan",
      pincode: "54000",
      amount: "Rs. 5,000",
      email: "ali@example.com",
      userId: "USR01",
      status: "Pending",
      date: "2025-08-17",
      products: [
        {
          productId: "P001",
          productName: "Shoes",
          image: "https://via.placeholder.com/50",
          quantity: 2,
          price: 2000,
        },
        {
          productId: "P002",
          productName: "Watch",
          image: "https://via.placeholder.com/50",
          quantity: 1,
          price: 1000,
        },
      ],
    },
    {
      orderId: "ORD002",
      paymentId: "PAY124",
      name: "Sara Ahmed",
      phone: "03007654321",
      address: "Karachi, Pakistan",
      pincode: "74000",
      amount: "Rs. 3,200",
      email: "sara@example.com",
      userId: "USR02",
      status: "Delivered",
      date: "2025-08-16",
      products: [
        {
          productId: "P003",
          productName: "Handbag",
          image: "https://via.placeholder.com/50",
          quantity: 1,
          price: 1200,
        },
        {
          productId: "P004",
          productName: "Sunglasses",
          image: "https://via.placeholder.com/50",
          quantity: 2,
          price: 1000,
        },
      ],
    },
  ];
  const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MARCH',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'APRIL',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUNE',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'JULY',
    uv: 8490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'AUG',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'SEP',
    uv: 1490,
    pv: 9300,
    amt: 2900,
  },
  {
    name: 'NOV',
    uv: 3490,
    pv: 6500,
    amt: 2100,
  },
  {
    name: 'DEC',
    uv: 2490,
    pv: 4300,
    amt: 2100,
  },
];
  const toggleProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };
    const toggleRow = (index) => {
      setExpandedRow(expandedRow === index ? null : index);
    };

  return (
    <div className="container">
      {/* Banner */}
      <div className="row bannerMain">
        <div className="col-8 banner">
          <span style={{ fontSize: "19pt", fontWeight: "800" }}>
            Good Morning,
            <br /> Cameron
          </span>
          <span>
            Here's what happening on your store today. See the statistics at
            once.
          </span>
          <a href="#">
            <IoMdAdd /> Add Product
          </a>
        </div>
        <div className="col-4">
          <img src={dashBanner} height="250px" alt="dashboard banner" />
        </div>
      </div>

      {/* Charts Row */}
      <div className="row chartRow">
        <div className="chart">
          <IoGiftSharp style={{ color: "blue", fontSize: "20pt" }} />
          <span>
            New Orders <br />
            <span style={{ color: "black", fontWeight: "600" }}>1,390</span>
          </span>
          <IoStatsChartSharp style={{ color: "blue", fontSize: "20pt" }} />
        </div>
        <div className="chart">
          <RiPieChartFill style={{ color: "#17fd06ff", fontSize: "20pt" }} />
          <span>
            Sales <br />
            <span style={{ color: "black", fontWeight: "600" }}>$57,890</span>
          </span>
          <IoStatsChartSharp style={{ color: "#17fd06ff", fontSize: "20pt" }} />
        </div>
        <div className="chart">
          <TbChartBubbleFilled style={{ color: "purple", fontSize: "20pt" }} />
          <span>
            Revenue <br />
            <span style={{ color: "black", fontWeight: "600" }}>$12,390</span>
          </span>
          <IoStatsChartSharp style={{ color: "purple", fontSize: "20pt" }} />
        </div>
        <div className="chart">
          <TiSocialPinterestCircular
            style={{ color: "#fa8405ff", fontSize: "20pt" }}
          />
          <span>
            New Orders <br />
            <span style={{ color: "black", fontWeight: "600" }}>1,390</span>
          </span>
          <IoStatsChartSharp style={{ color: "#fa8405ff", fontSize: "20pt" }} />
        </div>
      </div>
      <div className="row productRow">
        <div className="col bg-white py-2">
          <h2 className="py-2" style={{ fontSize: "14pt", fontWeight: "600" }}>
            Products
          </h2>
          {/* 🟢 Category + Buttons Row */}
<div style={{ 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center", 
  marginBottom: "15px" 
}}>
  
  {/* Category Select */}
  <div>
    <label style={{ fontWeight: "600", marginRight: "10px", fontSize:"10pt" }}>
      Category By:
    </label>
    <select
      style={{
        padding: "5px 10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    >
      <option value="10">Men's</option>
      <option value="20">Women's</option>
      <option value="30">Baby</option>
      <option value="40">Boys</option>
      <option value="50">Girls</option>
    </select>
  </div>

  {/* Buttons */}
  <div>
    <button 
      style={{ 
        background:"green",
        color:"white",
        border:"none",
        padding:"6px 12px",
        borderRadius:"5px",
        marginRight:"8px",
        fontSize:"10pt",
        cursor:"pointer"
      }}
    >
      Export
    </button>

    <button 
      style={{ 
        background:"blue",
        color:"white",
        border:"none",
        padding:"6px 12px",
        borderRadius:"5px",
        fontSize:"10pt",
        cursor:"pointer"
      }}
    >
      Add Product
    </button>
  </div>
</div>

          <div className="table-container">
            <table>
              <thead>
                <tr className="tablerow">
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>SUBCATEGORY</th>
                  <th>PRICE</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
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
                      <div
                        style={{
                          width: "120px",
                          background: "#f1f1f1",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${product.sales}%`,
                            background:
                              product.sales > 70
                                ? "green"
                                : product.sales > 40
                                ? "orange"
                                : "red",
                            height: "8px",
                          }}
                        ></div>
                      </div>
                      <small>{product.sales}%</small>
                    </td>
                    <td>
                      <button
                        style={{
                          background: "blue",
                          color: "white",
                          border: "none",
                          padding: "4px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          background: "red",
                          color: "white",
                          border: "none",
                          padding: "4px 10px",
                          borderRadius: "5px",
                          marginLeft: "5px",
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Recent Orders */}
      <div className="row orderRow">
        <div className="col bg-white py-2">
          <h2 className="py-2" style={{ fontSize: "14pt", fontWeight: "600" }}>
            Recent Orders
          </h2>
          <div className="table-container">
            <table>
              <thead>
                <tr className="tablerow">
                  <th></th>
                  <th>ORDER ID</th>
                  <th>PAYMENT ID</th>
                  <th>NAME</th>
                  <th>PHONE NUMBER</th>
                  <th>ADDRESS</th>
                  <th>PINCODE</th>
                  <th>TOTAL AMOUNT</th>
                  <th>EMAIL</th>
                  <th>USER ID</th>
                  <th>ORDER STATUS</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      {/* Arrow toggle */}
                      <td
                        onClick={() => toggleRow(index)}
                        style={{ cursor: "pointer" }}
                      >
                        {expandedRow === index ? (
                          <IoIosArrowUp
                            style={{ fontSize: "16pt", color: "gray" }}
                          />
                        ) : (
                          <IoIosArrowDown
                            style={{ fontSize: "16pt", color: "gray" }}
                          />
                        )}
                      </td>
                      <td>{order.orderId}</td>
                      <td>{order.paymentId}</td>
                      <td>{order.name}</td>
                      <td>{order.phone}</td>
                      <td>{order.address}</td>
                      <td>{order.pincode}</td>
                      <td>{order.amount}</td>
                      <td>{order.email}</td>
                      <td>{order.userId}</td>
                      <td>{order.status}</td>
                      <td>{order.date}</td>
                    </tr>

                    {/* Expanded Products */}
                    {expandedRow === index && (
                      <tr>
                        <td colSpan="12" style={{ background: "#fafafa" }}>
                          <table
                            className="tablerow"
                            style={{ width: "100%", marginTop: "5px" }}
                          >
                            <thead>
                              <tr style={{ background: "#f1f1f1" }}>
                                <th>PRODUCT ID</th>
                                <th>PRODUCT TITLE</th>
                                <th>IMAGE</th>
                                <th>QUANTITY</th>
                                <th>PRICE</th>
                                <th>SUB TOTAL</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.products.map((p, i) => (
                                <tr key={i}>
                                  <td>{p.productId}</td>
                                  <td>{p.productName}</td>
                                  <td>
                                    <img
                                      src={p.image}
                                      alt={p.productName}
                                      width="40"
                                    />
                                  </td>
                                  <td>{p.quantity}</td>
                                  <td>Rs. {p.price}</td>
                                  <td>Rs. {p.price * p.quantity}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row graphRow ">
      <div className="col bg-white py-4" style={{ width: "100%", height: "500px" }}>
  <h2 className="py-3" style={{ fontSize: "14pt", fontWeight: "600" }}>
    Total Users & Total Sales
  </h2>

  {/* ✅ Circles with labels */}
  <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "#82ca9d", // green
        }}
      ></div>
      <span style={{ fontSize: "12pt", fontWeight: "500" }}>Total Users</span>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "#8884d8", // blue
        }}
      ></div>
      <span style={{ fontSize: "12pt", fontWeight: "500" }}>Total Sales</span>
    </div>
  </div>

  <ResponsiveContainer width="100%" height="80%">
    <LineChart
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="none" />
      <XAxis dataKey="name" tick={{fontSize:"12"}}/>
      <YAxis tick={{fontSize:"12"}} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" strokeWidth={3} stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" strokeWidth={3} stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
</div>

</div>
      </div>
  
  );
};

export default Dashboard;
