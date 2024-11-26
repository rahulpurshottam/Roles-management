import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">VRV Security</h5>
            <p>
              Protecting your digital assets with state-of-the-art AI-driven
              solutions. Trusted by global leaders in cybersecurity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="footer-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 VRV Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
