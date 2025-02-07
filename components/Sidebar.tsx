import React from "react";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="w-60 p-4 bg-gray-800 text-white h-screen flex flex-col gap-4">
      <h3 className="text-lg font-bold">Drag Nodes</h3>
      <div
        className="p-3 bg-blue-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "askAI")}
        draggable
      >
        Ask AI Node
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "web")}
        draggable
      >
       Web
      </div>
    </aside>
  );
};

export default Sidebar;
