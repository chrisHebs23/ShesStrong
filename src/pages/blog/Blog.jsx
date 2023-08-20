import React from "react";
import { dummyArticles } from "../../assets/data/dummyArticles";
import BlogCards from "./components/BlogCards";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="screen-padding">
      <h2>
        <span>Blog Articles</span>
      </h2>
      <div className="flex flex-wrap justify-between gap-y-5 my-5">
        {dummyArticles.toReversed().map((article, i) => (
          <div
            key={i}
            className={`${
              i == 0 ? "lg:w-full lg:h-[500px]" : "lg:w-[46%]"
            } w-full h-[350px] `}
          >
            <Link to={`/blog/${article.id}`}>
              <BlogCards article={article} i={i} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;