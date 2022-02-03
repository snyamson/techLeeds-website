import AppHeader from "../components/common/AppHeader/appHeader";
import CaseStudy from "../components/Home/caseStudy";
import Services from "../components/Home/services";
import Events from "../components/Home/events";
import Blog from "../components/Home/blog";
import Container from "../components/common/container";

const Home = () => {
  return (
    <>
      <CaseStudy />
      <Services />
      <Events />
      <Blog />
    </>
  );
};

export default Home;
