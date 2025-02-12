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
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "test")}
        draggable
      >
       Test
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "ai")}
        draggable
      >
       UsingAi
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "scraping")}
        draggable
      >
      Web Scraping
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "youtube")}
        draggable
      >
     You Tube
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "calculator")}
        draggable
      >
   Calculator
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "time")}
        draggable
      >
      Time
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "weather")}
        draggable
      >
      Weather
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "news")}
        draggable
      >
      News
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "firestore")}
        draggable
      >
      Firestore
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "telegram")}
        draggable
      >
       Telegram
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "gmail")}
        draggable
      >
     Gmail
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "linkedin")}
        draggable
      >
  Linkedin
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "profile")}
        draggable
      >
  Linkedin Profile
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "crawler")}
        draggable
      >
  Website Crowler
      </div>
      <div
        className="p-3 bg-green-500 rounded cursor-pointer text-center"
        onDragStart={(event) => onDragStart(event, "file")}
        draggable
      >
    File Operation
      </div>
      
    </aside>
  );
};

export default Sidebar;
