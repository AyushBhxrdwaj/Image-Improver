import React from "react";
import Home from "./components/Home";
import { FaSquareXTwitter } from "react-icons/fa6";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 py-8 px-4">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-600 to-gray-700 bg-clip-text text-transparent ">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-gray-500 mt-5">
          Upload Your Image and let Ai Enhance it for you in seconds!
        </p>
      </div>
      <Home />
      <div className="text-lg mt-4 flex gap-2 items-center justify-center ">
        <FaSquareXTwitter className="text-white text-xl mt-1 " /> 
        <a className=" text-white text-lg font-semibold" target="_" href="https://x.com/__ayuxh007">
          By Ayush Bhardwaj❤️
        </a>
      </div>
    </div>
  );
};

export default App;
