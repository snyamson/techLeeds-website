/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

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

const MainBlogItem = ({
  _id = null,
  mainImage,
  name,
  slug,
  title,
  publishedAt,
  body,
}) => {
  return (
    <>
      <div key={_id} className="blog-list-section blog-content-right row">
        <div className="col-md-9 blog-content-area">
          <div className="blog-img">
            {mainImage && (
              <img
                src={urlFor(mainImage)
                  .width(400)
                  .height(400)

                  .url()}
                alt={`${name}'s picture`}
              />
            )}
          </div>
          <div className="blog-content">
            <Link href="/post/[slug]" as={`/post/${slug.current}`}>
              <a>
                <h4 className="blog-title">{title}</h4>
              </a>
            </Link>
            <div className="meta">
              <div className="date">
                <p>
                  {/* 22<sup>nd</sup>Jan 2016 */}
                  {new Date(publishedAt).toDateString()}
                </p>
              </div>
              <div className="author">
                <p>By {name}</p>
              </div>
            </div>
            <p className="blog-decisions">
              <PortableText value={body[0]} components={ptComponents} />
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <a className="btn btn-default th-btn solid-btn" role="button">
                  Read More
                </a>
              </Link>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#35bdf6",
                    color: "#fff",
                    padding: "0px 4px",
                    borderRadius: "3px",
                  }}
                >
                  Data Science
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlogItem;
