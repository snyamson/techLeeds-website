import Container from "../common/container";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <Container id="services" title="TechLeeds Services">
      <div className="row g-5">
        {/* <ServiceItem title="Data Analytics" />
          <ServiceItem title="Research & Scientific Writing" />
          <ServiceItem title="App & Web Development" /> */}
        <ServiceItem
          title="Data Analytics"
          Icon="BarChart"
          desc="We provide various mobile app UI Design services Android, ios,windows
          phone. As well as we follow latest trend in our molestie consequat ."
        />
        <ServiceItem
          title="Research & Scientific Writing"
          Icon="School"
          desc="We provide various mobile app UI Design services Android, ios,windows
          phone. As well as we follow latest trend in our molestie consequat ."
        />
        <ServiceItem
          title="App & Web Development"
          Icon="Phone"
          desc="We provide various mobile app UI Design services Android, ios,windows
          phone. As well as we follow latest trend in our molestie consequat ."
        />
      </div>
    </Container>
  );
};

export default Services;
