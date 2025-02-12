"use client";

import React, { useState } from "react";
import { Monitor, Maximize2 } from "lucide-react";

const Firestore = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mode, setMode] = useState(false);

  return (
    <div className={`relative flex w-[500px] transition-all`}>
      {/* Main Container */}
      <div className="bg-white w-full rounded-2xl shadow-lg p-2 border-4 border-orange-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-orange-200 p-4 rounded-xl">
          <div className="flex items-center gap-3 p-2 rounded-xl">
            <div className="bg-orange-400 p-4 rounded-lg text-white relative shadow-xl">
              <Monitor className="w-8 h-8" />
              <img
                src="/assets/fire.webp"
                alt="AI Image"
                className="w-6 px-2 py-2 rounded-sm bg-white absolute left-[45px]"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <span className="text-sm text-black font-serif">Fire Store</span>
              <h4 className="text-gray-800 ">Get YouTube Transcript</h4>
            </div>

            {/* Toggle Mode */}
            <div className="flex items-center">
              <span className="text-xs text-gray-600 pr-2">Loop Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={mode}
                  onChange={() => setMode(!mode)}
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 relative">
                  <div className="absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full transition-all peer-checked:left-6"></div>
                </div>
              </label>
            </div>

            {/* Expand Button */}
            <button
              className="ml-2 p-2 bg-orange-600 text-white rounded-lg"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-label="Expand Content"
            >
            
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 py-2">
            <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. firestore_logo enim animi fugit?</p>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 mb-4 p-4  rounded-xl">
            <div>
              <label className="text-sm font-semibold text-gray-700">Video Link</label>
              <input
                type="text"
                placeholder="https://youtube.com/..."
                className="w-full text-xs p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Firestore;
