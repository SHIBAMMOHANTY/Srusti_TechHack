import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-800 text-white h-full p-4">
      <ul className="space-y-4">
        <li><Link to="/dashboard/profile">Profile</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
        <li><Link to="/dashboard/analytics">Analytics</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
