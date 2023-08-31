/* eslint-disable react/prop-types */
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const AccountProfile = ({ user, btnTitle, redirectUrl }) => {
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const [values, setValues] = useState({
    userId: user.id,
    name: user?.name || "",
    email: user?.email[0].emailAddress || "",
    image: user?.image || "",
    phoneNumber: user?.phoneNumber || "",
  });
  const [files, setFiles] = useState();
  const [fetching, setFetching] = useState(false);

  const handleSubmit = async (e) => {
    setFetching(true);
    e.preventDefault();

    try {
      console.log(values);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/profile/edit`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${await getToken()}`,
          },
          body: JSON.stringify({
            userId: values.userId,
            email: values.email,
            name: values.fullName,
            phoneNumber: values.phoneNumber,
            goal: values.goal,
            image: values.image,
          }),
        }
      );

      if (!response.ok) {
        setFetching(false);
        return { message: "Could not create new user please try again later" };
      }
      return navigate(redirectUrl, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const handleImage = (e, fieldChange = () => null) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(e.target.files);
      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (values[name]) {
      setValues({ ...values, [name]: value });
    } else {
      values[name] = value;
    }
  };

  return (
    <div>
      <h3>Account Profile</h3>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <img
            src={values.image}
            alt={values.name + " profile picture"}
            className="rounded-full object-contain w-[200px]"
          />

          <input
            id="files"
            type="file"
            accept="image/*"
            placeholder="Add profile photo"
            onChange={handleImage}
            readOnly
            className="hidden"
          />
          <label
            htmlFor="files"
            className=" cursor-pointer hover:text-highlight"
          >
            Add Profile Photo
          </label>
        </div>
        <label>Name</label>
        <input
          name="name"
          type="text"
          required
          value={values.name}
          className="text-black"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          value={values.email}
          className="text-black"
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          maxLength="10"
          minLength="10"
          className="text-black"
          onKeyDown={(event) => {
            if (event.code.includes("Key")) {
              event.preventDefault();
            }
          }}
        />
        <label>Goal</label>
        <input
          name="goal"
          type="text"
          value={values.goal}
          className="text-black"
          onChange={handleChange}
        />

        <button type="submit">{btnTitle}</button>
      </form>
    </div>
  );
};

export default AccountProfile;
