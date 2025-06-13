const BookOverview = () => {
  return (
    <div className="section about" id="section-book">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">The Quantum Mindset in a Nutshell</div>
          <div className="subtitle">What They Won't Teach You in School That Could Change Your Life</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col col-full">
            <div className="single-post-text">
              <h3>About the Book</h3>
              <p>
              Life is now evolving at a more rapid rate than humans have ever experienced before. As the world spins, quantum science has blown old Newtonian models to bits while opening vast new realms of possibility. We're riding an accelerating arc of material and spiritual change that demands a radical change in our own minds and thinking.
              </p>
              <p>
              The Quantum Mindset in a Nutshell teaches us that anything we can imagine is considered possible. This isn't cliché New Age fantasy, but in fact, these teachings are drawn from the newest quantum theories and scientific studies in our evolving new world.
              </p>
               <p>
               Rather than being stuck in self-limiting perspectives, you can choose to move beyond old-order notions of who you are and what you can accomplish. To do so, you must learn the truth about this new quantum vision of reality if you want to activate your full manifestation potential.
               </p>
               <p>This book teaches you how to use your focused attention to liberate your higher powers of creativity, compassion, and purpose by giving you the tools you need to manifest your deepest dreams.</p>
               <p>By using quantum insights to align your attitudes, beliefs, and expectations with the deeper nature of the universe, you can become a potent mind pioneer – and advance into a more expansive and successful human experience.</p>
            </div>
          </div>
        </div>
        {/* book details */}
        <div className="info-list">
          <ul>
            <li>
              <strong>Author:</strong> Rick Thompson
            </li>
            <li>
              <strong>Publication Date:</strong> November 15, 2019
            </li>
            <li>
              <strong>Rating:</strong> 4.4/5 (18 ratings)
            </li>
          </ul>
        </div>
        {/* Amazon purchase button */}
        <div className="book-purchase">
          <a 
            href="https://www.amazon.com/Quantum-Mindset-Nutshell-School-Change/dp/0578610124" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn amazon-btn"
          >
            <span className="animated-button">
              <span>Buy on Amazon</span>
            </span>
            <i className="icon fas fa-external-link-alt" />
          </a>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default BookOverview;
