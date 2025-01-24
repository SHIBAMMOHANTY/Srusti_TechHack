import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../component/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-900 h-[100vh]">
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
};

export default Dashboard;
