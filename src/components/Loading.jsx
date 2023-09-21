import spinner from "../assets/images/logoImg.png";

const Loading = () => {
  return (
    <div className="bg-secondary/10 w-full h-full flex justify-center items-center">
      <img
        className="w-[100px] animate-spin "
        src={spinner}
        alt="loading spinner"
      />
    </div>
  );
};

export default Loading;
