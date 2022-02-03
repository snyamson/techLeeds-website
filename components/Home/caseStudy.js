import Container from "../common/container";
import Link from "next/link";

const CaseStudy = () => {
  return (
    <>
      <Container id="case-study" title="Case Study">
        <div className="case-study-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* <!-- inner sub-title --> */}
                <div className="content">
                  <h4
                    className="inner-title"
                    style={{ textTransform: "uppercase" }}
                  >
                    Digital Transformation and the role of data
                  </h4>
                  <p className="case-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euiyd tincidunt ut laoreet dolore
                    magna aliquam nibh utpat.Ullamcorper suscipit lobo nibh
                    euiyd tinci- dunt ut laoreet.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem impedit molestias cumque dolorum, sunt, provident
                    blanditiis tempora, aut explicabo error ipsa repudiandae.
                    Dolores eius eaque eum mollitia esse nisi necessitatibus
                    distinctio ea, dolorem non, optio minima temporibus
                    blanditiis, quidem aperiam!
                  </p>
                  {/* <!-- View More Details --> */}
                  <Link href="/blog">
                    <a className="btn btn-default btn-main" role="button">
                      View More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-content">
                  <img
                    className="img-responsive"
                    src="/assets/img/blog-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CaseStudy;
