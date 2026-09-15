import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL || ""}/signup`,
        formData,
        { withCredentials: true },
      );
      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to create your account. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container p-5 mt-5 mb-5" style={{ maxWidth: "480px" }}>
      <h1 className="fs-3 text-center mb-4">Create an account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Signup"}
        </button>
      </form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;
