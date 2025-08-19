import React from "react";

const HelpCenter = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-success mb-4">Help Center</h2>
      <p className="text-center text-muted mb-5">
        Need assistance? Browse our FAQs or contact us directly.
      </p>

      {/* 🔹 FAQ Section */}
      <div className="mb-5">
        <h4 className="mb-3">Frequently Asked Questions</h4>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How can I track my order?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show">
              <div className="accordion-body">
                You can track your order using the <b>Order Tracking</b> page by
                entering your Order ID.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                What payment methods are available?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse">
              <div className="accordion-body">
                We accept Credit/Debit Cards, PayPal, and Cash on Delivery.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                How can I contact customer support?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse">
              <div className="accordion-body">
                You can contact us via email at{" "}
                <a href="mailto:support@example.com">support@example.com</a> or
                call us at <b>+92 300 1234567</b>.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Contact Form */}
      <div className="bg-light p-4 rounded shadow-sm">
        <h4 className="mb-3">Contact Us</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" placeholder="John Doe" />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success px-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpCenter;
