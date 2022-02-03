import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Brand = () => {
  return (
    <div
      id="about"
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
              <h1 className="mb-0">DIGITAL ANALYTICS AGENCY</h1>
            </div>
            <p className="mb-4">
              “Let’s Shrink Big Data into Small Data …… <br /> And hope it
              magically becomes Great Data”
              <br />
              These are the quotes we live by. In today’s competitive marketing
              landscape, you don’t have to lose market share or customers to
              your competitors because of the rapid shift of business world to a
              data driven one.
            </p>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Professional
                  Staff
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>Fair Prices
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3"></i>24/7 Support
                </h5>
              </div>
            </div>
            <div
              className="d-flex align-items-center mb-4 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div
                className="
                  bg-primary
                  d-flex
                  align-items-center
                  justify-content-center
                  rounded
                "
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-primary mb-0">+012 345 6789</h4>
              </div>
            </div>
            <Link href="/#quote">
              <a
                className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                data-wow-delay="0.9s"
              >
                Request A Quote
              </a>
            </Link>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="assets/img/about.jpg"
                alt="about pic"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
