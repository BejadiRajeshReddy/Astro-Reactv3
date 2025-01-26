import "../App.css";

const Services = () => {
  return (
    <section className="service">
      <h1>Our Services</h1>
      <div className="service-cards">
        <div className="card">
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-54702,resizemode-75,msid-109756361/news/india/hindu-marriage-not-valid-unless-performed-with-requisite-ceremonies-sc.jpg"
            alt="Marriage"
            className="service-img"
          />
          <h3>Marriage</h3>
          <p>
            Want a happy married life? Our matchmaking can predict
            compatibility.
          </p>
          <button>Enquire Now</button>
        </div>
        <div className="card">
          <img
            src="https://varthana.com/school/wp-content/uploads/2023/05/B357.jpg"
            alt="Education"
            className="service-img"
          />
          <h3>Education</h3>
          <p>
            Higher studies on your mind? Let us guide you for the best outcomes.
          </p>
          <button>Enquire Now</button>
        </div>
        <div className="card">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
            alt="Business"
            className="service-img"
          />
          <h3>Business</h3>
          <p>Wish to expand your business? Seek guidance to avoid obstacles</p>
          <button>Enquire Now</button>
        </div>
        <div className="card">
          <img
            src="https://www.newtraderu.com/wp-content/uploads/12-Principles-of-Building-Wealth-Eye-opening.jpg"
            alt="Wealth"
            className="service-img"
          />
          <h3>Wealth</h3>
          <p>
            Suffering monetary losses? We can analyze and help resolve doshas.
          </p>
          <button>Enquire Now</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
