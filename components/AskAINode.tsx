"use client";
import React, { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";
import { Square, Info, ChevronDown, ChevronUp } from "lucide-react";

const AskAINode = ({ data, id }) => {
  const [formData, setFormData] = useState({
    prompt: data?.prompt || "",
    context: data?.context || "",
    model: data?.model || "Claude 3 Haiku",
  });
  const [expanded, setExpanded] = useState(false);

  // Update formData when the 'data' prop changes
  useEffect(() => {
    if (data) {
      setFormData({
        prompt: data.prompt || "",
        context: data.context || "",
        model: data.model || "Claude 3 Haiku",
      });
    }
  }, [data]);

  // Handle input changes and update both formData and trigger the parent's onRun function
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    // Call the onRun function if it's provided
    if (data?.onRun) {
      data.onRun(newFormData);
    }

    // Optionally update the parent component's node data
    if (data?.updateNodeData) {
      data.updateNodeData(id, newFormData);
    }
  };

  return (
    <div className="relative bg-slate-100 rounded-2xl shadow-lg w-96 p-4 border border-gray-200">
      {/* Handles */}
      <Handle type="target" position={Position.Top} id="prompt" className="w-3 h-3 bg-gray-400" style={{ left: "20%" }} />
      <Handle type="target" position={Position.Top} id="context" className="w-3 h-3 bg-gray-400" style={{ left: "80%" }} />
      <Handle type="target" position={Position.Right} id="response" className="w-3 h-3 bg-gray-400" />
      <Handle type="source" position={Position.Bottom} id="tools" className="w-3 h-3 bg-gray-400" />

      {/* Header */}
      <div className="bg-pink-300 rounded-xl p-4 flex items-center gap-3">
        <div className="bg-pink-400 p-2 rounded-lg text-white">
          <Square className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-black">{data?.label || "Using AI"}</span>
          <p className="text-sm text-gray-600">Generate AI-powered responses.</p>
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-700">
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* Prompt Section */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Prompt</label>
        <input
          type="text"
          name="prompt"
          value={formData.prompt}
          onChange={handleChange}
          placeholder="Summarize the article..."
          className="w-full p-2 border rounded-lg text-sm mt-1 text-black"
        />
      </div>

      {/* Context Section */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Context</label>
        <input
          type="text"
          name="context"
          value={formData.context}
          onChange={handleChange}
          placeholder="[Optional] Additional context..."
          className="w-full p-2 border rounded-lg text-sm mt-1 text-black"
        />
      </div>

      {/* AI Model Selection */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Choose AI Model</label>
        <div className="relative">
          <select
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg text-sm appearance-none bg-white mt-1 text-black"
          >
            <option>Claude 3 Haiku</option>
            {/* Additional options can be added here */}
          </select>
        </div>
      </div>

      {/* Expandable Options */}
      <button
        className="mt-4 text-sm flex items-center gap-1 text-gray-600 hover:text-gray-800"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{expanded ? "Hide Options" : "Show More Options"}</span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {expanded && (
        <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700">Additional settings can go here.</p>
        </div>
      )}
    </div>
  );
};

export default AskAINode;
