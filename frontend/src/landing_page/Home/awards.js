import React from "react";
function awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="../media/images/largestBroker.svg"
            alt="Award Image"
            className="mb-5"
          />
        </div>
        <div className="col-6 mt-3">
          <h1 className="fs-4"> Largest stock broker in India </h1>
          <p className="mb-2">
            We are the largest stock broker in India with over 5 million
            clients. We are also the first stock broker in India to be ISO 27001
            certified for information security.
          </p>
          <div className="row mb-5">
            <div className="col-6 p-5">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>comodity Derivatives</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 p-5">
              <ul>
                <li>
                  <p>Stock & Ipos</p>
                </li>
                <li>
                  <p>Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds & Security</p>
                </li>
              </ul>
            </div>
            <img src="../media/images/pressLogos.png" alt="Press Logos" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default awards;
