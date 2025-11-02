import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Loader({ onFinish }) {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onFinish, // call parent function when done
    });

    // Animate text in and out
    tl.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .to(textRef.current, { y: -50, opacity: 0, duration: 0.8, delay: 0.4 })
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white z-[9999] overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-4xl font-bold tracking-widest uppercase"
      >
        Loading...
      </h1>
    </div>
  );
}

export default Loader;
