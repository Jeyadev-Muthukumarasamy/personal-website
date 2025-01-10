import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-8 bg-white">
      <div className="space-y-12">
        <p className="font-serif text-lg leading-loose text-black">
          During my teenage years, I was an avid gamer and enjoyed tinkering with smartphones and gadgets. This hands-on experience with technology sparked my interest in the field of software development. It eventually led me to pursue a Bachelor of Engineering in Computer Science and Engineering, which I completed in 2023. While I still enjoy gaming, my focus has shifted more towards exploring the intricacies of software development and engineering. I didn't do much coding during college, but I learned some advanced coding and development  primarily after completing college during a 1-year gap, although I did learn some basics in college.
        </p>

        <p className="font-serif text-lg leading-loose text-black">
          I'm a curiosity-driven developer passionate about exploring diverse areas of programming. 
          My goal is to become a well-rounded generalist with a strong specialization in backend development. 
          I am currently learning to build scalable systems. I primarily work with JavaScript for both 
          frontend and backend development, but I'm eager to expand my expertise into other programming 
          languages soon. Apart from these, I love spending time with my friends and family.
        </p>

        <div>
          <div className="h-px bg-zinc-200" />
          <p className="font-serif text-lg leading-loose text-black">
            You can contact me at:
          </p>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 my-4">
            <a 
              href="tel:+917010483940" 
              className="group flex items-center gap-x-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              <FontAwesomeIcon icon={faPhone} className="h-5 w-5 transition group-hover:scale-110" />
              <span>Phone</span>
            </a>
            <a 
              href="mailto:jeydevm27@gmail.com" 
              className="group flex items-center gap-x-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 transition group-hover:scale-110" />
              <span>Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/jeyadev27/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-x-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 transition group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Jeyadev-Muthukumarasamy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-x-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
            >
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5 transition group-hover:scale-110" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
