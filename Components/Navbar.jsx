import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8">
      {/* Logo Section */}
      <div>
        <h3 className="text-xl font-bold">Jeyadev</h3>
      </div>
      
      {/* Navigation Links */}
      <div>
        <ul className="flex space-x-8 text-red-600 font-medium">
          <Link to = "/">
          <li className="hover:text-red-800 cursor-pointer">Home</li>
          </Link>
          
          <Link to = "/projects">
          <li className="hover:text-red-800 cursor-pointer">Projects</li>
          </Link>
          <Link to = "/blog">
          <li className="hover:text-red-800 cursor-pointer">My thoughts and Blogs</li>
          </Link>
        
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
