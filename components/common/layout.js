import BackToTop from "./backToTop";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
