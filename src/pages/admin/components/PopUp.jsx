/* eslint-disable react/prop-types */
import React from "react";

const PopUp = ({ setOpen, method, id }) => {
  return (
    <div className="top-0 left-0 absolute w-full h-full">
      <div className="absolute bg-secondary z-50 top-[25%] left-[25%] w-[40%] p-5 text-primary">
        <h2>Are you sure?</h2>
        <p>Do you want to delete this post forever</p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={() => method(id)}>Delete</button>
        </div>
      </div>

      <div className="absolute bg-primary/70 w-screen h-screen z-30"></div>
    </div>
  );
};

export default PopUp;
