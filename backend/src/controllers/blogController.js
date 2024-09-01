const Blog = require('../models/Blog'); // Ensure the correct path to your Blog model

// Controller function to create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, content, tags, category, permalink, author, publishTime } = req.body;

    // If there's a file uploaded, use it as the featured image
    const featuredImage = req.file ? `/uploads/${req.file.filename}` : null;

    // Create a new blog instance
    const newBlog = new Blog({
      title,
      content,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [], // Assuming tags are comma-separated
      category,
      permalink,
      author,
      publishTime,
      featuredImage,
    });

    // Save the blog to the database
    await newBlog.save();

    // Respond with a success message and the created blog data
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    // Handle any errors that occur during the blog creation process
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
};

// Export the controller function(s)
module.exports = {
  createBlog,
  getBlogs
};
