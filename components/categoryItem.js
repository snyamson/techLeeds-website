/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const CategoryItem = () => {
  return (
    <Link href="/">
      <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2">
        <i className="bi bi-arrow-right me-2"></i>Web Design
      </a>
    </Link>
  );
};

export default CategoryItem;
