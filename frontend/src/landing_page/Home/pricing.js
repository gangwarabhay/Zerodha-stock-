import React from "react";
function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges..
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing <i class="fa-regular fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
            <div className="row text-center">
                <div className="col-6 border">
                    <h2 className="fs-5 mb-3 p-3">₹0</h2>
                    <p className="text-muted">
                        No hidden charges. Just flat fees for all your trades.
                    </p>
                </div>
                <div className="col-6 border">
                    <h2 className="fs-5 mb-3 p-3">₹20</h2>
                    <p className="text-muted">
                        No hidden charges. Just flat fees for all your trades.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
