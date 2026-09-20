import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container-fluid">

        {/* Zerodha Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            style={{ width: "90px" }}
            alt="Zerodha Logo"
          />
        </Link>

        {/* Mobile Navbar Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          {/* Right Side Menu */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* Signup */}
            <li className="nav-item">
              <Link className="nav-link active" to="/SignUp">
                Signup
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Products
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            
            {/* Pricing */}
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            {/* Support */}
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            {/* Menu Icon */}
            <li className="nav-item">
              <Link className="nav-link active" to="/menu">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;