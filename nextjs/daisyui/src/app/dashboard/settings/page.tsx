"use client";

import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Products = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
        <div className="bg-white min-h-screen">
            <Header toggleSidebar={toggleSidebar} />
            
            <div className="flex">
            <Sidebar isOpen={sidebarOpen} />
            
            {/* Main Content */}
            <div className="flex-1 p-6">
                        
                <div>
                    <h1 className="text-2xl font-bold mb-6 text-gray-700">Ayarlar</h1>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Products;