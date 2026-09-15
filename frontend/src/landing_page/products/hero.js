import React from "react";
function Products() {
  return (
    <div className="container mt-5">
      <div className="row text-center text-muted mt-5 p-5 mb-5">
        <h1 className="fs-3">Zerodha Products</h1>
        <h3 className="mt-3" style={{ fontSize: "1.2em" }}>
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our <a href=" ">investment offerings</a>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="bi"
            viewBox="0 0 16 16"
            aria-hidden="true"
            style={{ width: "2%" }}
          >
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Products;
