import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Corrected import

const Home = () => {
  return (
<div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8 md:p-16 font-mono">
      <div className="max-w-3xl mx-auto space-y-16 backdrop-blur-sm bg-white/80 p-8 md:p-12 rounded-lg shadow-sm">
        <div className="space-y-8">
          <p className="text-xl font-serif leading-loose text-gray-800 border-l-4 border-gray-200 pl-6">
            During my teenage years, I was an avid gamer and enjoyed tinkering with smartphones and gadgets. 
            This curiosity and passion for technology eventually led me to pursue a Bachelor of Engineering 
            in Computer Science and Engineering, which I completed in 2023. While I still enjoy gaming, 
            my focus has shifted more towards exploring the intricacies of software development and engineering.
          </p>

          <p className="text-xl font-serif leading-loose text-gray-800 border-l-4 border-gray-200 pl-6">
            I'm Jeyadev, a curiosity-driven developer passionate about exploring diverse areas of programming. 
            My goal is to become a well-rounded generalist with a strong specialization in backend development. 
            I am currently learning to build scalable systems. I primarily work with JavaScript for both 
            frontend and backend development, but I'm eager to expand my expertise into other programming 
            languages soon. Apart from these, I love spending time with my friends and family.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-serif text-gray-800 border-b border-gray-200 pb-2">
            Connect with me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="tel:+917010483940" 
              className="group flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
              <span className="text-gray-800">+91 7010483940</span>
            </a>

            <a 
              href="mailto:jeydevm27@gmail.com" 
              className="group flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
              <span className="text-gray-800">jeydevm27@gmail.com</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/jeyadev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
              <span className="text-gray-800">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/jeydev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
              <span className="text-gray-800">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>  );
};

export default Home;
