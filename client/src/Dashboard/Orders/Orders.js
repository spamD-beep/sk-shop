import React,{useState} from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Orders = () => {
    const [expandedRow, setExpandedRow] = useState(null);
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
    const toggleRow = (index) => {
      setExpandedRow(expandedRow === index ? null : index);
    };
  return (
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
  )
}

export default Orders
