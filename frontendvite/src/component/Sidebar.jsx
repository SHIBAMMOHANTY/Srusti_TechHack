import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-52 bg-gray-800 text-white h-full p-4">
       <h1 className="text-white font-bold text-lg md:text-xl pb-4 mb-4 border-b-[1px]">
    <Link to={'/'}>AROGRYA <span className="text-green-600">SETU</span></Link>
      </h1>
      <ul className="space-y-8 text-lg font-medium tracking-wide">
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
