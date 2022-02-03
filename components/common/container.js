const Container = ({ children, id = null, title = "your title" }) => {
  return (
    <>
      <div
        id={id}
        className="container-fluid pt-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ scrollMarginTop: 50 }}
      >
        <div className="container py-2">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-0" style={{ fontFamily: "Playfair" }}>
              {title}
            </h1>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Container;
