const Service = () => {
  return (
    <div className="section service" id="section-service">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Services</div>
          <div className="subtitle">What I Offer</div>
        </div>
        {/* services */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-book" />
              </div>
              <div className="name">Book Writing</div>
              <div className="text">
                Crafting transformative books that explore quantum physics, mindset development, and personal growth with scientific backing.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-lightbulb" />
              </div>
              <div className="name">Mindset Coaching</div>
              <div className="text">
                Personalized coaching sessions to help individuals unlock their potential through quantum mindset principles and practical strategies.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-users" />
              </div>
              <div className="name">Speaking Engagements</div>
              <div className="text">
                Inspiring presentations on quantum consciousness, personal transformation, and the science of human potential for events and organizations.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-graduation-cap" />
              </div>
              <div className="name">Workshops</div>
              <div className="text">
                Interactive workshops combining quantum physics concepts with practical exercises for mindset transformation and personal development.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-pen-fancy" />
              </div>
              <div className="name">Content Creation</div>
              <div className="text">
                Creating engaging content that bridges science and spirituality, making complex quantum concepts accessible to everyday readers.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="fas fa-brain" />
              </div>
              <div className="name">Quantum Consulting</div>
              <div className="text">
                Consulting services for individuals and organizations looking to integrate quantum principles into their personal or business development strategies.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
