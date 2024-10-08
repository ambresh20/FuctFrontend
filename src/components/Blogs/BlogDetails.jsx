import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogById } from './Blog';  
import Spinner from '../Spinner';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await fetchBlogById(id);
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    getBlog();
  }, [id]);

  if (loading) {
    return <div className='h-[100vh] flex justify-center items-center'>
        {/* Loading... */}
        <Spinner />
      </div>;
  }

  return (
    <div className="container mx-auto p-4 h-[100vh]">
      {blog ? (
        <div>
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <p className="text-gray-700 mt-4">{blog.content}</p>
        </div>
      ) : (
        <div className='font-bold  '>Blog not found</div>
      )}
    </div>
  );
};

export default BlogDetails;
