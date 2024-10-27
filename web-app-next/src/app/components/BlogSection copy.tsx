"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";


//const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = 'http://localhost:3000'; // Adjust to your backend's actual base URL

// Function to get the excerpt with the first 15 words
const getExcerpt = (content) => {
  return content.split(' ').slice(0, 15).join(' ') + '...';
};

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogs?limit=4`); // Fetch only 4 blogs
        setPosts(response.data.blogs || []); // Adjust to fit the response structure
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="blog-section py-10 ">
        <BackgroundBeamsWithCollision>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Latest from Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <div key={post._id} className="max-w-xs w-full group/card">
              <div
                className="relative h-96 rounded-md shadow-xl bg-cover bg-center flex flex-col justify-between"
                style={{ backgroundImage: `url(${new URL(post.featuredImage, apiUrl)})` }}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

                {/* Author Info at the top */}
                <div className="p-4 relative z-10 flex flex-row items-center space-x-4">
                  <Image
                    height="100"
                    width="100"
                    alt="Avatar"
                    src="/manu.png"
                    className="h-10 w-10 rounded-full border-2 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-normal text-base text-gray-50">{post.author}</p>
                    <p className="text-sm text-gray-400">{new Date(post.publishTime).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Blog Title, Content and Continue Reading Button at the bottom */}
                <div className="p-4 relative z-10">
                  <div className="text content mb-4">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50">{post.title}</h1>
                    <p className="font-normal text-sm text-gray-50 my-4" dangerouslySetInnerHTML={{ __html: getExcerpt(post.content) }}></p>
                  </div>
                  <a
                    href={`/blogs/${post._id}`}
                    className="inline-block px-3 py-1 text-sm bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
                  >
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default BlogSection;
