import React from "react";
import Button from "./Button";

function Section2() {
  return (
    <div className="bg-blue-100 w-full min-h-screen px-10 py-20 ">
      <div className="w-[95vw] h-[80vh] bg-black relative">
        <div className="justify-self-center text-white flex flex-col justify-center gap-10 w-1/2 text-center h-full items-center">
          <p className="uppercase font-general text-blue-50 text-[10px]">
            Join Zentry
          </p>
          <p id="shree" className="text-8xl">
            let's build the <br /> new era of <br /> gaming together.
          </p>
          <Button
            text={"CONTACT US"}
            classcontainer={
              "px-4 rounded-3xl py-3 text-[12px] bg-blue-50 flex items-center gap-2 justify-center cursor-pointer"
            }
          />
        </div>

        <div
          className="absolute top-15 right-10 h-[69vh] w-[23vw]"
          id="section-one"
        >
          <img
            src="../public/img/swordman.webp"
            className="object-center object-cover"
            alt=""
          />
        </div>
        <div
          className="absolute top-0 left-40 h-[27vh] w-[15vw]"
          id="section-two"
        >
          <img
            src="../public/img/contact-1.webp"
            className=" w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div
          className="absolute bottom-0 left-35 h-[20vh] w-[18vw]"
          id="section-three"
        >
          <img
            src="../public/img/contact-2.webp"
            className=" w-full h-full bg-center bg-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
