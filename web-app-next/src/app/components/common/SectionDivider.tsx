"use client";
import React from "react";

const SectionDivider = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="heartbeat-line relative w-full h-[2px] bg-gray-400 overflow-hidden">
        <div className="heartbeat-pulse absolute left-0 h-full w-full flex items-center animate-heartbeat">
          <div className="line h-[2px] bg-red-600 w-full"></div>
          <div className="spike bg-red-600 w-[2px]"></div>
          <div className="line h-[2px] bg-red-600 w-full"></div>
          <div className="spike bg-red-600 h-8 w-[2px]"></div>
          <div className="line h-[2px] bg-red-600 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
