import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa"; 
import ReactStars from "react-rating-stars-component"; 

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./blogs.json") 
      .then((result) => result.json())
      .then((data) => setBlogs(data.blogPosts));
  }, []);

  // Function to handle share button click
  const handleShare = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id
          ? { ...blog, shareCount: blog.shareCount + 1 } 
          : blog
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {blogs.map((blog) => (
        <div
          className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200"
          key={blog.id}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
          <p className="text-gray-600 mb-4">{blog.description}</p>

          {/* Blogger Info */}
          <div className="mb-6">
            <strong className="text-gray-800">Written by:</strong> <span className="text-gray-600">{blog.blogger.name}</span>
            <p className="text-gray-500 text-sm">{blog.blogger.identity}</p>
          </div>

          {/* Review Section */}
          <div className="space-y-4 mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Reviews:</h3>
            {blog.reviews.map((review, index) => (
              <div key={index} className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-2">
                  <strong className="text-gray-800">{review.reviewer}</strong>
                  <span className="text-gray-500">({review.country})</span>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <ReactStars
                  count={5}
                  value={review.rating}
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            ))}
          </div>

          {/* Share Button */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => handleShare(blog.id)}
              className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none"
            >
              <FaShareAlt />
              <span>Share</span>
            </button>
          </div>

          {/* Share Count */}
          <p className="text-gray-500 text-sm">{blog.shareCount} Shares</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
