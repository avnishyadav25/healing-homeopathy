"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

//const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:3000"; // Adjust to your backend's actual base URL

// Function to get the excerpt with the first 15 words
const getExcerpt = (content) => {
  return content.split(" ").slice(0, 15).join(" ") + "...";
};

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogs?limit=7`); // Fetch the latest 7 blogs
        setPosts(response.data.blogs || []); // Adjust to fit the response structure
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="blog-section py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Latest from Our Blog
        </h1>
        <BentoGrid className="max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <BentoGridItem
              key={post._id}
              title={
                <h2 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
              }
              description={
                <p className="font-normal text-sm text-gray-700 dark:text-gray-200">
                  {getExcerpt(post.content)}
                </p>
              }
              header={
                <div className="relative h-40 w-full rounded-md overflow-hidden mb-4">
                  <Image
                    src={`${new URL(post.featuredImage, apiUrl)}`}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              }
              icon={
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p>By {post.author}</p>
                  <p>{new Date(post.publishTime).toLocaleDateString()}</p>
                </div>
              }
              className={index === 3 || index === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
        {/* More Blogs Button */}
        <div className="text-center mt-10">
          <a
            href="/blogs"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            More Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
