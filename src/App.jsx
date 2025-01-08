import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Projects from '../Components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from '../Components/Blog';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define the route for Home */}
          <Route path="/" element={<Home />} />

          {/* Define the route for Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route path = "/blog" element={<Blog />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
