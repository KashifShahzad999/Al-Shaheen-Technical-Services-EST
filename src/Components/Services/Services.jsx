import React from "react";

const Services = () => {
  // Array of services
  const services = [
    "Curtain Wall",
    "Doors Works",
    "Stainless Steel",
    "Partition Works",
    "Aluminium Works",
    "Aluminium Window",
    "Frameless Glass Doors",
    "Aluminium Wood Pergolas",
    "Electroplating Stainless Steel Work",
    "Aluminium Shower Enclosure Works",
    "Aluminum Composite Panel Cladding",
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Info Content */}
            <div className="col-lg-12 mb-4 mb-lg-0">
              <h1 className="text-primary mb-3 fw-bold text-center">
                Al Shaheen Technical Services Dubai
              </h1>
              <p className="text-muted mb-3">
                At{" "}
                <span className="text-danger">
                  Al Shaheen Technical Services Dubai
                </span>
                , we aim at delivering the best and most distinct services to
                the clients in Dubai. Our achievements are based on the
                performance and proficient services that are in accordance with
                the needs of our customers.
              </p>
              <p className="text-muted mb-3">
                Our management team has extensive experience in technical
                services. Dedicated Technical Services' sole purpose is to
                provide excellence and quality services in this field.
              </p>
              <p className="text-muted">
                Al Shaheen has grown with vast experience and 25 employees,
                recognized locally in the design and production of architectural
                aluminium systems and glass. Our partnership with suppliers like
                (GULF EXTRUSION), (ALUMIL), (GUTMAN), (SCHUCO) makes this
                possible.
              </p>
            </div>

 
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="text-primary mb-4 fw-bold">Our Services</h2>
          <ul className="list-group list-group-flush">
            {services.map((service, index) => (
              <li key={index} className="list-group-item py-2">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="text-primary mb-4 fw-bold">
            Key Features of Al Shaheen Technical Services Dubai
          </h1>
          <div className="row gx-4 gy-4 mt-3 align-items-center">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-3 feature-item">
              <img
                src="/assets/img/service-team.png"
                alt="Quality Material"
                className="img-fluid mb-2"
              />
              <h5 className="text-primery fw-bold">Quality Material</h5>
              <p className="text-muted small">
                We use only the highest quality materials to achieve optimal
                results and customer satisfaction.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-3 feature-item">
              <img
                src="/assets/img/service-team.png"
                alt="Expert Team"
                className="img-fluid mb-2"
              />
              <h5 className="text-primery fw-bold">Expert Team</h5>
              <p className="text-muted small">
                We have an experienced team, from base to field, that adds grace
                and beauty to the work.
              </p>
            </div>

            {/* Feature 3 - Center Image */}
            <div className="col-md-12 col-lg-6">
              <img
                src="/assets/img/services-img.webp"
                alt="Worker"
                className="img-fluid rounded"
              />
            </div>

            {/* Feature 4 */}
            <div className="col-md-6 col-lg-3 feature-item">
              <img
                src="/assets/img/service-team.png"
                alt="Reasonable Cost"
                className="img-fluid mb-2"
              />
              <h5 className="text-primery fw-bold">Reasonable Cost</h5>
              <p className="text-muted small">
                We offer ways to reduce costs and energy consumption while
                maintaining reasonable prices for technical services.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="col-md-6 col-lg-3 feature-item">
              <img
                src="/assets/img/service-team.png"
                alt="Secure & Safe"
                className="img-fluid mb-2"
              />
              <h5 className="text-primery fw-bold">Secure & Safe</h5>
              <p className="text-muted small">
                We provide work and quality that is being delivered through safe
                and competent hands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
