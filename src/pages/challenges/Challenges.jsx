import { useState } from "react";
import ChallengeCard from "./ChallengeCard";
import { useEffect } from "react";
import Loading from "../../components/Loading";

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchChallenges = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/challenge`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  if (loading) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  }

  if (challenges.length === 0) {
    return (
      <div className="screen-padding w-full h-[500px]">
        <h2>Challenges Coming Soon</h2>
      </div>
    );
  }

  return (
    <div className="screen-padding">
      <h2 className="my-5">
        <span className="underline-effect">Challenges</span>
      </h2>
      <p>
        Ready to level up your fitness game? Join the
        #She&apos;sStrongFitnessChallenge with @She&apos;sStrong and let&apos;s
        crush those goals, one rep at a time! Here&apos;s the scoop: sign up,
        get your customized challenge plan, and share your sweaty victories
        using the challenge hashtag. Flex those muscles, snap a selfie, and let
        the world know you&apos;re in it to win it. We&apos;re cheering you on
        every step of the way, and there might just be some epic prizes waiting
        for the most dedicated challengers. Let&apos;s show &apos;em how we
        slay, fam!
      </p>
      <div className="flex flex-wrap my-5 gap-y-5 justify-between">
        {challenges.map((challenge, i) => (
          <div key={i} className="lg:w-[32%] w-full md:w-[48%] ">
            <ChallengeCard challenge={challenge} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
