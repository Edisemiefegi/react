import React from "react";

function Card({ username = "lorem", age = 12, myObj, img, arr }) {
  // console.log(props);
  return (
    <div className="">
      <div className=" rounded-md  md:flex gap-4 bg-slate-100 ">
        <div className="w-12 h-12 ">
          <img
            src={img}
            alt=""
            className="w-full h-full object-contain rounded-md "
          />
        </div>{" "}
        <div className="text-start p-2">
          <p className="text-sky-500">{username}</p>
          <p>{age} this is the age</p>
          <p>{myObj?.address.city}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            harum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
