import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import useToastify from "../../../hooks/useToastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../../../components/Loading";

const AddChallenge = () => {
  const { id } = useParams();
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [challengeData, setChallengeData] = useState({
    title: "",
    description: "",
    bannerImage: "",
    startDate: "",
    endDate: "",
    hashtags: "",
  });
  const navigate = useNavigate();
  const { toastError, toastSuccess } = useToastify();

  const fetchData = async (id) => {
    setLoading(true);
    await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/challenge${id && `/${id}`}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setChallengeData(data);
      })
      .catch((err) => setIsError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const challengeData = JSON.parse(localStorage.getItem("challengeData"));
    if (id && !challengeData) {
      fetchData(id);
    }

    if (challengeData) {
      setChallengeData(challengeData);
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setChallengeData((prevBlogData) => ({
      ...prevBlogData,
      [id]: value,
    }));

    localStorage.setItem("challengeData", JSON.stringify(challengeData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/challenge${id && `/${id}`}`,
      {
        method: id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify({
          title: challengeData.title,
          description: challengeData.description,
          bannerImage: challengeData.bannerImage,
          startDate: challengeData.startDate,
          endDate: challengeData.endDate,
          hashtags: challengeData.hashtags,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toastSuccess(
          !data.title
            ? `${challengeData.title} Successfully updated `
            : `${data.title} Successfully added`
        );
        localStorage.removeItem("challengeData");
        setTimeout(() => {
          setLoading(true);
          navigate("/admin/challenges", { replace: true });
        }, 5000);
      })
      .catch((err) => {
        setLoading(false);

        toastError("Error Occurred please try again later");
      });
  };

  const handleDateChange = (name, date) => {
    setChallengeData((prevBlogData) => ({
      ...prevBlogData,
      [name]: date,
    }));

    localStorage.setItem("challengeData", JSON.stringify(challengeData));
  };

  if (loading) {
    return (
      <div className="h-[500px]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    <div className="h-[500px]">
      <h2>Something Went wrong</h2>
    </div>;
  }

  return (
    <div className="bg-secondary/20 w-full p-5">
      <form
        onSubmit={handleSubmit}
        id="blog-form"
        className="flex flex-col md:flex-row gap-5 flex-wrap w-full"
      >
        <div className="form-div md:w-[45%]">
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={challengeData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-div md:w-[45%]">
          <label>Banner Image</label>
          <input
            type="text"
            id="bannerImage"
            name="bannerImage"
            value={challengeData.bannerImage}
            onChange={handleChange}
          />
        </div>
        <div className="form-div md:w-[45%]">
          <label>Start Date</label>
          <DatePicker
            type="date"
            id="startDate"
            name="startDate"
            selected={Date.parse(challengeData.startDate)}
            onChange={(date) => handleDateChange("startDate", date)}
            className="w-full"
          />
        </div>
        <div className="form-div md:w-[45%]">
          <label>End Date</label>
          <DatePicker
            type="text"
            id="endDate"
            name="endDate"
            selected={Date.parse(challengeData.endDate)}
            onChange={(date) => handleDateChange("endDate", date)}
            className="w-full"
          />
        </div>
        <div className="form-div md:w-[45%]">
          <label>Hashtags</label>
          <input
            type="text"
            id="hashtags"
            name="hashtags"
            value={challengeData.hashtags}
            onChange={handleChange}
          />
        </div>
        <div className="form-div w-full h-[200px]">
          <label>Description</label>
          <textarea
            type="text"
            id="description"
            rows={20}
            name="description"
            value={challengeData.description}
            onChange={handleChange}
            className="h-full p-2"
          />
        </div>
        <button className="btn w-[45%] mx-auto">Add Challenge</button>
      </form>
    </div>
  );
};

export default AddChallenge;
