import React, { useState, useEffect } from "react";
import "../styles/HeroCard.css";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.png";


const cards = [
  {
    id: 1,
    title: "FalconX",
    subtitle: "Prime Brokerage",
    logo: b1,
    headerColor: "#dff5e3",
    points: ["USDC", "Fixed rate"],
    description:
      "Lending funds to an SPV managed by a top-tier Prime Broker, providing financing to end-counterparties while being secured by structural protections.",
    stats: { TVL: "$30m", APY: "Hidden", Redemptions: "Monthly" },
  },
  {
    id: 2,
    title: "Bastion Trading",
    subtitle: "Market Making",
    logo: b2,
    headerColor: "#e6f0ff",
    points: ["USDT", "Fixed rate"],
    description:
      "Fixed rate loan channeling funds into derivatives trading and market-making strategies.",
    stats: { TVL: "$30m", APY: "Hidden", Redemptions: "Monthly" },
  },
  
];

const HeroCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeCard = cards[activeIndex];

  return (
    <div className="hero-card">
      <div className="card fade-in">
        {/* Top header */}
        <div
          className="card-header"
          style={{ backgroundColor: activeCard.headerColor }}
        >
          <img src={activeCard.logo} alt="logo" className="topcard-logo" />
          <div className="topcard-text">
            <h3>{activeCard.title}</h3>
            <p className="subtitle">{activeCard.subtitle}</p>
          </div>
        </div>

        {/* Points */}
        <div className="points">
          {activeCard.points.map((p, i) => (
            <span key={i}>{p}</span>
          ))}
        </div>

        {/* Description */}
        <p className="description">{activeCard.description}</p>

        {/* Stats */}
        <div className="card-stats">
          <div>
            <p className="label">TVL</p>
            <p className="value">{activeCard.stats.TVL}</p>
          </div>
          <div>
            <p className="label">Net APY</p>
            <p className="value">{activeCard.stats.APY}</p>
          </div>
          <div>
            <p className="label">Redemptions</p>
            <p className="value">{activeCard.stats.Redemptions}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="card-tabs">
        {cards.map((card, index) => (
          <span
            key={card.id}
            className={index === activeIndex ? "tab active" : "tab"}
            onClick={() => setActiveIndex(index)}
          >
            {card.title.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;
