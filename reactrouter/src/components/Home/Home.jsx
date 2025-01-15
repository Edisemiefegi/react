import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="md:h-screen md:mb-0 mb-36 w-10/12 mx-auto flex md:flex-row flex-col justify-between items-center">
      <div className="w-96 h-96">
        <img src="/image.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="md:text-end text-center  flex flex-col gap-4">
        <div>
          <p className="md:text-3xl text-xl font-bold ">Download Now </p>
          <p className="text-lg font-bold ">Lorem ipsum</p>
        </div>

        <button className="text-white text-xs bg-blue-800 px-3 py-1.5 rounded-md">
          Download now
        </button>
      </div>
    </div>
  );
}

export default Home;
