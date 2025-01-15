import React, { useState, useEffect } from "react";
import useTheme from "../contexts/Theme";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };
  return (
    <div className="flex gap-3">
      <div
        className={`w-14 rounded-full p-0.5 flex items-center ${
          themeMode === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <button
          className={`w-6 h-6 rounded-full cursor-pointer transition-transform ${
            themeMode === "dark" ? "bg-gray-900 translate-x-7" : "bg-white"
          }`}
          onClick={onChangeBtn}
        ></button>
      </div>
      <p className="font-semibold text-sm">Toggle Theme</p>
    </div>
  );
}

export default ThemeBtn;
