"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <Home />
        </div>
      </div>
    </div>
  );
} 