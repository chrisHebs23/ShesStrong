import BlogCards from "./components/BlogCards";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import useGet from "../../hooks/useGet";

const Blog = () => {
  const { data, loading, isError } = useGet(
    `${import.meta.env.VITE_BACKEND_URL}/blog`
  );

  if (loading) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex w-full h-[250px] justify-center items-center">
        <h2>Something went wrong!</h2>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex w-full h-[250px] justify-center items-center">
        <h2>Articles are coming soon!</h2>
      </div>
    );
  }

  if (isError) {
    return <div className="h-[500px]">Something went wrong</div>;
  }

  if (data) {
    return (
      <div className="screen-padding">
        <h2>
          <span className="underline-effect">Blog Articles</span>
        </h2>
        <div className="flex flex-wrap justify-between gap-y-5 my-5">
          {data.map((article, i) => (
            <div
              key={i}
              className={`${
                i == 0 ? "lg:w-full lg:h-[500px]" : "lg:w-[49%]"
              } w-full h-[350px] hover:scale-105 transition ease-in-out delay-150 relative`}
            >
              <Link to={`/blog/${article.slug}`}>
                <BlogCards article={article} i={i} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Blog;
