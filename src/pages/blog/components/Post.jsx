import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import useGet from "../../../hooks/useGet";
import { Helmet } from "react-helmet";
import useDate from "../../../hooks/useDate";

const Post = () => {
  let { slug } = useParams();
  const { returnDate } = useDate();
  // ${import.meta.env.VITE_BACKEND_URL}
  const { data, loading, isError } = useGet(
    `${import.meta.env.VITE_BACKEND_URL}/blog/get/${slug}`
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
        <h2>Article was not found</h2>
        <Link to="/blog">
          <button>View Articles</button>
        </Link>
      </div>
    );
  }

  if (data) {
    return (
      <div className="screen-padding flex flex-col justify-center mb-[150px]">
        <Helmet>
          <title>She&apos;s Strong | {data.title}</title>
          <meta name="description" content={data.text.substring(0, 160)} />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content={`She&apos;s Strong | ${data.title}`}
          />
          <meta
            name="twitter:description"
            content={data.text.substring(0, 160)}
          />
          <meta name="twitter:image" content={data.bannerImage} />

          <meta
            property="og:title"
            content={`She&apos;s Strong | ${data.title}`}
          />
          <meta
            property="og:description"
            content={data.text.substring(0, 160)}
          />
          <meta property="og:image" content={data.bannerImage} />
          <meta
            property="og:url"
            content={`${import.meta.env.VITE_BACKEND_URL}/${data.slug}`}
          />
        </Helmet>
        <h2 className="my-5">{data.title}</h2>
        <div className="self-start h-[60px] overflow-hidden my-2 flex items-center gap-2 rounded-full">
          <img
            className="object-cover h-[60px]"
            src={data.authorImage}
            alt={data.author + " picture"}
          />
          <p className=" text-xs">
            {data.author} | Posted on: {returnDate(data.updatedAt)}
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${data.bannerImage})` }}
          className="w-full h-[250px] md:h-[400px] bg-cover bg-center my-5"
        />
        <div dangerouslySetInnerHTML={{ __html: data.text }} />
      </div>
    );
  }
};

export default Post;
