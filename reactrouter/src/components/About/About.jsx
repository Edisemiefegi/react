import React from "react";

function About() {
  return (
    <div className="md:h-screen md:mb-0 mb-36 w-10/12 mx-auto flex md:flex-row flex-col justify-between items-center">
      <div className="w-96 h-96">
        <img src="/image.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className=" text-justify  flex flex-col gap-4 w-3/5">
        <p className="md:text-2xl text-xl font-bold ">
          React development is carried out by passionate developers
        </p>
        <p className=" ">
          Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores eveniet quia adipisci exercitationem nam aperiam nihil,
          vero facilis, quidem quisquam quae impedit qui beatae ex provident,
          sit obcaecati? Est, itaque!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          perspiciatis accusantium obcaecati provident nam architecto minima eum
          modi. Necessitatibus, laudantium.
        </p>
      </div>
    </div>
  );
}

export default About;
