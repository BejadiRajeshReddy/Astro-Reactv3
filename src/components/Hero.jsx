import "../App.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="welcome-section">
          <h1>Welcome to TechSpira Astrology</h1>
          <p>Unlock the secrets of the stars and discover your destiny.</p>
          <a href="/home" className="btn">
            Explore Your Horoscope
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
