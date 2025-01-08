import axios from "axios";
import ProjectDetails from "./ProjectDetails";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://personalwebsite-backend-ebb7hmwqq.vercel.app/api/get");
      setProjectData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-8 bg-white">
      <div className="space-y-8">
        {projectData && projectData.map((data, index) => (
          <div 
            key={data._id} 
            className="border-b border-gray-100 pb-6 last:border-b-0"
          >
            <h3 
              onClick={() => handleProjectClick(data)}
              className="text-xl font-serif leading-loose text-red-800 underline hover:text-gray-600 cursor-pointer transition-colors"
            >
              {index + 1}. {data.projectName}
            </h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetails 
          project={selectedProject} 
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default Projects;
