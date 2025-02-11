"use client";

import React, { useState } from "react";
import { Monitor,Maximize2 } from "lucide-react";

const Fileoperation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mode, setMode] = useState(false);

  return (
    <div className={`relative flex w-full transition-all`}>
      {/* Main Container */}
      <div className="bg-white w-full rounded-2xl shadow-lg p-2 border-4 border-blue-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-blue-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 p-2 rounded-xl">
            <div className="bg-blue-400 p-4 rounded-lg text-white relative shadow-xl">
              <Monitor className="w-8 h-8" />
              <img
                src="/assets/cal.svg"
                alt="AI Image"
                className="w-6 px-1 py-1 rounded-sm bg-white absolute left-[45px]"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <span className="text-sm text-black">File Operation</span>
              <h4 className="text-gray-800">CVS Reader</h4>
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
                <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 relative">
                  <div className="absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full transition-all peer-checked:left-6"></div>
                </div>
              </label>
            </div>

            {/* Expand Button */}
            <button
              className="ml-2 p-2 bg-blue-600 text-white rounded-lg"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-label="Expand Content"
            >
             <Maximize2 className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 py-2">
            <p>Get the transcript of a YouTube video</p>
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
                className="w-full text-xs p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">Choose AI Model</label> <br></br>
              <select className="p-2 mt-1 mb-2 border border-gray-300 text-xs rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option>Claude 3 Haiku</option>
                <option>GPT-4 Turbo</option>
                <option>Gemini Pro</option>
              </select>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Fileoperation;
