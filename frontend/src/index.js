import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "../src/landing_page/Home/HomePage";
import SignupPage from "./landing_page/signup/SignupPage";
import AboutPage from "../src/landing_page/about/AboutPage";
import ProductPage from "../src/landing_page/products/ProductPage";
import SupportPage from "../src/landing_page/support/SupportPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Navbar from "../src/landing_page/navbar";
import Footer from "../src/landing_page/footer";
import NotFound from "../src/landing_page/notFound";
import Signup from "./landing_page/signup/SignupPage";
import LogIn from "./landing_page/login/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
