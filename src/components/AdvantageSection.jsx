import { useState } from "react";
import "../styles/Advantage.css";
import ad2 from "../assets/ad2.png";
import ad1 from "../assets/ad1.png";
import ad4 from "../assets/ad4.png";
import ad3 from "../assets/ad3.png";



const AdvantageSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "Lower cost of capital",
      content:
        "A decentralized infrastructure that compresses the costs of traditional off-chain securitization and uses open-source services to reduce the intermediary costs and complexity of TradFi.",
      icon: ad2,
    },
    {
      title: "End-to-end transparency",
      content:
        "Blockchain-based systems ensure visibility into every stage of transactions, providing trust and auditability for all participants.",
      icon: ad1,
    },
    {
      title: "Built for DeFi",
      content:
        "Our protocol is designed to integrate seamlessly with decentralized finance ecosystems, ensuring accessibility and flexibility.",
      icon: ad4
    },
    {
      title: "Flexible ownership",
      content:
        "Ownership rights are programmable and transferable, enabling new models of liquidity and governance.",
      icon: ad3.png
    },
  ];

  return (
    <section className="advantage-section">
      <div className="advantage-left">
        <h4 className="small-heading">OUR ADVANTAGE</h4>
        <h2 className="main-heading">Choose Efficiency</h2>
        <p className="subtext">
          Liquidity built for the future, <br /> available today.
        </p>
      </div>

      <div className="advantage-right">
        {items.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""} ${
              index % 2 === 0 ? "green" : "blue"
            }`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <img className="icon" src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <span className="arrow">
                {activeIndex === index ? "▼" : "▲"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantageSection;
