import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlogById, updateBlog } from './Blog';  
import Spinner from '../Spinner';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await fetchBlogById(id);
        setBlog({ title: data.title, content: data.content });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    getBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBlog(id, blog);
      navigate(`/blog/${id}`);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  if (loading) {
    return <div className='h-[100vh] flex justify-center items-center'>
        {/* Loading... */}
        <Spinner />
      </div>;
  }

  return (
    <div className="container mx-auto p-4 min-h-[100vh]">

      <h1 className="text-3xl font-bold mb-4">Edit Blog</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Blog Content
          </label>
          <textarea
            id="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Blog
        </button>
      </form>

    </div>
  );
};

export default EditBlog;

