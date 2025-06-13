const Works = () => {
  return (
    <div className="section works" id="section-portfolio">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Portfolio</div>
          <div className="subtitle">Latest Works</div>
        </div>
        {/* portfolio items */}
        <div className="portfolio-items">
          <div className="portfolio-col">
            <div className="portfolio-item">
              <div className="image">
                <img src="images/works/work1.jpg" alt="Quantum Mindset Book" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Quantum Mindset</h3>
                    <p>A transformative guide to unlocking human potential through quantum consciousness principles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-col">
            <div className="portfolio-item">
              <div className="image">
                <img src="images/works/work2.jpg" alt="Mindset Transformation Workshop" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Transformation Workshop</h3>
                    <p>Interactive workshop series on quantum physics and personal development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-col">
            <div className="portfolio-item">
              <div className="image">
                <img src="images/works/work3.jpg" alt="Speaking Engagement" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Keynote Speaking</h3>
                    <p>Inspiring presentations on quantum consciousness and human potential.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-col">
            <div className="portfolio-item">
              <div className="image">
                <img src="images/works/work4.jpg" alt="Quantum Coaching Program" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Coaching Program</h3>
                    <p>Personalized quantum mindset coaching for individual transformation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-col">
            <div className="portfolio-item">
              <div className="image">
                <img src="images/works/work5.jpg" alt="Research Publication" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Research Publication</h3>
                    <p>Scientific articles bridging quantum physics and consciousness studies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-col">
            <div className="portfolio-item">
              <div className="image">
                <img src="images/works/work6.jpg" alt="Online Course" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>Online Course</h3>
                    <p>Comprehensive digital course on quantum mindset principles and applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Works;
