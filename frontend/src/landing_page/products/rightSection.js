import React from "react";
function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 p-5 mt-5">
          <h1 className="text-muted fs-3">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-6" style={{ marginLeft: "15%" }}>
          <img src={imageURL} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
