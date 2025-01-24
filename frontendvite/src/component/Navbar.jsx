import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-[4rem] w-full bg-blue-400 flex justify-between items-center px-6 md:px-16">
      <h1 className="text-white font-bold text-lg">Logo</h1>
      <ul className="flex gap-8 text-white text-lg font-bold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/doc">Doc</Link>
        </li>
      </ul>
      <div>
        <button className="bg-white text-blue-400 px-4 py-2 rounded"><Link to={'/login'}>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
