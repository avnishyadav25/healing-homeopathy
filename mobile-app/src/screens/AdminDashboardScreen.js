import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AdminDashboardScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/posts/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setPosts(posts.filter(post => post._id !== id));
  };

  return (
    <View>
      <Text>Admin Dashboard</Text>
      <Button title="Create New Post" onPress={() => navigation.navigate('NewBlogPost')} />
      <FlatList
        data={posts}
        keyExtractor={post => post._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditBlogPost', { id: item._id })}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <Button title="Delete" onPress={() => handleDelete(item._id)} />
          </View>
        )}
      />
    </View>
  );
};

export default AdminDashboardScreen;
