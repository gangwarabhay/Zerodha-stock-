import React from "react";
function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
           thats why 6+ cr clients trust us with their money. We are the largest stock broker in India with over 5 million clients. .
          </p>
          <h2 className="fs-4" >No spam or gimmicks</h2>
          <p className="text-muted">
         No spam or gimmicks. We are the largest stock broker in India with over 5 million clients. .
          </p>
          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with Money</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
          </p>
        </div>
        <div className="col-6 mt-5 p-5">
          <img
            src="../media/images/ecosystem.png"
            alt="Stats Image"
            style={{ width: "85%" }}
          />
          <div className="d-flex justify-content-between mt-5 mr-3">
            <a href="" className="btn btn-primary">
              Explore our Products
            </a>
             <a href="" className="btn btn-primary">
              Try Kite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
