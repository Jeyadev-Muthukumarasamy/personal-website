import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  
  const isActiveLink = (path) => {
    return location.pathname === path ? 'text-zinc-900 font-medium' : 'text-zinc-600'
  } 

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-zinc-100">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-lg font-mono text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            Jeyadev
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            <li>
              <Link 
                to="/" 
                className={`${isActiveLink('/')} font-mono text-sm text-red-700  hover:text-zinc-900 transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`${isActiveLink('/projects')} font-mono text-sm text-red-700 hover:text-zinc-900 transition-colors`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`${isActiveLink('/blog')} font-mono text-sm text-red-700 hover:text-zinc-900 transition-colors`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
