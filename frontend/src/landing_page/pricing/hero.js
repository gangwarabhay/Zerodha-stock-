import React from "react";
function Hero() {
  return (
    <div className="container mt-5 mb-5">
      <div classname="row mt-5 p-5">
        <h1 className="fs-3 text-muted text-center mb-2">Pricing</h1>
        <p className="text-center fs-4 text-muted">
          List of all charges and taxes
        </p>
      </div>
      <div className="mt-5 mb-5">
        <hr />
      </div>
      <div className="row mt-5 p-4 text-muted">
        <div className="col-4 p-4">
          <img src="../media/images/pricing0.svg" />
          <h1 className="fs-3 mb-3">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="../media/images/intradayTrades.svg" />
          <h1 className="fs-3 mb-3">Intraday and F&O</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="../media/images/pricingMF.svg" />
          <h1 className="fs-3 mb-3">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
