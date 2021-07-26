import React from "react";
import { NavLink } from "react-router-dom";
import Navbar2 from "../Navbar2/Navbar2";
import "./navbar1.css";

const Navbar1 = () => {
  return (
    <div className="fixed-top">
      <div className="nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg  navbar-light ">
              <div className="container-fluid">
                <NavLink className="navbar-brand ms-5" to="/">
                  <img src="../images/logo.png" alt="" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  NavLink
                  ria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        <i class="fab fa-blogger-b"></i> Blog
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/service"
                      >
                        <i class="fas fa-shopping-cart"></i> Cart
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/"
                      >
                        <select class="currency-selector">
                          <option
                            data-symbol="$"
                            data-placeholder="0.00"
                            selected
                          >
                            USD
                          </option>
                          <option data-symbol="€">EUR</option>
                          <option data-symbol="£">GBP</option>
                          <option data-symbol="¥"> JPY</option>
                          <option data-symbol="$">CAD</option>
                          <option data-symbol="$">AUD</option>
                        </select>
                      </NavLink>
                    </li>

                    <li className="nav-item me-5">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Sign In / Register
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Navbar2 />
    </div>
  );
};

export default Navbar1;
