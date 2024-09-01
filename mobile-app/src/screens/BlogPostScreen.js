import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const BlogPostScreen = ({ route }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${route.params.id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [route.params.id]);

  if (!post) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
      <Text><em>By {post.author.name}</em></Text>
    </View>
  );
};

export default BlogPostScreen;
