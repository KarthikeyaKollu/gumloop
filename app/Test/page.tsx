import React from "react";
import { Home, Search, ShoppingCart,Maximize2} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center gap-3">
        <Home size={24} />
        <span className="text-lg font-bold">My Website</span>
      </div>
      <div className="flex items-center gap-4">
        <Search size={24} className="cursor-pointer hover:text-gray-400" />
        <ShoppingCart size={24} className="cursor-pointer hover:text-gray-400" />
        <Maximize2 />
        <Expand />
      </div>
    </nav>

  );
};

export default Navbar;
