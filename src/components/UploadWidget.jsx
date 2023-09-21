/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const UploadWidget = ({ setRating, rating }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(true);

  useEffect(() => {
    const cldScript = document.getElementById("cloudinaryUploadWidgetScript");
    if (typeof window !== "undefined" && !loaded && !cldScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "cloudinaryUploadWidgetScript");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);

  const processResults = (err, result) => {
    if (err) {
      setError(err);
    }
    if (result && result.event === "success") {
      setRating((prevRating) => ({
        ...prevRating,
        ["imageUrl"]: result.info.secure_url,
      }));
    }
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUD_PRESET,
        sources: ["local", "url"],
        multiple: false,
        client_allowed_formats: ["jpg", "jpeg", "png", "gif", "svg"],
        max_file_size: 1048576,
      },
      processResults
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 ">
      <div
        style={{ backgroundImage: `url(${rating.imageUrl})` }}
        className={`w-[200px] h-[200px] rounded-full overflow-hidden bg-center bg-cover`}
      ></div>
      <button className="btn" type="button" onClick={uploadWidget}>
        Upload File
      </button>
    </div>
  );
};

export default UploadWidget;
