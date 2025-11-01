import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Button from "./Button";

function ImgBand() {
  useEffect(() => {
    gsap.from("#wertt", {
      opacity: 0,
      ease: "power1.inOut",
      // scrollTrigger: {
      //   trigger: '#wert',
      //   // start: "top bottom ",
      //   // end: "center center",
      //   scrub: true,
      // },
    });
    gsap.to("#wertt", {
      duration: 2,
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#wertt",
        start: "bottom bottom ",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="w-full min-h-screen h-[1000px] bg-black relative p-20">
      <div className=" top-20 justify-self-center text-center flex flex-col gap-1 text-white font-general text-m uppercase md:text-[10px]">
        the multiversal ip world
        <div className="text-7xl text-center" id="wertt">
          the story of <br /> a hidden realm
        </div>
      </div>
      <div
        className="justify-self-center top-66 w-4/6 h-[500px] absolute  overflow-hidden"
        id="forclip"
      >
        <img
          className=" top-0 left-0 object-cover object-center h-full w-full overflow-hidden"
          src="../public/img/entrance.webp"
          alt=""
        />
      </div>
      <div className="absolute bottom-35 right-30 w-1/5 gap-10">
        <p className=" text-blue-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          molestiae cum, impedit dolores nemo voluptatibus qui necessitatibus
        </p>
        <Button
          text={"DESCOVER PROLOGUE"}
          classcontainer={
            " mt-5 absolute px-5 rounded-2xl py-4 text-[12px] bg-white font-light flex items-center justify-center cursor-pointer rounded-4xl  "
          }
        />
      </div>
    </div>
  );
}

export default ImgBand;
