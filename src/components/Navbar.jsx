import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Center: Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>Product</li>
        <li>Features</li>
        <li>Partners</li>
        {/* On mobile, button shows inside dropdown */}
        <li className="mobile-btn">
          <button className="enter-btn">Enter App</button>
        </li>
      </ul>

      {/* Right: Button (desktop only) */}
      <button className="enter-btn desktop-btn">Enter App</button>

      {/* Hamburger (only mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
