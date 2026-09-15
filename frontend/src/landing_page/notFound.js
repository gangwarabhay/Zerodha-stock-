import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center p-5 mt-5 mb-5">
      <h1 className="fs-1 text-muted">404</h1>
      <p className="fs-4">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
