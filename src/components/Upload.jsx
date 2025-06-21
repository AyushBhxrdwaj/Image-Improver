import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
const Upload = (props) => {
  const showImgHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.uploadImageHandler(file);
    }
  };
  return (
    <div
      className="bg-black w-50 text-lg text-gray-300
        hover:text-black 
        group
  drop-shadow-[0_5px_10px_rgba(0,0,255,0.5)]
  hover:bg-gradient-to-r hover:from-purple-400 hover:via-violet-600 hover:to-blue-500
  transition-all duration-[300ms] ease-in-out
  rounded-full max-w-2xl p-3"
    >
      <label
        htmlFor="Upload"
        className="block cursor-pointer w-full border-gray-500 text-center hover:border-blue-800 transition-all p-2"
      >
        <input
          type="file"
          id="Upload"
          className="hidden"
          onChange={showImgHandler}
        />
        <div className="group flex w-full items-center justify-cenPter p-2 gap-2">
          <MdOutlineFileUpload className="font-bold text-3xl" />
          <p className="text-sm font-medium transition-colors group-hover:font-bold">Upload Your Image</p>
        </div>
      </label>
    </div>
  );
};

export default Upload;
