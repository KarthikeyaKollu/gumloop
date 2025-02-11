"use client";

import React, { useState } from "react";
import { Monitor, Expand } from "lucide-react";

const News = () => {

  const [mode, setMode] = useState(false);

  return (
    <div className={`relative flex w-full transition-all`}>
      {/* Main Container */}
      <div className="bg-white w-full rounded-2xl shadow-lg p-2 border-4 border-green-400-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 p-2 rounded-xl">
            <div className="bg-green-400 p-4 rounded-lg text-white relative shadow-xl">
              <Monitor className="w-8 h-8" />
              <img
                src="/assets/news.svg
                "
                alt="AI Image"
                className="w-6 px-1 py-1 rounded-sm bg-white absolute left-[45px]"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <span className="text-sm text-black">News</span>
              <h4 className="text-gray-600">Get Weather Transcript</h4>
            </div>

            {/* Toggle Mode */}
            <div className="flex items-center">
              <span className="text-xs text-green-600 pr-2">Loop Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={mode}
                  onChange={() => setMode(!mode)}
                />
                <div className="w-10 h-5 bg-green-300 rounded-full peer peer-checked:bg-green-500 relative">
                  <div className="absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full transition-all peer-checked:left-6"></div>
                </div>
              </label>
            </div>

            {/* Expand Button */}
           
          </div>

          <div className="px-4 py-2">
            <p>Get the transcript of a calculator</p>
          </div>
        </div>

        {/* Expanded Content */}
        
      </div>
    </div>
  );
};

export default News;
