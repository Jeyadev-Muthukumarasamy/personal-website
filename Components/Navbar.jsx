import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-4 md:px-8 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-mono tracking-tight">Jeyadev</h3>
        </div>
        
        {/* Navigation Links */}
        <div className="flex justify-center md:justify-end">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-mono">
            <li>
              <Link to="/" className="text-red-800 hover:text-gray-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-red-800 hover:text-gray-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-red-800 hover:text-gray-600 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
