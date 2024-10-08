import axios from 'axios';

const API_URL = 'https://backend-25ro.onrender.com/api/posts';

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Fetch a single blog by ID
export const fetchBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

// Create a new blog
export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(API_URL, blogData);
    return response.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Update an existing blog by ID
export const updateBlog = async (id, updatedBlog) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedBlog);
    return response.data;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};
 


// Fetch blogs by category
export const fetchBlogsByCategory = async (category) => {
  try {
    const response = await axios.get(`https://backend-25ro.onrender.com/api/categories/${category}`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching blogs by category:", error);
    throw error;
  }
};

// Fetch blogs by tag
export const fetchBlogsByTag = async (tag) => {
  try {
    const response = await axios.get(`https://backend-25ro.onrender.com/api/tags/${tag}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs by tag:", error);
    throw error;
  }
};