import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import { BsCursorFill } from "react-icons/bs";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const [smallimg, setSmallimg] = useState(1);
  const [bigimg, setBigimg] = useState(4);
  let heroMain = useRef(null);
  useGSAP(() => {
    gsap.from(heroMain.current, {
      scale: 0.2,
      duration: 0.4,
      ease: "power1.inOut",
    });

    gsap.to(heroMain.current, {
      transformOrigin: "center center",
      scale: 1,
      duration: 0.4,
      ease: "power1.inOut",
      onStart: () => heroMain.current.play(),
    });
  }, [smallimg]);

  useGSAP(() => {
    gsap.set("#hero-main", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10",
    });
    gsap.from("#hero-main", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-main",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div
      id="hero-main"
      className="w-100vw h-100vh bg-black relative overflow-x-hidden overflow-y-hidden"
    >
      <div id="hero-main-cont" className="w-screen h-screen">
        <video
          ref={heroMain}
          className="w-full h-full object-cover"
          src={`../public/videos/hero-${bigimg}.mp4`}
          loop
          muted
          autoPlay
        ></video>
        <div
          id="hero-sub-cont"
          className="w-1/7 h-1/4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer  scale-50 opacity-0 hover:opacity-100 hover:scale-100 transition-all duration-500"
        >
          <video
            onClick={() => {
              setBigimg((bigimg % 4) + 1);
              setSmallimg((smallimg % 4) + 1);
            }}
            className=" w-full h-full object-cover "
            loop
            autoPlay
            muted
            src={`\../public/videos/hero-${smallimg}.mp4`}
          ></video>
        </div>
      </div>
      <h1
        className="absolute bottom-0 right-7 text-[180px] text-blue-50"
        id="shree"
      >
        SHREE
      </h1>

      <div className="absolute top-15 left-10 text-blue-50 flex flex-col items-start">
        <h1 className="text-[180px]" id="shree">
          REDEFINE
        </h1>
        <p>
          Enter the Metagame Layer <br />
          Unleash the Play Economy
        </p>
        <Button
          leftIcon={<BsCursorFill />}
          text={"Watch Trailer"}
          classcontainer={
            "px-4 rounded-3xl py-2 mt-3 bg-yellow-300 flex items-center  gap-2 justify-center cursor-pointer"
          }
        />
        {/* <button className="justify-self-start">click</button> */}
      </div>
    </div>
  );
}

export default Hero;
