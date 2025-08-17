import React from "react";

function Home() {
  function requestCallback() {
    const phoneNumber = document.getElementById("phoneInput").value;
    console.log("Phone Number:", phoneNumber);
  }

  return (
    <section className="py-5">
      <div className="container home-wrapper">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6 mb-lg-0">
            <span className="text-uppercase text-danger fw-bold">
              Great Technology
            </span>
            <h1 className="display-5 fw-bold text-primary">Best Technical Services</h1>
            <p className="text-muted">
              As a proficient company operating in Dubai, AL Shaheen Technical
              Services always strives to meet the demands of its clients with
              skill and capability.
            </p>
          </div>
          {/* Right Column */}
          <div className="col-lg-6 text-center">
            <img
              src="/assets/img/technical-services.webp"
              alt="Technical Services"
              className="img-fluid"
            />
          </div>
        </div>
        {/* Callback Section */}
        <div className="mt-4 text-center">
          <input
            type="text"
            id="phoneInput"
            placeholder="Input Your Number"
            className="form-control w-50 mx-auto mb-2"
          />
          <button className="btn btn-primary" onClick={requestCallback}>
            REQUEST CALL BACK
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
