"use client";

import React, { useEffect, useState } from "react";

const BreakpointTracker: React.FC = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");
  const [currentWidth, setCurrentWidth] = useState(0);
  const env = process.env.NODE_ENV;

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setCurrentWidth(currentWidth);

      if (currentWidth >= 640 && currentWidth < 768) {
        setCurrentBreakpoint("sm");
      } else if (currentWidth >= 768 && currentWidth < 1024) {
        setCurrentBreakpoint("md");
      } else if (currentWidth >= 1024 && currentWidth < 1280) {
        setCurrentBreakpoint("lg");
      } else if (currentWidth >= 1280 && currentWidth < 1536) {
        setCurrentBreakpoint("xl");
      } else if (currentWidth >= 1536) {
        setCurrentBreakpoint("2xl");
      } else {
        setCurrentBreakpoint("");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (env === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 px-1 bg-gray-200 text-gray-800 text-right">
      Current Breakpoint: <span>{currentBreakpoint}</span>
      <br />
      Current width: {currentWidth}
    </div>
  );
};

export default BreakpointTracker;
