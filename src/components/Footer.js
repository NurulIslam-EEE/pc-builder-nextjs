import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGreaterThan,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content-container">
          <div className="footer-first-content">
            <h5>TECH WORLD</h5>
          </div>

          <div className="footer-second-content">
            <h3 className="footer-title-hr">CONTACT</h3>
            <p className="d-flex align-items-center">{"   "}(917) 642-5286</p>
            <p className="d-flex align-items-center">hoquebk@yahoo.com</p>
            <p className="d-flex align-items-center">
              {"  "}422 8th Avenue Brooklyn ,NY 11232
            </p>
          </div>
          <div className="footer-third-content">
            <h3 className="footer-title-hr">SERVICES</h3>
            <div className="footer-service d-flex">
              <ul>
                <li>Pc build</li>
                <li>Accesories</li>
                <li>Computer service</li>
              </ul>
            </div>
          </div>

          <div className="footer-social-part">
            <h3 className="footer-title-hr">QUICKS LINKS</h3>

            <div>
              {" "}
              <Link className="footer-link" href="/about">
                About Us
              </Link>
            </div>

            <div>
              {" "}
              <Link className="footer-link" href="/project">
                Project
              </Link>
            </div>

            <div>
              {" "}
              <Link className="footer-link" href="/contact">
                Contact
              </Link>
            </div>

            <div>
              {" "}
              <Link className="footer-link" href="/services">
                Service
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="footer-copyright-bar">
        <div className="footer-copyright container">
          <div>
            {" "}
            Copyright © {new Date().getFullYear()} TECH WORLD. All rights
            reserved.
          </div>

          <div className="footer-social-container">
            <div className="footer-social-icon">
              <FaTwitter className="f-icon" />
            </div>
            <div className="footer-social-icon">
              <FaFacebookF className="f-icon" />
            </div>
            <div className="footer-social-icon">
              <FaLinkedinIn className="f-icon" />
            </div>
            <div className="footer-social-icon">
              <FaInstagram className="f-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
