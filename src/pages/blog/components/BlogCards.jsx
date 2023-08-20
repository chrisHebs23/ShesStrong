/* eslint-disable react/prop-types */

const BlogCards = ({ article }) => {
  return (
    <div
      style={{ backgroundImage: `url(${article.bannerImage})` }}
      className="w-full h-full flex flex-wrap bg-center overflow-hidden hover:scale-105 transition ease-in-out delay-150"
    >
      <div className=" flex flex-col justify-center p-5 w-[60%] h-full bg-primary/40 backdrop-blur-sm ">
        <h3 className="mb-2">{article.title}</h3>
        <p className="my-2 text-highlight">{article.author}</p>
        <p className="my-2 text-xs">{article.date}</p>
        <p className="my-2 line-clamp-3">{article.text}</p>
      </div>
    </div>
  );
};

export default BlogCards;
