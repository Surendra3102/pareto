import React from "react";
import "../styles/WaveBackground.css";

const WaveBackground = () => {
  return (
    <div className="wave-container">
      {/* Left Wave */}
      <svg
        className="wave wave-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C150,100 350,300 500,200 L500,00 L0,0 Z"
          fill="none"
          stroke="#4caf50"
          strokeWidth="1"
        />
      </svg>

      {/* Right Wave */}
      <svg
        className="wave wave-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 C150,400 350,200 500,300 L500,500 L0,500 Z"
          fill="none"
          stroke="#4caf50"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
