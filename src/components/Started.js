import TypingAnimation from "./TypingAnimation";

const Started = () => {
  return (
    <div className="section started" id="section-started">
      <div className="centrize full-width">
        <div className="vertical-center">
          {/* title */}
          <h1 className="h-title">
            The Quantum <br />
            Mindset
          </h1>
          {/* content started */}
          <div className="started-content">
            {/* text */}
            <div className="h-text">
            What They Won't Teach You in School That Could Change Your Life
            </div>
            {/* button */}
            <a href="#section-book" className="btn">
              <span className="animated-button">
                <span>Learn More</span>
              </span>
              <i className="icon fas fa-chevron-right" />
            </a>
            {/* mosue button */}
            <a href="#" className="btn mouse-btn" style={{ display: "none" }}>
              <i className="icon fas fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Started;
