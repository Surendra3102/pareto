// src/components/CreditSlider.jsx
import React, { useState, useEffect } from "react";
import "../styles/Creditshow.css";
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/f1.png';

const slides = [
  {
    title: "Lend",
    description:
      "Expand your fixed-income portfolio with structured yield strategies tailored to diverse risk profiles. Self-onboard seamlessly via privacy-preserving, compliant KYC, so you can focus on optimizing returns.",
    img: t1,
    buttons: [
      { text: "Open in App", type: "primary" },
      { text: "Documents", type: "secondary" },
    ],
    points: [
      { heading: "1. Explore Credit Vaults", text: "Each market is uniquely structured based on borrower profiles, supported assets, blockchain networks, and loan terms." },
      { heading: "2. Execute Loan Agreement", text: "Formalize credit terms by signing a legally binding agreement that outlines borrower obligations and lender rights." },
      { heading: "3. Asset Deployment", text: "Allocate assets to credit vaults, receive interest-bearing credit tokens in return, and use them across DeFi." },
      { heading: "4. Seamless KYC Verification", text: "Access eligibility is verified through zk-proofed KYC, ensuring compliance and privacy." },
    ],
    color: "#f0f6f7",
  },
  {
    title: "Borrow",
    description:
      "Streamline the creation and securitization of your credit - interest rates, lockup periods, withdrawal cycles, reserve ratios, risk-adjusted tranches: construct the credit line that works best for you.",
    img: t2,
    buttons: [{ text: "Open in App", type: "primary" }],
    points: [
      { heading: "1. Get Onboarded", text: "Prospective borrowers undergo a due diligence process before gaining access to a credit vault." },
      { heading: "2. Vault Configuration", text: "Borrowers set key parameters like loan duration, interest rate model, early exit terms, tranche structure, preferred KYC processes, and utilize an available legal framework." },
      { heading: "3. Yield Generation", text: "Once a loan cycle commences, borrowers receive funds directly into their designated wallet." },
      { heading: "4. Interest Payment", text: "Credit Vaults automate accounting. Borrowers must pay interest at the end of each cycle; unclaimed interest returns to the lending pool." },
    ],
    color: "#d4dddd", // ✅ fixed hex
  },
  {
    title: "Curate",
    description:
      "Leverage your underwriting expertise on-chain to enhance capital efficiency, mitigate counterparty risk, and elevate market transparency with institutional-grade credit structuring.",
    img: t3,
    buttons: [{ text: "Open in App", type: "primary" }],
    points: [
      { heading: "1. Curator Onboarding", text: "Curators undergo a comprehensive due diligence process before being authorized to manage a Credit Vault" },
      { heading: "2. Vault Configuration", text: "Curators can set vault fees and earn from their curatorship." },
      { heading: "3. Curator App", text: "Curators have access to a dedicated application that provides real-time visibility." },
      { heading: "4. Performance and Risk Reporting", text: "Curators oversee the generation and distribution of reports on vault performance and risk exposures." },
    ],
    color: "#c7eff6ff", // ✅ different valid color
  }
];

function CreditSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div className="creditbox">
      {/* ✅ unique key per slide */}
      <div key={current.title} className="gridbanner slide-up">
        {/* Left side */}
        <div className="lend" style={{ backgroundColor: current.color }}>
          <h1 className="grid-title">{current.title}</h1>
          <p>{current.description}</p>
          <img src={current.img} alt="coins" className="coin-image" />
          <div className="button-container">
            {current.buttons.map((btn, i) => (
              <a
                key={i}
                href="#"
                className={btn.type === "primary" ? "open-app-button" : "documents-button"}
              >
                {btn.text}
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="points">
          {current.points.map((p, i) => (
            <div key={i} className="point-item fade-in">
              <strong>{p.heading}</strong>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreditSlider;
