import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Frontend Developer</h4>
                <h5>Max Core</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built 6+ complete applications using React.js. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Max Core</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
