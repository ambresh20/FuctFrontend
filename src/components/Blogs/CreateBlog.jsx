import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "./Blog";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const blogData = {
      title,
      content,
      metaDescription,
    };

    try {
      await createBlog(blogData); // Call createBlog with the blog data
      console.log(blogData);
      alert("Blog created successfully!");
      navigate("/blogs");
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-[100vh]">
      <h1 className="text-3xl font-bold mb-4">Create a New Blog</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-4 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="metaDescription">
            Meta Description 
          </label>
          <input
            type="text"
            id="metaDescription "
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
			placeholder="Example: Introduction of JS"
            className="w-full p-2 border border-gray-400 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded"
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
