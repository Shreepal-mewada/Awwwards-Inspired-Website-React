import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function AnimatedText({ text }) {
  useEffect(() => {
    gsap.from("#wert", {
      opacity: 0,
      ease: "power1.inOut",
      // scrollTrigger: {
      //   trigger: '#wert',
      //   // start: "top bottom ",
      //   // end: "center center",
      //   scrub: true,
      // },
    });
    gsap.to("#wert", {
      duration: 2,
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#wert",
        start: "bottom bottom ",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="min-h-full relative" id="animatetext">
      <div className="text-center text-4xl md:text-[6rem]" id="wert">
        {text.split("<br/>").map((line, i) => (
          <div
            key={i}
            id="shree"
            className="animated-text"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimatedText;

