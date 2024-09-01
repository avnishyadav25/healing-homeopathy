import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const BlogScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <View>
      <Text>Blog Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={post => post._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('BlogPost', { id: item._id })}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BlogScreen;
