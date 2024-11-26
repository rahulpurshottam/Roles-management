import React from "react";
import "./App.css";

const Main = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg px-2">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.png" alt="VRV Security Logo" className="logo-img me-2" />
          VRV Security
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">Home</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light me-2">Signup</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light">Logout</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Cover Section */}
      <div className="cover">
        <div className="cover-text">
          Protect What<br /> Matters Most
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5 flex-grow-1">
        {/* Introduction Section */}
        <div className="row">
          <div className="col-md-5 first">
            <h3 className="text-light fw-bold">Introduction to VRV Security</h3>
            <p className="cont">
              VRV Security, founded in 2020 in Chennai, Tamil Nadu, is a global powerhouse in AI-driven cybersecurity solutions. With a presence in over 12 countries, we have rapidly expanded to protect digital assets for Fortune 500 companies and government organizations.
            </p>
            <p className="cont">
              In 2024, our company valuation soared to $400 million, and we continue to set new benchmarks in cybersecurity. We deliver more than 500,000 hours of proactive threat monitoring annually and have secured over 1 million endpoints worldwide.
            </p>
            <p className="cont">
              Trusted by over 200 international clients across 5 continents, our expert team ensures unparalleled security and client satisfaction.
            </p>
          </div>
          <div className="col-md-5 first">
            <h3 className="text-light fw-bold">What We Do</h3>
            <ul className="cont">
              <li>
                <strong>AI-Dependent Services and Solutions VAPT:</strong> Leveraging artificial intelligence, we perform comprehensive Vulnerability Assessment and Penetration Testing (VAPT) to identify and mitigate threats efficiently.
              </li>
              <li>
                <strong>Cloud Infrastructure VAPT:</strong> We secure cloud environments by assessing vulnerabilities, ensuring robust defense mechanisms for sensitive data and applications.
              </li>
              <li>
                <strong>Threat Monitoring & SOC:</strong> Our Security Operations Center (SOC) provides 24/7 threat monitoring, incident response, and real-time analytics to safeguard against evolving cyber threats.
              </li>
              <li>
                <strong>Company Infrastructure & Services VAPT:</strong> We specialize in protecting complex enterprise infrastructure with tailor-made security strategies to prevent unauthorized access and data breaches.
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="my-4 mission">
          <h3 className="text-light fw-bold">Our Mission</h3>
          <p className="cont">
            At VRV Security, our mission is to redefine cybersecurity by delivering adaptive, AI-driven solutions that anticipate and mitigate threats before they materialize. We aim to set the gold standard in proactive threat management and ensure our clients operate in a secure and resilient digital landscape.
          </p>
          <p className="cont">
            Our commitment to innovation and excellence has earned us a 95% client retention rate, a testament to our reliable and effective security measures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
