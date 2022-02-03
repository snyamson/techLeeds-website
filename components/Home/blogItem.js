const BlogItem = () => {
  return (
    <div className="blog-list-section blog-content-right row">
      <div className="col-md-9 blog-content-area">
        <div className="blog-img">
          <img className="img-responsive" src="/assets/img/blog-1.jpg" alt="" />
        </div>
        <div className="blog-content">
          <a href="blog-single.html">
            <h4 className="blog-title">
              A Complete, Ranke Destinat Moines’ <br />
              Good Bars,Benefit of the t Media Elite
            </h4>
          </a>
          <div className="meta">
            <div className="date">
              <p>
                22<sup>nd</sup>Jan 2016
              </p>
            </div>
            <div className="author">
              <p>By Michal Lomans</p>
            </div>
          </div>
          <p className="blog-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonum euismod tincidunt ut laoreet dolore magna autem vel eum iriure
            dolor in.
          </p>
          <a
            className="btn btn-default th-btn solid-btn"
            href="blog-single.html"
            role="button"
          >
            Read More
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
