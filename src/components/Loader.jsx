import React from "react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white z-[9999]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
}

export default Loader;
