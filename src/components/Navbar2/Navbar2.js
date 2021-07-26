import React from "react";
import "./Navbar2.css";
const Navbar2 = () => {
  return (
    <>
      <div className="wrapper shadow2">
        <nav data-spy="affix" data-offset-top="197">
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label for="show-menu" className="menu-icon">
            <i className="fas fa-bars"></i>
          </label>
          <div className="content">
            <div className="logo">{/* <a to="/"></a> */}</div>
            <ul className="links">
              <li>
                <a href="/" className="desktop-link">
                  Music & Audio
                </a>
                <input type="checkbox" id="show-features" />
                <label for="show-features">Music & Audio</label>
                <ul className="navbar_card">
                  <li>
                    <a href="/">Voice Over</a>
                  </li>
                  <li>
                    <a href="/">Podcast</a>
                  </li>
                </ul>
              </li>{" "}
              <li>
                <a href="/" className="desktop-link">
                  Programming & Tech
                </a>
                <input type="checkbox" id="show-features" />
                <label for="show-features">Programming & Tech</label>
                <ul className="navbar_card">
                  <li>
                    <a href="/">Web Development</a>
                  </li>
                  <li>
                    <a href="/">Tech Marketing</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="desktop-link">
                  Digital Marketing
                </a>
                <input type="checkbox" id="show-features" />
                <label for="show-features">Digital Marketing</label>
                <ul className="navbar_card">
                  <li>
                    <a href="/">Social Media Marketing </a>
                  </li>
                  <li>
                    <a href="/">Video Marketing </a>
                  </li>
                  <li>
                    <a href="/">influencer Marketing </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/" className="desktop-link">
                  Writing & Translation
                </a>
                <input type="checkbox" id="show-features" />
                <label for="show-features">Writing & Translation</label>
                <ul className="navbar_card">
                  <li>
                    <a href="/">Articles & Blog Posts </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Graphics & Design</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;
