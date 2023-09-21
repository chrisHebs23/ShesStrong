/* eslint-disable react/prop-types */

const BlogCards = ({ article }) => {
  const theHtml = { __html: article.text };

  return (
    <div
      style={{ backgroundImage: `url(${article.bannerImage})` }}
      className="w-full h-full flex flex-wrap bg-center bg-cover overflow-hidden "
    >
      <div className="absolute bottom-0 w-full h-1/2 md:w-1/2 md:h-full bg-primary/50 backdrop-blur z-10 "></div>
      <div className="flex flex-col justify-end md:justify-center p-5 gap-2 md:gap-5 h-full absolute z-20">
        <img
          className="absolute left-2 md:static md:bottom-[38%] h-[60px] w-[60px] md:h-[80px] md:w-[80px] bg-primary/50 backdrop-blur z-10 rounded-full p-1"
          src={article.authorImage}
        />
        <p className="text-5">
          Author: <span className=" text-highlight">{article.author}</span>
        </p>
        <h3 className="">{article.title}</h3>

        <div id="blogBanner" dangerouslySetInnerHTML={theHtml} />
      </div>
    </div>
  );
};

export default BlogCards;
