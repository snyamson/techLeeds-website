/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const RecentPostItem = () => {
  return (
    <div className="d-flex rounded overflow-hidden mb-3">
      <img
        className="img-fluid"
        src="../assets/img/blog-1.jpg"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
        alt="blog"
      />
      <Link href="/">
        <a className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">
          Lorem ipsum dolor sit amet adipis elit
        </a>
      </Link>
    </div>
  );
};

export default RecentPostItem;
