const Contacts = () => {
  return (
    <div className="section contacts" id="section-contacts">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Get in Touch</div>
          <div className="subtitle">Connect with the Author</div>
        </div>
        {/* contact form */}
        <div className="contact-form">
          <form id="cform" method="post">
            <div className="group-val">
              <div className="label">
                Full name <strong>*</strong>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Email address <strong>*</strong>
              </div>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Message <strong>*</strong>
              </div>
              <textarea
                name="message"
                placeholder="Your message about the book, feedback, or questions..."
                defaultValue={""}
              />
            </div>
            <div className="group-bts">
              <button type="submit" className="btn">
                <span className="animated-button">
                  <span>Send Message</span>
                </span>
                <i className="icon fas fa-chevron-right" />
              </button>
            </div>
          </form>
          <div className="alert-success">
            <p>Thank you for your message! I'll get back to you soon.</p>
          </div>
        </div>
        {/* contact info */}
        <div className="contact-info">
          <div className="name">Rick Thompson</div>
          <div className="subname">Author &amp; Storyteller</div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Email:</strong> author@rickthompson.com
              </li>
              <li>
                <strong>Social Media:</strong> @rickthompsonwrites
              </li>
              <li>
                <strong>Newsletter:</strong> Subscribe on website
              </li>
            </ul>
          </div>
          <div className="author">Rick Thompson</div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Contacts;
