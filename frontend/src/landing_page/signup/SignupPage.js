import React, { useState } from "react";
import axios from "axios";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    created_at: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SIGNUP BUTTON CLICKED");
    console.log("Form data:", formData);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_VERCEL_URL}/signup`,
        formData,
      );

      console.log("Backend response:", response.data);

      alert("Signup successful!");

      // Change this to your actual dashboard URL
      window.location.href =  `${process.env.REACT_APP_DASHBOARD_URL}/`;
    } catch (error) {
      console.error("Signup error:", error);
      console.error("Backend response:", error.response?.data);

      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <section
      className="vh-50 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    {/* Username */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />

                      <label className="form-label" htmlFor="username">
                        Your Name
                      </label>
                    </div>

                    {/* Email */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                    </div>

                    {/* Password */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />

                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>

                    {/* Created At */}
                    <div className="form-outline mb-4">
                      <input
                        type="date"
                        id="created_at"
                        name="created_at"
                        className="form-control form-control-lg"
                        value={formData.created_at}
                        onChange={handleChange}
                        required
                      />

                      <label className="form-label" htmlFor="created_at">
                        Created At
                      </label>
                    </div>

                    {/* Terms */}
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="terms"
                        required
                      />

                      <label className="form-check-label" htmlFor="terms">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    {/* Submit */}
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
