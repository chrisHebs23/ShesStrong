import { useParams } from "react-router-dom";
import { dummyArticles } from "../../../assets/data/dummyArticles";

const Post = () => {
  let { id } = useParams();

  const found = dummyArticles.find((element) => (element.id = id));
  console.log(found.title);

  return !found ? (
    <div>
      <h2>Blog Post Not Found</h2>
    </div>
  ) : (
    <div className="screen-padding flex flex-col justify-center items-center">
      <div
        style={{ backgroundImage: `url(${found.bannerImage})` }}
        className="w-full h-[250px] md:h-[400px] bg-cover bg-center "
      />
      <h2 className="my-5 lg:w-1/4 md:w-2/4 text-center">{found.title}</h2>
      <p className="lg:w-[75%]">{found.text}</p>
    </div>
  );
};

export default Post;
