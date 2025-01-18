// components/Sidebar.js

import { useState } from "react";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Sidebar</h2>
          <button
            onClick={closeSidebar}
            className="mt-4 p-2 bg-red-500 text-white"
          >
            Close
          </button>
        </div>
        <div className="p-4">
          <p>Some content here...</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
