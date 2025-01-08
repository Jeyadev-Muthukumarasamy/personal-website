import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Corrected import

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-8 bg-white">
      <div className="space-y-12">
        <p className="text-xl font-serif leading-loose text-black">
          During my teenage years, I was an avid gamer and enjoyed tinkering with smartphones and gadgets. 
          This curiosity and passion for technology eventually led me to pursue a Bachelor of Engineering 
          in Computer Science and Engineering, which I completed in 2023. While I still enjoy gaming, 
          my focus has shifted more towards exploring the intricacies of software development and engineering.
        </p>

        <p className="text-xl font-serif leading-loose text-black">
          I'm Jeyadev, a curiosity-driven developer passionate about exploring diverse areas of programming. 
          My goal is to become a well-rounded generalist with a strong specialization in backend development. 
          I am currently learning to build scalable systems. I primarily work with JavaScript for both 
          frontend and backend development, but I'm eager to expand my expertise into other programming 
          languages soon. Apart from these, I love spending time with my friends and family.
        </p>
        <p className="text-xl font-serif leading-loose text-black">
          You can contact me at:
        </p>

        <div className="flex space-x-8 mt-8">
          <a 
            href="tel:+917010483940" 
            className="text-green-600 hover:text-green-800 font-serif text-xl flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
            <span>+91 7010483940</span>
          </a>

          <a 
            href="mailto:jeydevm27@gmail.com" 
            className="text-red-700 hover:text-red-900 font-serif text-xl flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            <span>jeydevm27@gmail.com</span>
          </a>
        </div>

        <div className="flex space-x-8">
          <a 
            href="https://www.linkedin.com/in/jeyadev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 font-serif text-xl flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/jeydev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-gray-600 font-serif text-xl flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
