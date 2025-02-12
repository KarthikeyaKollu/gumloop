"use client";

import React, { useState } from "react";
import { Square, Expand } from "lucide-react";

const WebScraping = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSecondCardVisible, setIsSecondCardVisible] = useState(false);
  const [mode, setMode] = useState(false);

  return (
    <div className={`relative flex ${isSecondCardVisible ? "  bg-gray-200 rounded-lg p-2 w-full":"w-full"} transition-all`}>
      {/* Left Section (Main Card) */}
      <div className="bg-white rounded-2xl shadow-lg p-4 border-2 border-yellow-200 flex-1">
        {/* Header */}
        <div className="bg-white rounded-xl p-4 flex items-center gap-3">
          <div className="bg-yellow-400 p-2 rounded-lg text-white">
            <Square className="w-6 h-6" />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="text-lg font-semibold text-black">Web Scraping</span>
            <p className="text-xs text-gray-600">Web scraping components</p>
          </div>

          {/* Toggle Mode */}
          <div className="flex items-center">
            <span className="text-xs text-gray-600 pr-2">Loop Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={mode}
                onChange={() => setMode((prev) => !prev)}
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-yellow-500 relative">
                <div className="absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full transition-all peer-checked:left-6"></div>
              </div>
            </label>
          </div>

          {/* Expand Button */}
          <button
            className="ml-2 p-2 bg-yellow-500 text-white rounded-lg"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
          >
            <Expand className="w-5 h-5" />
          </button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 transition-all">
            {/* URL Input */}
            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">URL</label>
              <input
                type="text"
                placeholder="https://www.gumloop.com/pipeline"
                className="w-full text-xs p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Advanced Scraping Toggle */}
            <div className="mt-4 flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700">
                Use Advanced Scraping?
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isSecondCardVisible}
                  onChange={() => setIsSecondCardVisible((prev) => !prev)}
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-yellow-500 relative">
                  <div className="absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full transition-all peer-checked:left-6"></div>
                </div>
              </label>
            </div>

            {/* More Options Button */}
            <button
              className="mt-2 text-xs font-semibold border-2 border-gray-300 p-2 rounded-lg"
              onClick={() => setIsSecondCardVisible((prev) => !prev)}
              aria-expanded={isSecondCardVisible}
            >
              {isSecondCardVisible ? "Hide More Options" : "Show More Options"}
            </button>
          </div>
        )}
      </div>

      {/* Right Section (More Options) */}
      {isSecondCardVisible && (
        <div className=" p-4 bg-gray-100 rounded-xl border border-gray-300 w-64 transition-all">
          <h2 className="text-lg font-semibold text-black">More Options</h2>
          <label className="text-sm font-semibold text-gray-700">Timeout</label>
          <input
            type="text"
            placeholder="300"
            className="w-full text-xs p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="mt-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 w-full">
            Configure Inputs
          </button>
        </div>
      )}
    </div>
  );
};

export default WebScraping;
