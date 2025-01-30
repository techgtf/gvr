import React, { useState, useEffect, useRef } from "react";
import "./loader.css";

const Loader = () => {
  const [percent, setPercent] = useState(0);
  // const [loadingComplete, setLoadingComplete] = useState(false);
  const percentRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevPercent) => Math.min(prevPercent + 1, 100));
      if (percent >= 100) clearInterval(interval);
    }, 250);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [percent]);

  return (
    <>
      <div
        role="status"
        aria-live="polite"
        className="loader flex h-screen w-full fixed top-0 left-0 flex-col items-center justify-center bg-white text-white !z-40"
      >
        <div
          className="loader_in w-full relative h-full text-center place-content-center"
          style={{ display: "grid", background: "rgb(239 245 250)" }}
        >
          <h3 className="midlandfontmedium tracking-[4px] text-black">
            Loading Luxury Properties...
          </h3>
          <h3
            ref={percentRef}
            className="midlandfontmedium tracking-[4px] text-black mt-5"
          >
            {percent}%
          </h3>
        </div>
      </div>
    </>
  );
};

export default Loader;
