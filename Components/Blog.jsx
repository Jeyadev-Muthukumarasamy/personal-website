import axios from "axios";
import { useState, useEffect } from "react";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get ('https://personalwebsite-backend-ju73fwig5.vercel.app/api/getBlog');
      setBlogData(response.data); // Assuming the response is an array of blogs
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseDetails = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-8 bg-white">
      <p className="text-2xl font-serif text-black">
        This page contains some of my learnings and observations from life and technology.
      </p>
      <div className="space-y-8">
        {blogData && blogData.length > 0 ? (
          blogData.map((blog, index) => (
            <div key={blog._id} className="border-b border-gray-100 pb-6 last:border-b-0">
              <h3
                onClick={() => handleBlogClick(blog)}
                className="text-xl font-serif leading-loose text-red-800 underline hover:text-gray-600 cursor-pointer transition-colors"
              >
                {index + 1}. {blog.blogName}
              </h3>
            </div>
          ))
        ) : (
          <p className="text-lg font-serif text-black">Will post blogs soon</p>
        )}
      </div>

      {selectedBlog && (
        <BlogDetails blog={selectedBlog} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default Blog;
