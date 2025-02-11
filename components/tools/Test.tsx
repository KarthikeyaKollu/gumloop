"use client";
import React from "react";
import { Handle, Position } from "reactflow";
import { Info, Square } from "lucide-react";

const Test = () => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg w-96 p-4 border border-gray-200">
      {/* Handles */}
      

      {/* Header */}
      <div className="bg-white rounded-xl p-4 flex items-center gap-3">
        <div className="bg-pink-400 p-2 rounded-lg text-white">
          <Square className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-black">Test Search</span>
          <p className="text-sm text-gray-600">Test components</p>
        </div>
        <button className="ml-auto text-black hover:text-gray-700">
          <Info className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Test;