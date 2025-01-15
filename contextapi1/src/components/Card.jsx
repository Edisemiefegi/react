import React from "react";
import useTheme from "../contexts/Theme";

function Card() {
  const { themeMode } = useTheme();
  return (
    <div
      className={`flex flex-col w-full border shadow-sm h-full p-6 gap-4 rounded-md transition-colors duration-300 ${
        themeMode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full h-40 ">
        <img src="/me.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <p className="font-semibold text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, et.
      </p>
      <div className="flex justify-between items-center">
        <p className="font-bold  text-xl">$5600</p>
        <button className="py-2 px-4 text-white bg-blue-600 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
