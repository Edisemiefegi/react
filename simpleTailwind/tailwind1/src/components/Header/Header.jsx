import React from "react";

function Header() {
  return (
    <div className=" flex justify-between text-xs md:text-sm font-bold items-center text-white  w-10/12 mx-auto py-8">
      <div>
        <p>Logo</p>
      </div>

      <ul className="text-white flex md:gap-32 gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className=" border py-2 px-6">Get started</button>
    </div>
  );
}

export default Header;
