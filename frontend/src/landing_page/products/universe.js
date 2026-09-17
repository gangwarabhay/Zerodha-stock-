import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <h1
        className="text-center text-muted"
        style={{ fontSize: "22px", fontWeight: "normal" }}
      >
        Want to know more about our technology stack? Check out the
        <a href=" " style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </h1>
      <div className="row">
        <h1 className="mt-5 text-center p-3 fs-4 text-muted">
          The Zerodha Universe
        </h1>
        <p className="text-center p-3 fs-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-3 p-5">
          <div className="col-3" style={{ marginLeft: "8%" }}>
            <img
              src="../media/images/ZerodhaFundhouse.png"
              alt="fundhouseLogo"
              style={{ width: "100%" }}
            />
            <p className="text-small text-muted mt-3 p-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
            <img
              src="../media/images/StreakLogo.png"
              alt="streakLogo"
              style={{ width: "100%", marginTop: "25px" }}
            />
            <p className="text-small text-muted mt-3 p-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-3" style={{ marginLeft: "50px" }}>
            <img
              src="../media/images/sensibullLogo.svg"
              alt="sensibullLogo"
              style={{ width: "100%" }}
            />
            <p className="text-small text-muted mt-3 p-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
            <img
              src="../media/images/smallcaseLogo.png"
              alt
="smallcaseLogo"  
              style={{ width: "100%", marginTop: "25px" }}
            />
            <p className="text-small text-muted mt-3 p-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div
            className="col-3"
            style={{
              marginRight: "5%",
              marginLeft: "50px",
            }}
          >
            <img
              src="../media/images/goldenpiLogo.png"
              alt="goldenpiLogo"
              style={{ width: "100%" }}
            />
            <p className="text-small text-muted mt-3 p-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
            <img
              src="../media/images/dittoLogo.png"
              alt="dittoLogo"
              style={{ width: "100%", height: "10%", marginTop: "25px" }}
            />
            <p className="text-small text-muted mt-3 p-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
        <button
          className="btn btn-primary p-2 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp For Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
