/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoReorderTwoOutline, IoCloseOutline } from "react-icons/io5";
import TopBar from "../topBar";

const NavBar = ({ header }) => {
  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Service",
      path: "/#services",
    },
    {
      name: "Events",
      path: "/#events",
    },
    {
      name: "Blog",
      path: "/post",
    },
    {
      name: "Contact",
      path: "/#footer",
    },
  ];

  const carouselItem = [
    {
      title: "Creative & Innovative",
      desc: " Creative & Innovative Digital Solution",
      active: true,
    },
    {
      title: "Creative & Innovative",
      desc: " Creative & Innovative Digital Solution",
    },
  ];

  return (
    <>
      <TopBar />
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <h1
              className="m-0 nav-brand"
              style={{ fontSize: "3rem", color: "#35bdf6" }}
            >
              techLeeds
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {menu.map((item, index) => (
                <Link href={item.path} key={index}>
                  <a
                    className={`nav-item nav-link ${
                      router.asPath == item.path ? "active" : null
                    }`}
                    style={{ textTransform: "uppercase" }}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {router.pathname == "/" && (
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="assets/img/carousel-1.jpg"
                  alt="Carousel"
                />

                <div
                  className="
                carousel-caption
                d-flex
                flex-column
                align-items-center
                justify-content-center
              "
                >
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      Creative & Innovative
                    </h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                      We Make data insightful
                    </h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100"
                  src="assets/img/carousel-2.jpg"
                  alt="Carousel"
                />
                <div
                  className="
                carousel-caption
                d-flex
                flex-column
                align-items-center
                justify-content-center
              "
                >
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      Creative & Innovative
                    </h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                      Creative & Innovative Digital Solution
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;

// {
//   `/${pageName.toLowerCase()}`;
// }
