import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full ">
      <div className="w-10/12 mx-auto  flex flex-col  gap-10 ">
        <div className="flex justify-between md:flex-row flex-col">
          <Link to="/" className="flex items-center font-bold">
            Edi <span className="text-blue-800">Logo</span>
          </Link>
          <div className="flex w-3/5 justify-between">
            <div className="flex flex-col gap-4">
              <p className="font-medium">RESOURCES</p>
              <ul className="text-gray-500 flex flex-col gap-2">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? "text-blue-800 " : ""} hover:text-blue-700`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      `${isActive ? "text-blue-800 " : ""} hover:text-blue-700 `
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-medium">FOLLOW US</p>
              <ul className="text-gray-500 flex flex-col gap-2">
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `${isActive ? "text-blue-800 " : ""} hover:text-blue-700`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      `${isActive ? "text-blue-800 " : ""} hover:text-blue-700 `
                    }
                  >
                    Discord
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-medium"> LEGAL </p>
              <ul className="text-gray-500 flex flex-col gap-2">
                <li>
                  <NavLink
                    to="/policy"
                    className={({ isActive }) =>
                      `${isActive ? "text-blue-800 " : ""} hover:text-blue-700`
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      `${isActive ? "text-blue-800 " : ""} hover:text-blue-700 `
                    }
                  >
                    Terms & Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sm text-center">
            @2024edi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
