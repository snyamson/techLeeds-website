/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import LinesEllipsis from "react-lines-ellipsis";

const BlogItem = ({ col, post }) => {
  const animationDelay = (max, min) =>
    (Math.random() * (max - min) + min).toFixed(1);

  const FormatText = ({ text, numOfLines }) => {
    return (
      <LinesEllipsis
        text={text}
        maxLine={numOfLines}
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    );
  };

  return (
    <div
      className={`${col} wow slideInUp`}
      data-wow-delay={`${animationDelay(0.3, 0.9)}s`}
    >
      <div className="blog-item bg-light rounded overflow-hidden">
        <div className="blog-img position-relative overflow-hidden">
          <img
            className="img-fluid"
            // src={post.feature_image}
            src="../assets/img/blog-3.jpg"
            alt="blog"
          />
          <Link href="/">
            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4">
              Web Design
            </a>
          </Link>
        </div>
        <div className="p-4">
          <div className="d-flex mb-3">
            <small className="me-3">
              <i className="far fa-user text-primary me-2"></i>John Doe
            </small>
            <small>
              <i className="far fa-calendar-alt text-primary me-2"></i>01 Jan,
              2045
            </small>
          </div>
          <h4 className="mb-3 ">
            <FormatText text={post.title} numOfLines={2} />
          </h4>
          <p>
            <FormatText text={post.excerpt} numOfLines={3} />
          </p>
          <Link href={`/blog/${post.slug}`}>
            <a className="text-uppercase">
              Read More <i className="bi bi-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
