import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogsByTag } from "./Blog";
import Spinner from "../Spinner";

const TagPage = () => {
  const { tag } = useParams();
  const [tagData, setTagData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogsByTag = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Attempting to fetch tag:", tag);

        const data = await fetchBlogsByTag(tag);
        console.log("API Response:", data);

        setTagData(data);
      } catch (error) {
        console.error("Error details:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });

        setError(
          error.response?.data?.message ||
            "An error occurred while fetching blogs"
        );
      } finally {
        setLoading(false);
      }
    };

    if (tag) {
      getBlogsByTag();
    }
  }, [tag]);

  if (loading)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (error) return <div>Error: {error}</div>;
  if (!tagData) return <div>No data found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Blogs with Tag: {tagData.tag?.name || tag}
      </h1>

      {tagData.posts && tagData.posts.length > 0 ? (
        tagData.posts.map((blog) => (
          <div
            key={blog._id}
            className="bg-gray-200 shadow-md rounded-md p-4 mb-4"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs found with this tag.</p>
      )}
    </div>
  );
};

export default TagPage;
