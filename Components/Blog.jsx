import axios from "axios";
import { useState, useEffect } from "react";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  // State management
  const [blogData, setBlogData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch blog data from API
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        'https://personalwebsite-backend.vercel.app/api/getBlog'
      );
      setBlogData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Event handlers
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseDetails = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-8 bg-white">
      {/* Header section */}
      <p className="text-2xl font-serif text-black mb-12">
        This page contains some of my learnings and observations from life and technology.
      </p>

      {/* Blog list section */}
      <div className="space-y-8">
        {blogData && blogData.length > 0 ? (
          blogData.map((blog, index) => (
            <div 
              key={blog._id} 
              className="border-b border-gray-100 pb-6 last:border-b-0"
            >
              <h3
                onClick={() => handleBlogClick(blog)}
                className="
                  text-xl 
                  font-serif 
                  leading-loose 
                  text-red-800 
                  underline 
                  hover:text-gray-600 
                  cursor-pointer 
                  transition-colors
                "
              >
                {index + 1}. {blog.blogName}
              </h3>
            </div>
          ))
        ) : (
          <p className="text-lg font-serif text-black">
            loading...
          </p>
        )}
      </div>

      {/* Blog details modal */}
      {selectedBlog && (
        <BlogDetails 
          blog={selectedBlog} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
};

export default Blog;