import Link from "next/link";

/* eslint-disable @next/next/no-html-link-for-pages */
const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/#about",
    },
    {
      name: "Our Services",
      path: "/#services",
    },
  ];

  const popularLinks = [
    {
      name: "Latest Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <>
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div
                className="
                d-flex
                flex-column
                align-items-center
                justify-content-center
                text-center
                h-100
                bg-primary
                p-4
              "
              >
                <Link href="/">
                  <a className="navbar-brand">
                    <h1 className="m-0 text-white">
                      {/* <i className="fa fa-user-tie me-2"></i> */}
                      techConsult
                    </h1>
                  </a>
                </Link>
                <p className="mt-3 mb-4">
                  techConsult is a analytical and statistical agency with
                  specialization in Data Analytics, Research, Scientific Writing
                  & Reporting and Website and Mobile App development
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div
                    className="
                    section-title section-title-sm
                    position-relative
                    pb-3
                    mb-4
                  "
                  >
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">Mile 4 Street, Tafo - Kumasi, Ghana</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">info.snyamson@gmail.com.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+233 558 389 642</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a className="btn btn-primary btn-square me-2" href="/">
                      <i className="fab fa-twitter fw-normal"></i>
                    </a>
                    <a className="btn btn-primary btn-square me-2" href="/">
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a className="btn btn-primary btn-square me-2" href="/">
                      <i className="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a className="btn btn-primary btn-square" href="/">
                      <i className="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div
                    className="
                    section-title section-title-sm
                    position-relative
                    pb-3
                    mb-4
                  "
                  >
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    {quickLinks.map((link, index) => (
                      <Link href={link.path} key={index}>
                        <a className="text-light mb-2">
                          <i className="bi bi-arrow-right text-primary me-2"></i>
                          {link.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div
                    className="
                    section-title section-title-sm
                    position-relative
                    pb-3
                    mb-4
                  "
                  >
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    {popularLinks.map((link, index) => (
                      <Link href={link.path} key={index}>
                        <a className="text-light mb-2">
                          <i className="bi bi-arrow-right text-primary me-2"></i>
                          {link.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "#061429" }}
      >
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "75px" }}
              >
                <p className="mb-0">
                  &copy;
                  <a className="text-white border-bottom" href="/">
                    techConsult
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
