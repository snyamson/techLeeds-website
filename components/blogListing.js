import Pagination from "../components/common/pagination";
import BlogItem from "./blogItem";

const BlogListing = ({ posts }) => {
  return (
    <div className="col-lg-8">
      <div className="row g-5">
        {posts.map((post) => (
          <BlogItem key={post} post={post} col="col-md-6" />
        ))}
        <Pagination />
      </div>
    </div>
  );
};

export default BlogListing;
