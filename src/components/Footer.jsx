import { useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  const disclaimer = `
    All content available on this Website is general in nature, not directed or tailored to any particular person, and is for informational purposes only. Neither the Website nor any of its content is offered as investment advice and should not be deemed as investment advice or a recommendation to purchase or sell any specific security. The information contained herein reflects the opinions and projections of Pareto as of the date hereof, which are subject to change without notice at any time. Pareto does not represent that any opinion or projection will be realized. Neither Pareto nor any of its advisers, officers, directors, or affiliates represents that the information presented on this Website is accurate, current, or complete, and such information is subject to change without notice. Any performance information must be considered in conjunction with applicable disclosures. Past performance is not a guarantee of future results. Neither this Website nor its contents should be construed as legal, tax, or other advice. Individuals are urged to consult with their own tax or legal advisers before entering into any advisory contract.
  `;

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Logo + Newsletter */}
        <div className="footer-left">
          <div className="logo">
            <img src="logo.svg" alt="Company Logo" />
          </div>

          <div className="newsletter">
            <p>Subscribe to our newsletter</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Brand Kit</a></li>
              <li><a href="#">Governance</a></li>
            </ul>
          </div>

          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="#">FAS_USDC</a></li>
              <li><a href="#">BAS_USDT</a></li>
              <li><a href="#">FAL_USDC</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><img src="/x.png" alt="Twitter" /></a>
          <a href="#"><img src="/insta.png" alt="Instagram" /></a>
          <a href="#"><img src="/fb.png" alt="Facebook" /></a>
          <a href="#"><img src="/link.png" alt="LinkedIn" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
        </div>

        <div className="footer-links-inline">
          <a href="#">IPFS app</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <hr />

      {/* Legal Disclaimer with Show More */}
      <div className="footer-disclaimer">
        <p>
          {showMore ? disclaimer : `${disclaimer.substring(0, 200)}...`}
        </p>
        <button
          className="see-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
