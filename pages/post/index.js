import groq from "groq";
import client from "../../client";
import AppHeader from "../../components/common/AppHeader/appHeader";
import { useState } from "react";
import MainBlogItem from "../../components/Blog/mainBlogItem";

const Index = ({ posts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(selectedCategory);

  const filteredPost = posts.filter((post) =>
    post.categories.includes(selectedCategory)
  );

  return (
    <>
      <AppHeader pageName="Blog" title="Our Blog" />
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {posts.length > 0 && filteredPost.length > 0
                ? filteredPost.map(
                    ({
                      _id,
                      slug = "",
                      title = "",
                      publishedAt,
                      name,
                      body,
                      mainImage,
                    }) =>
                      slug && (
                        <>
                          <MainBlogItem
                            _id={_id}
                            slug={slug}
                            title={title}
                            publishedAt={publishedAt}
                            name={name}
                            body={body}
                            mainImage={mainImage}
                          />
                        </>
                      )
                  )
                : posts.map(
                    ({
                      _id,
                      slug = "",
                      title = "",
                      publishedAt,
                      name,
                      body,
                      mainImage,
                    }) =>
                      slug && (
                        <MainBlogItem
                          _id={_id}
                          slug={slug}
                          title={title}
                          publishedAt={publishedAt}
                          name={name}
                          body={body}
                          mainImage={mainImage}
                        />
                      )
                  )}
            </div>
            <div className="col-md-3">
              {/* <!-- Blog Right Sections 
          =========================--> */}
              <div className="blog-sidbar">
                <div className="categories widgets">
                  <div className="list-group text-center">
                    <div className="list-group-item active">
                      Blog Categories
                    </div>
                    <a
                      className="list-group-item"
                      onClick={() => setSelectedCategory("")}
                      style={{
                        cursor: "pointer",
                        backgroundColor:
                          selectedCategory === "" ? "#35bdf6" : null,
                      }}
                    >
                      All
                    </a>

                    {categories.map(({ title = "blog category" }) => (
                      <div
                        key={title}
                        className="list-group-item"
                        onClick={() => setSelectedCategory(title)}
                        style={{
                          cursor: "pointer",
                          backgroundColor:
                            selectedCategory === title ? "#35bdf6" : null,
                        }}
                      >
                        {title}
                      </div>
                    ))}
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

export default Index;

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]
      {_id,
         publishedAt,
          title,
           slug, 
           body,
           mainImage,
           "name": author->name,
            "categories": categories[]->title, 

      } | order(publishedAt desc) 
    `);

  const categories = await client.fetch(groq`*[_type == "category"] {title}`);
  return {
    props: {
      posts,
      categories,
    },
  };
}
