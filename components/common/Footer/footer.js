import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer blue-bk">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4">
                {/* <!-- footer About section
                            ========================== --> */}
                <div className="footer-about">
                  <h3 className="footer-title">About</h3>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas <br />
                    sit aspernatur aut odit aut fugit, sed quia <br />
                    magni dolores eos qui ratione. ed quia <br />
                    magni dolores
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                {/* <!-- footer Address section
                            ========================== --> */}
                <div className="footer-address">
                  <h3 className="footer-title">Address</h3>
                  <p>Mile 4 Street, Tafo - Meduma. kumasi - Ghana</p>
                  <p className="contact-address">
                    Contact us :
                    <a href="tel:+233558389642">+233 (0) 558 389 642 </a>
                  </p>
                  <p className="contact-address">
                    Write us :
                    <a href="mailto:info.snyamson@gmail.com">
                      info.snyamson@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                {/* <!-- footer Media link section
                            ========================== --> */}
                <div className="footer-social-media">
                  <h3 className="footer-title">Keep in touch</h3>
                  <ul className="footer-media-link">
                    <li>
                      <Link href="/">
                        <a>
                          <IoLogoTwitter />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <IoLogoFacebook />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <IoLogoLinkedin />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <IoLogoInstagram />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-nav text-center">
            <div className="col-md-12">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#event">Events</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- <div className="text-center">
              <div className="col-md-12">
                <div className="copyright">
                  <p>
                    &copy; 2022 All rights reserved. <br />
                    SN CONSULTANCY
                  </p>
                </div>
              </div>
            </div> --> */}
        </div>
      </footer>
      <div className="copyright-wrapper">
        <div className="text-center">
          <div className="col-md-12">
            <div className="copyright">
              <p>
                &copy; 2022 All rights reserved. <br />
                SN CONSULTANCY
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
