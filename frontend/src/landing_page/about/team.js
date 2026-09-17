import React from "react";
function hero() {
  return (
    <div className="container border-top mb-5">
      <div classname="row mt-5 p-5">
        <h1 className="fs-4 text-center mt-5">People</h1>
      </div>
      <div
        className="row p-5 mt-5 text-muted"
        style={{ fontSize: "1em", lineHeight: "1.8" }}
      >
        <div className="col-6 p-5">
          <img
            src="../media/images/nithinKamath.jpg"
            alt="founder"
            style={{ borderRadius: "50%", width: "70%", marginLeft: "50px" }}
          />
          <p className="text-center fs-5">Nithin Kamath</p>
          <p className="text-center">Founder, CEO</p>
        </div>
        <div className="col-6 p-5" style={{ textDecoration: "none" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="/">Homepage</a> /<a href=" ">TradingQnA</a> /
            <a href=" ">Twitter</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default hero;
