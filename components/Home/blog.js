import Container from "../common/container";
import BlogItem from "./blogItem";

const Blog = ({}) => {
  return (
    <Container id="blog" title="Latest Blog">
      <BlogItem />
      <BlogItem />
    </Container>
  );
};

export default Blog;

// export async function getServerSideProps() {
//   await new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });

//   return {
//     props: {},
//   };
// }
