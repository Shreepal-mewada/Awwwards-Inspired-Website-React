import React, { useEffect, useState } from "react";
import Button from "./Button";
import { BsCursorFill } from "react-icons/bs";

function Nav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const arr = ["NEXUS", "VOULT", "PROLOGUE", "ABOUT", "CONTACT"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down → hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }
      // If scrolling up → show navbar
      else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav
      className={`fixed top-3 flex justify-between z-100 justify-self-center w-1/2 border border-red-600 bg-gray-900 text-white py-1 px-6 rounded-3xl transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <div className="flex justify-center items-center gap-9">
        <img
          className="w-10 rounded-full"
          src="../public/img/logo.png"
          alt=""
        />
        <Button
          leftIcon={<BsCursorFill />}
          text={"Product"}
          classcontainer={
            "px-3 rounded-3xl bg-blue-50 flex items-center gap-2 justify-center cursor-pointer"
          }
        />
      </div>
      <div className="flex gap-9 px-9 align-center items-center text-[13px] font-general text-blue-50   ">
        {arr.map((item, id) => {
          return (
            <h4 key={id} className=" hover:decoration-4 cursor-pointer">
              {item}
            </h4>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
