import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Massacheuts </h3>
        <p>10 Elm Danvers Street</p>
        <p>United States</p>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <p>
          <Link to="/contact">Contact Us</Link>
        </p>
        <p>
          <Link to="/chatgpt">Help Center</Link>
        </p>
      </div>
      <div className="footer-section">
        <h3>Resources</h3>
        <p>
          <Link to="/gallery">Gallery</Link>
        </p>
        <p>
          <Link to="/support">Support</Link>
        </p>
      </div>
      <div className="footer-section">
        <h3>Account</h3>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
      <div className="footer-bottom">
        <p>
          forREAL © 2024. All rights reserved. Terms, features, and pricing
          subject to change without notice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
