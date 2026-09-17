import React from "react";
function Hero() {
  return (
    <div className="container text-center " id="supportHero">
      <div className="row text-center ">
        <div className="col-6 ">
          <p>Support Portal</p>
        </div>
        <div className="col-6">
          <p
            style={{
              text: "white",
            }}
          >
            Track Tickets
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-8">
          <h1 className="fs-5">
            Serach for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text-field"
            placeholder="Eg: how do i activate F&O,why is my order getting rejected"
          ></input>
          <div className="p-3 mt-2 ">
            <a href=" ">Track account opening</a>
            <a href=" ">Track segment activation</a>
            <a href=" ">intraday</a>
            <a href=" ">margins</a>
            <a href=" ">Kite user manuals</a>
          </div>
        </div>
        <div className="col-4">
          <h1 className="fs-5">Featured</h1>
          <ol>
            <li>
              <a href=" ">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href=" ">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
