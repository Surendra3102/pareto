import HeroCard from "../components/HeroCard";
import Creditshow from '../components/Creditshow';
import AdvantageSection from "../components/AdvantageSection";
import Footer from "../components/Footer.jsx";
import '../styles/Hero.css';
import banner from '../assets/banner.png';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import WaveBackground from '../components/WaveBackground';

const Home = () => {
  return (
    <section className="hero">
      <div className="background-lines"></div>

      {/* Hero Card Section */}
      <div className="card-container">
        <HeroCard />
      </div>
      {/*<WaveBackground/>*/}

      {/* Headline + Subtext */}
      <div className="bottom">
        <h1 className="headline">Radically transforming credit, on-chain</h1>
        <p className="subtext">
          Building a marketplace of scaled on-chain credit facilities that
          displace legacy lending infrastructure and loan origination processes
          at each stage of the loan lifecycle.
        </p>
      </div>

      {/* Second Section (USP Features) */}
      <div className="second-page">

        {/* USP Card */}
        <div className="usp-box">
          <div className='con1'>
          <div className="subcontainer">
            <h2>USP, the credit-based synthetic dollar</h2>
            <p>
              USP is a synthetic dollar protocol backed by real-world
              institutional-grade private credit.
            </p>
          </div>

          {/* Buttons */}
          <div className="button-row">
            <button className="outline-btn">OPEN IN APP</button>
            <button className="outline-btn">DOCUMENTS</button>
          </div>
          </div>
          
          <div>
          {/* Toggle Switch */}
          <div className="togglebutton">
            <input type="checkbox" id='toggleUSP'/>
            <label htmlfor='toggleUSP' className='togglebutton-label'></label>
            <div>
            <span className="active-toggle">$ USP</span>
            <span className='inactive-toggle'>$ sUSP</span>
            </div>
            
          </div>

          {/* Small Grid - Stats */}
          <div className="SmallGrid">
            <div className="price">
              <p>Price</p>
              <h3>$1</h3>
            </div>
            <div className="price">
              <p>TVL</p>
              <h3>$30m</h3>
            </div>
            <div className="price">
              <p>Collateralization</p>
              <h3>15.2%</h3>
            </div>
          </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="feature-grid">
          <div className="feature-card">
            <img src={f1} alt="Composable" />
            <h3>Composable</h3>
            <p>
              USP is transferable, permissionless, and seamlessly integrates
              into DeFi and CeFi for enhanced efficiency.
            </p>
          </div>

          <div className="feature-card">
            <img src={f2} alt="Overcollateralized" />
            <h3>Overcollateralized</h3>
            <p>
              Backed 1:1, USP is fully collateralized by stablecoins ensuring
              robust protection.
            </p>
          </div>

          <div className="feature-card">
            <img src={f3} alt="Safe" />
            <h3>Safe</h3>
            <p>
              Backed by liquid assets and a stability fund, USP protects holders
              during systemic crises.
            </p>
          </div>
        </div>
      </div>
      <div>
        <section id='product'><Creditshow/></section>
      </div>
      
      <div className='banner'>
        <h2>Where Roles Create Value</h2>
        <img src={banner} alt='banner'></img>
      </div>
      <section id="features">
        <AdvantageSection />
      </section>

      <section id="partners">
        <Footer />
      </section>
     
    </section>
    
  );
};

export default Home;
