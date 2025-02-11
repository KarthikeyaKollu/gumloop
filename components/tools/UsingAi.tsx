"use client";

import React, { useState } from "react";
import { Square, Expand } from "lucide-react";

const UsingAi = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mode, setMode] = useState(false);
  const [more, setMore] = useState(false);

  return (
    <div className={`relative flex ${more ?  "  bg-gray-200 rounded-lg p-2 w-full" : "w-full"} transition-all`}>
      {/* Main Container */}
      <div className="relative bg-white rounded-2xl shadow-lg w-[400px] p-4 border-2 border-pink-200 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="bg-pink-400 p-2 rounded-lg text-white">
            <Square className="w-6 h-6" />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="text-lg font-semibold text-black">Using AI</span>
            <p className="text-xs text-gray-600">AI components</p>
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
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-pink-500 relative">
                <div className="absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full transition-all peer-checked:left-6"></div>
              </div>
            </label>
          </div>

          {/* Expand Button */}
          <button
            className="ml-2 p-2 bg-pink-500 text-white rounded-lg"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
          >
            <Expand className="w-5 h-5" />
          </button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">Prompt</label>
              <input
                type="text"
                placeholder="Summarize the article in the context"
                className="w-full text-xs p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">Context</label>
              <textarea
                placeholder="[Optional] This is additional context for the AI model"
                className="w-full text-xs p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <div className="mt-4">
              <label className="text-sm font-semibold text-gray-700">Choose AI Model</label>
              <select className="p-2 mt-1 border border-gray-300 text-xs rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option>Claude 3 Haiku</option>
                <option>GPT-4 Turbo</option>
                <option>Gemini Pro</option>
              </select>
            </div>

            {/* Show More Options Button */}
            <div className="mt-4">
              <button
                onClick={() => setMore(!more)}
                className="text-xs font-semibold border-2 border-gray-300 p-2 rounded-lg"
              >
                {more ? "Hide More Options" : "Show More Options"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* More Options - Appears Side by Side */}
      {more && (
        <div className="ml-4 w-[350px] bg-gray-100 p-4 rounded-xl border border-gray-300">
          <h2 className="text-lg font-semibold text-black">More Options</h2>
          
          <label className="text-sm font-semibold text-gray-700">Promotion Code</label>
          <textarea
            className="p-2 border w-full border-gray-200 mt-1"
            placeholder="Given the context: {context}, respond to the user's query: {prompt}"
          ></textarea>

          <label className="text-sm font-semibold text-gray-700 mt-2 block">Timeout</label>
          <input
            type="text"
            placeholder="300"
            className="w-full text-xs p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button className="mt-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            Configure Inputs
          </button>
        </div>
      )}
    </div>
  );
};

export default UsingAi;
