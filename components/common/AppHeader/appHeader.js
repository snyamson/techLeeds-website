import Link from "next/link";

const AppHeader = ({ pageName = "PageName", title = "Title for the page" }) => {
  return (
    <>
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: "20px" }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">
              {/* {desc ? desc : pageName} */}
              {title}
            </h1>
            <Link href="/">
              <a className="h5 text-white">Home</a>
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link href="/">
              <a className="h5 text-white">{pageName}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
