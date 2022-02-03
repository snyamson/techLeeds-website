import { IoSearchOutline } from "react-icons/io5";
import AppHeader from "../../components/common/AppHeader/appHeader";

const EventDetail = () => {
  return (
    <>
      <AppHeader pageName="events" title="An Event Title" />
      <section className="portfolio-single">
        <div className="container-fluid padding-0">
          <div className="row margin-0">
            <div className="flex">
              <div className="col-md-12 col-lg-6  padding-0">
                <img src="/assets/img/single-portfolio-img1.jpg" alt="" />
              </div>
              <div className="col-md-12 col-lg-6 portfolio-single-description padding-0">
                <div className="portfolio-single-info">
                  <p className="date">16.03.2015</p>
                  <h3 className="portfolio-single-title">
                    Vong - Responsive Portfolio Theme
                  </h3>
                  <div className="row margin-0">
                    <div className="col-md-12 protfolio-list padding-0">
                      <div className="col-md-4 col-sm-6 padding-0">
                        <p>CLIENT</p>
                      </div>
                      <div className="col-md-8 col-sm-6 padding-0">
                        <span className="colon">:</span>
                        <p>Mamur Beta.</p>
                      </div>
                    </div>
                    <div className="col-md-12 protfolio-list padding-0">
                      <div className="col-md-4 col-sm-6 padding-0">
                        <p>SERVICES</p>
                      </div>
                      <div className="col-md-8 col-sm-6 padding-0">
                        <span className="colon">:</span>
                        <p>Branding, Marketing.</p>
                      </div>
                    </div>
                    <div className="col-md-12 protfolio-list padding-0">
                      <div className="col-md-4 col-sm-6 padding-0">
                        <p>LAUNCH PROJECT</p>
                      </div>
                      <div className="col-md-8 col-sm-6 padding-0">
                        <span className="colon">:</span>
                        <a className="web-addres" href="#" target="_blank">
                          http://example.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="container">
          <div className="row">
            <div className="gallery-description text-center">
              <p>
                I had not long to wait before a stealthy sound apprised me of
                their nearness, and then a <br />
                war-bonneted, paint-streaked face was thrust cautiously around
                the shoulder of the cliff, and <br />
                savage eyes looked into mine. That he could see me in the dim
                light of the cave I was sure for <br />
                the early morning sun was falling full upon me through the
                opening.
              </p>
            </div>
            <h1 className="title text-center">Team</h1>
            {/* <div className="col-md-4">
              <div className="gallery-img">
                <a href="/assets/img/portfolio-img2.jpg" className="image-link">
                  <div className="gallery-overlay-icon">
                   
                  </div>
                  <img src="/assets/img/portfolio-img2.jpg" alt="" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetail;
