import Image from "next/image";
import Link from "next/link";

const EventItem = ({ title = null, desc = null, date = null }) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="portfolio-list">
        <Link href="/event/1">
          <a>
            <div className="th-mouse-portfolio-card">
              <div className="thumbnail portfolio-thumbnail">
                <Image
                  src="/assets/img/blog-1.jpg"
                  alt="Portfolio"
                  width="360px"
                  height="453px"
                />
                <div className="caption portfolio-caption">
                  <h3 className="portfolio-title">{title}</h3>
                  <p className="portfolio-subtitle">{desc}</p>
                  <p className="date">{date}</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
