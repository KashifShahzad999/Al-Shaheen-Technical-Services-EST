import React from "react";

function Contact() {
  return (
    <section className="contact-section py-5 bg-light" id="Contact">
      {/* Main Container */}
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image Section */}

          <div className="col-md-6">
            <h2 className="text-primary mb-2 fw-bold text-md-start">CONTACT US</h2>
            <p className="text-muted mb-4 text-center text-md-start">
              YOU CAN CONTACT US, IF YOU HAVE ANY QUERY
            </p>
            <form className="needs-validation" noValidate>
              {/* First Row with Name & Email */}
              <div className="row g-3 mb-4">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              {/* Second Row with Phone Number & Services Dropdown */}
              <div className="row g-3 mb-4">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone No"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <select className="form-select" required>
                    <option value="">Select Service</option>
                    <option>Aluminium Window</option>
                    <option>Doors Works</option>
                    <option>Frameless Glass Doors</option>
                    <option>Partition Works</option>
                    <option>Curtain Wall</option>
                    <option>Aluminium Works</option>
                    <option>Aluminium Shower Enclosure Works</option>
                    <option>Aluminium Wood Pergolas</option>
                    <option>Aluminum Composite Panel Cladding</option>
                    <option>Stainless Steel</option>
                    <option>Electroplating Stainless Steel Work</option>
                  </select>
                </div>
              </div>

              {/* Comment Section */}
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Comments"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>



          {/* Right Form Section */}

              <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/assets/img/contact-us.png"
              alt="Contact Us"
              className="img-fluid rounded"
            />
          </div>        
        </div>
      </div>
    </section>
  );
}

export default Contact;
