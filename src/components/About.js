const About = () => {
  return (
    <div className="section about" id="section-about">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">About the Author</div>
          <div className="subtitle">My Writing Journey</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col col-full">
            <div className="single-post-text">
              <p>
              Rick Thompson is an author dedicated to exploring the boundaries of human potential. His work focuses on bridging the gap between modern science and timeless wisdom, offering readers practical tools for personal transformation and growth. With a background in construction and advanced post tensioning technology. A passion for storytelling, Rick's writing illuminates complex subjects, making them accessible and engaging for everyone.
              </p>
            </div>
          </div>
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            <li>
              <strong>Pen Name:</strong> Rick Thompson
            </li>
            <li>
              <strong>Genre:</strong> Self-Help, Quantum Physics
            </li>
            <li>
              <strong>Location:</strong> United States
            </li>
            <li>
              <strong>Website:</strong> www.rickthompson.com
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
