import groq from "groq";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import AppHeader from "../../components/common/AppHeader/appHeader";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

const PostDetail = ({ post, relatedPost }) => {
  // console.log(relatedPost);
  // console.log(post);
  // relatedPost.map((item) => {
  //   if (item.categories.includes(post.categories[0])) {
  //     console.log(
  //       "this is coming from the related poast " + `${post.categories[0]}`
  //     );
  //   }
  // });

  const {
    title = "Missing title",
    mainImage,
    name = "Missing name",
    categories,
    body = [],
  } = post;

  return (
    <>
      {/* the classes blog-inner-heading and blog-content-description 
      are used to style a blog desc container and sub title respectively
      blog-description for the p tag
      */}
      <AppHeader pageName="Blog" title={title} />

      <section className="blog-single">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {/* <!-- Blog Left Sections 
				  =========================-->
            <!-- Single Blog Page Main Img
            ============================== --> */}
              <div className="blog-single-section-img">
                {/* <img
                  src="/assets/img/about.jpg"
                  alt="Blog Single Img"
                  style={{ maxHeight: 500 }}
                /> */}

                {mainImage && (
                  <img
                    src={urlFor(mainImage).width(30).height(18).url()}
                    alt={`${name}'s picture`}
                  />
                )}
              </div>
              {/* <!-- Single Blog Page Main Content
            ================================== --> */}
              <div className="blog-single-content">
                <div className="blog-content-description">
                  <h3>
                    <a className="blog-content-title">{title}</a>
                  </h3>
                  <div className="meta">
                    <div className="date">
                      <p>
                        22<sup>nd</sup>Jan 2016
                      </p>
                    </div>
                    <div className="author">
                      <p>By {name}</p>
                    </div>
                  </div>
                </div>
                <div className="blog-content-description">
                  <PortableText value={body} components={ptComponents} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              {/* <!-- Blog Right Sections 
				  =========================--> */}
              <div className="blog-sidbar">
                <div className="related-post widgets">
                  <div className="list-group">
                    <div className="list-group-item active text-center">
                      Related Post
                    </div>
                    <a href="#" className="list-group-item">
                      <div className="media">
                        <div className="media-body">
                          <p>
                            Typography is important fact for liusto odio dolore.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetail;

const query = groq`*[_type == "post" && slug.current == $slug][0] { title, 
  "name": author->name, 
  mainImage,
  "image": author->image, 
  "date": date, 
  "content": content, 
  "categories": categories[]->title, 
  "tags": tags[]->title,
  body
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // it is important to default the slug so that it doesn't return an error
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });

  const relatedPost = await client.fetch(
    groq`*[_type == "post"]{title, "categories": categories[]-> title}`
  );
  return {
    props: {
      post,
      relatedPost,
    },
  };
}
