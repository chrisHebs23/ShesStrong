import { useNavigate } from "react-router-dom";

const SuccessDisplay = () => {
  const navigate = useNavigate();

  return (
    <section className="screen-padding flex justify-center h-[500px]">
      <div className="product Box-root">
        <div className="description Box-root flex flex-col justify-center">
          <h3>Subscription to starter plan successful!</h3>
          <button onClick={() => navigate("/user", { replace: true })}>
            Go to Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessDisplay;
