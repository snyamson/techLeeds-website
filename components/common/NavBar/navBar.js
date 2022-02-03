import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

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

  return (
    <>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 navigation">
          <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0">techConsult</h1>
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
            <div className="navbar-nav ms-auto py-0 ">
              {menu.map((item, index) => (
                <Link href={item.path} key={index}>
                  <a
                    style={{ textTransform: "uppercase" }}
                    className={`nav-item nav-link ${
                      router.asPath == item.path ? "active" : null
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
