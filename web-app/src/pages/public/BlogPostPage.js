import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPostPage = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${match.params.id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [match.params.id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><em>By {post.author.name}</em></p>
    </div>
  );
};

export default BlogPostPage;
