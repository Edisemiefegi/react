import React, { useState } from "react";
import { useMode } from "../contexts";

function ToggleMode() {
  const { mode, lightTheme, darkTheme } = useMode();

  const onChangeBtn = () => {
    if (mode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <div className="flex gap-3">
      <div
        className={`w-14 rounded-full p-0.5 flex items-center ${
          mode === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <button
          className={`w-6 h-6 rounded-full cursor-pointer transition-transform ${
            mode === "dark" ? "bg-gray-900 translate-x-7" : "bg-white"
          }`}
          onClick={onChangeBtn}
        ></button>
      </div>
      <p className="font-semibold text-sm">Toggle Theme</p>
    </div>
  );
}

export default ToggleMode;
