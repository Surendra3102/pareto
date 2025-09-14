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
        <li><a href='#product'>Product</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#partners'>Partners</a></li>
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
