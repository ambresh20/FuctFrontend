import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs, deleteBlog } from "./Blog";
import Spinner from "../Spinner";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        console.log(data);
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      try {
        await deleteBlog(id);
        const updatedBlogs = await fetchBlogs();
        setBlogs(updatedBlogs);
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const getShortContent = (text, wordLimit) => {
    const words = text.split(" ");
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
  };

  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-[100vh]">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>

      <div className="my-8">
        <Link to="/create-blog" className="font-bold bg-green-400 text-white p-2 rounded-md">
          Create a New Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-gray-200 shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 inline">{getShortContent(blog.content, 20)}</p>
            <Link to={`/blog/${blog.slug}`} className="text-blue-500 hover:underline ml-2 inline">
              Read More
            </Link>

            {/* Display categories and tags */}
            <div className="mt-4">
              <span>Category: </span>
              {blog.categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/blogs/category/${category.name.toLowerCase()}`}
                  className="text-blue-600 hover:underline inline-block mr-2"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <div className="mt-2">
              <span>Tags: </span>
              {blog.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blogs/tag/${tag.name.replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:underline inline-block mr-2"
                >
                  {tag.name}
                </Link>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => handleDelete(blog.slug)}
                className="bg-red-600 hover:bg-red-800 text-white font-semibold px-2 py-1 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105"
              >
                Delete
              </button>

              <Link
                to={`/edit-blog/${blog.slug}`}
                className="text-white bg-yellow-500 hover:bg-yellow-700 font-semibold px-2 py-1 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105"
              >
                Edit
              </Link>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
