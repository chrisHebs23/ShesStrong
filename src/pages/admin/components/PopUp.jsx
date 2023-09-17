/* eslint-disable react/prop-types */
import React from "react";

const PopUp = ({ setOpen, method, id }) => {
  return (
    <div className="fixed top-0 inset-0 w-screen h-screen z-50">
      <div className="absolute bg-secondary/10 z-50 left-[30%] top-[35%] md:h-[200px] h-[250px] flex flex-col gap-2 justify-evenly  w-[40%] md:p-5 p-2 text-secondary backdrop-blur-lg">
        <h2>Are you sure?</h2>
        <p>Do you want to delete this post forever</p>
        <div className="flex md:justify-end gap-3">
          <button
            className="hover:text-highlight/50"
            onClick={() => setOpen(false)}
          >
            <h3>Cancel</h3>
          </button>
          <button className="hover:text-red-500" onClick={() => method(id)}>
            <h3>Delete</h3>
          </button>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className="absolute cursor-pointer bg-primary/70 w-screen h-screen z-30"
      ></div>
    </div>
  );
};

export default PopUp;
