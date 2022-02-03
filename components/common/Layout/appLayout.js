import Footer from "../Footer/footer";
// import NavBar from "../NavBar/navBar";
import NavBar from "../navBar";

const AppLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
