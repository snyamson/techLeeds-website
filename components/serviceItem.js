import Link from "next/link";

const ServiceItem = ({ title }) => {
  const animationDelay = (max, min) =>
    (Math.random() * (max - min) + min).toFixed(1);

  return (
    <div
      className="col-lg-4 col-md-6 wow zoomIn"
      data-wow-delay={`${animationDelay(0.3, 0.9)}s`}
    >
      <div
        className="
                service-item
                bg-light
                rounded
                d-flex
                flex-column
                align-items-center
                justify-content-center
                text-center
              "
      >
        <div className="service-icon">
          <i className="fa fa-chart-pie text-white"></i>
        </div>
        <h4 className="mb-3">{title}</h4>
        <p className="m-0">
          Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum
          dolore sed
        </p>
        <Link href={`/service/${title}`}>
          <a className="btn btn-lg btn-primary rounded">
            <i className="bi bi-arrow-right"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
