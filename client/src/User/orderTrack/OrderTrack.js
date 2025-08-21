import React, { useState } from "react";
 // 👈 custom css
import '../../css/style.css'
const OrderTrack = () => {
  const [orderId, setOrderId] = useState("");
  const [trackingData, setTrackingData] = useState(null);

  // Dummy Tracking Status
  const dummyTracking = {
    id: "ORD12345",
    status: "Out for Delivery",
    steps: ["Ordered", "Shipped", "Out for Delivery", "Delivered"],
  };

  const handleTrack = (e) => {
    e.preventDefault();
    if (orderId === dummyTracking.id) {
      setTrackingData(dummyTracking);
    } else {
      setTrackingData({ error: "Order not found!" });
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center text-success">Order Tracking</h2>

      {/* Form */}
      <form
        onSubmit={handleTrack}
        className="d-flex gap-2 mb-5 mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <input
          type="text"
          placeholder="Enter Order ID"
          className="form-control"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button type="submit" className="btn btn-success px-4">
          Track
        </button>
      </form>

      {/* Result */}
      {trackingData && (
        <div className="bg-white p-4 rounded shadow-sm text-center">
          {trackingData.error ? (
            <p className="text-danger">{trackingData.error}</p>
          ) : (
            <>
              <h5 className="mb-3">Order ID: {trackingData.id}</h5>
              <p className="mb-4">
                Current Status:{" "}
                <span className="fw-bold text-primary">{trackingData.status}</span>
              </p>

              {/* Progress Timeline */}
              <div className="order-progress">
                {trackingData.steps.map((step, index) => {
                  const isActive = step === trackingData.status;
                  const isCompleted =
                    trackingData.steps.indexOf(trackingData.status) >= index;

                  return (
                    <div
                      key={index}
                      className={`step ${isCompleted ? "completed" : ""} ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <div className="circle">{index + 1}</div>
                      <p className="mt-2">{step}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderTrack;
