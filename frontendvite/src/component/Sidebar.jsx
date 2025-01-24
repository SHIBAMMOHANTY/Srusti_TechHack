import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-52 bg-gray-800 text-white h-full p-4">
      <ul className="space-y-8 text-lg font-medium tracking-wide ">
        <Link to="/dashboard/analytics" className="flex items-center gap-2">
           Analytics
        </Link>
        <li>
          <Link to="/dashboard/adddata">Add Data</Link>
        </li>
        <li>
          <Link to="/dashboard/reports">Reports</Link>
        </li>
        <li>
          <Link to="/dashboard/survey">Surveys</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
