"use client";
import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  ConnectionMode,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "@/components/Sidebar";
import AskAINode from "@/components/AskAINode";
import { v4 as uuidv4 } from 'uuid';
import Web from "@/components/tools/Web";

const nodeTypes = {
  askAI: AskAINode,
  web:Web
};

const ExampleFlow = () => {
  // Get stored flow from localStorage
  const getStoredFlow = () => {
    const flow = localStorage.getItem("react-flow");
    return flow ? JSON.parse(flow) : { nodes: [], edges: [] };
  };

  const [nodes, setNodes] = useState(getStoredFlow().nodes);
  const [edges, setEdges] = useState(getStoredFlow().edges);

  // Define functions that need to be passed to nodes
  const handleClick = useCallback(() => {
    console.log("Hello from the click");
  }, []);

  const updateNodeData = useCallback((nodeId, newData) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return { ...node, data: { ...node.data, ...newData } };
        }
        return node;
      })
    );
  }, []);

  // Reassign functions to nodes after loading them
  useEffect(() => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          onRun: handleClick,
          updateNodeData: updateNodeData,
        },
      }))
    );
  }, [handleClick, updateNodeData]);

  // Save the flow to localStorage whenever nodes or edges change
  useEffect(() => {
    const flow = { nodes, edges };
    localStorage.setItem("react-flow", JSON.stringify(flow));
  }, [nodes, edges]);

  // Handle new connections
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => {
        if (eds.some((edge) => edge.source === params.source && edge.target === params.target)) {
          return eds;
        }
        return addEdge(params, eds);
      });
    },
    []
  );

  // Handle node changes
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // Handle edge changes
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // Drag and Drop handlers
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) return;

    const position = { x: event.clientX - 200, y: event.clientY - 50 }; // Adjust positioning

    const newNode = {
      id: uuidv4(),
      type,
      position,
      data: {
        onRun: handleClick, // Reassign the function
        updateNodeData: updateNodeData, // Reassign the function
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  const runFlow = () => {
    console.log("Nodes are", nodes);
    console.log("Edges are", edges);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <button
        onClick={runFlow}
        className="absolute right-3 top-5 p-2 border-2 rounded-md"
        style={{ zIndex: 100 }}
      >
        Run
      </button>
      <div className="flex-1 h-screen" onDrop={onDrop} onDragOver={onDragOver}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          connectionMode={ConnectionMode.Loose}
          fitView
        >
          <Background />
          {/* <Controls /> */}
          {/* <MiniMap /> */}
        </ReactFlow>
      </div>
    </div>
  );
};

export default ExampleFlow;
