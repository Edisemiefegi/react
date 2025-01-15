import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0 py-2 ">
      <nav className="bg-white border-gray-200  lg:PX-6 PY-2.5 w-10/12 mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center font-bold">
            Edi <span className="text-blue-800">Logo</span>
          </Link>

          <ul className="flex gap-6">
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
                  `${isActive ? "text-blue-800 " : ""} hover:text-blue-700`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-blue-800 " : ""} hover:text-blue-700`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  `${isActive ? "text-blue-800 " : ""} hover:text-blue-700`
                }
              >
                User
              </NavLink>
            </li>
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
          </ul>

          <div className="flex gap-3">
            <button>Log in</button>
            <button className="text-white bg-blue-800 px-2 py-1.5 rounded-md">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
