

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-50 overflow-y-auto">
      <div className="max-w-3xl mx-auto py-16 px-8">
        <button 
          onClick={onClose}
          className="mb-8 font-serif text-black hover:text-gray-600 transition-colors"
        >
          ← Back
        </button>
        
        <div className="space-y-8">
          <h2 className="text-2xl font-serif text-black">
            {project.projectName}
          </h2>
          
          <p className="font-serif text-lg leading-loose text-black">
            {project.projectHeading}
          </p>
          
          <div className="space-y-4 font-serif text-black">
            <div>
              <h3 className="text-lg mb-2">Tech Stack</h3>
              <p className="leading-relaxed">
                {project.techStack.split(',').map((tech, index) => (
                  <span 
                    key={index}
                    className="inline-block mr-2 mb-2 px-3 py-1 bg-gray-50 rounded"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </p>
            </div>

            <div className="space-y-2">
              {project.githublink && (
                <a 
                  href={project.githublink}
                  className="block text-black hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository ↗
                </a>
              )}
              
              {project.video && (
                <a 
                  href={project.video}
                  className="block text-black hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails