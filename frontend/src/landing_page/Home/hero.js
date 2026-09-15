import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="../media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5 fs-3">Invest in everything</h1>
        <p>online platform to invet in stocks,derivatives,mutual funds.</p>
        <button
          className="btn btn-primary p-2 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
