import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Attempting to fetch category:', category);
        
        const response = await axios.get(`https://backend-25ro.onrender.com/api/categories/${category}`);
        
        console.log('API Response:', response.data);
        
        setCategoryData(response.data);
      } catch (error) {
        console.error("Error details:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        });
        
        setError(error.response?.data?.message || 'An error occurred while fetching blogs');
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchBlogsByCategory();
    }
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!categoryData) return <div>No data found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Blogs in Category: {categoryData.category?.name || category}
      </h1>
      
      {categoryData.posts && categoryData.posts.length > 0 ? (
        categoryData.posts.map((blog) => (
          <div key={blog._id} className="bg-gray-200 shadow-md rounded-md p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;