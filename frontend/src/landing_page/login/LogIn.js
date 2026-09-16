import React from "react";
import { useState } from "react";
import axios from "axios";
function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LogIn BUTTON CLICKED");
    console.log("Form data:", formData);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_VERCEL_URL}/login`,
        formData,
      );
      console.log("Backend response:", response.data);
      alert("Login successful!");
      window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/`;
    } catch (error) {
      console.error("Signup error:", error);
      console.error("Backend response:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="username"
    //     placeholder="Username"
    //     value={formData.username}
    //     onChange={handleChange}
    //   />

    //   <input
    //     type="email"
    //     name="email"
    //     placeholder="Email"
    //     value={formData.email}
    //     onChange={handleChange}
    //   />

    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="Password"
    //     value={formData.password}
    //     onChange={handleChange}
    //   />

    //   <input
    //     type="Date"
    //     name="created_at"
    //     placeholder="Created At"
    //     value={formData.created_at}
    //     onChange={handleChange}
    //   />

    //   <button type="submit">Sign Up</button>
    // </form>
    <section
      class="vh-70 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{ borderRadius: "15px" }}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Login Your account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label class="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <label class="form-label" for="form3Example4cg">
                        Password
                      </label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Login
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Go To Home?{" "}
                      <a href="/" class="fw-bold text-body">
                        <u>Return Home</u>
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

export default LogIn;
