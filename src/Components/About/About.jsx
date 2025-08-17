import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Banner Section */}
      <section className="about-banner text-center py-5 bg-primary">
        <h1 className="display-3 fw-bold text-white">ABOUT US</h1>
      </section>

      {/* About Us Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-md-6 mb-3 mb-md-0">
              <h2 className="text-primary fw-bold">About Us</h2>
              <p className="text-muted mb-3">
                <span className="highlight text-danger">AL Shaheen Technical Services</span>{" "}
                is among the most competent and thriving technical services providers in Dubai. The strength of our competency and sustainability lies within our management team, which has years of experience in the respective field.
              </p>
              <p className="text-muted mb-3">
                Our aim is to provide the best customer service to our customers in Dubai. Dedicated Technical Services core values are commitment to all aspects of the business, customer satisfaction, and reliability.
              </p>
              <p className="text-muted mb-3">
                Our skilled team is committed to providing the best results for our clients. Client satisfaction with our finest work is of our core importance.
              </p>
            </div>
            {/* Image Section */}
            <div className="col-md-6 text-center">
              <img
                src="/assets/img/About-Us.webp"
                alt="Worker"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Vision Image */}
            <div className="col-md-6 text-center mb-3 mb-md-0">
              <img
                src="/assets/img/Our-Vision.webp"
                alt="Tools"
                className="img-fluid rounded"
              />
            </div>
            {/* Vision Text */}
            <div className="col-md-6">
              <h2 className="text-primary fw-bold">Our Vision</h2>
              <p className="text-muted">
                AL Shaheen Technical Services' objective is to provide fast and reliable services to the customers in Dubai who are seeking technical services. Providing our finest services, we make your ideas come true.
              </p>
              <p className="text-muted">
                Our priority is to ensure your comfortability and assurance and, above all, your satisfaction with our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* <footer className="footer-section bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} AL Shaheen Technical Services. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default AboutUs;
