import React from 'react';


const BlogDetails = ({ blog, onClose }) => {
  if (!blog) return null;

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
          <h2 className="text-2xl font-serif text-black">{blog.blogName}</h2>

          <p className="font-serif text-lg leading-loose text-black">{blog.blogDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails