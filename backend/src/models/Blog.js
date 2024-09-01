// /backend/models/Blog.js

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String] },
  category: { type: String },
  featuredImage: { type: String }, // URL to the image
  permalink: { type: String, unique: true },
  author: { type: String, default: 'Healing Homeopathy' },
  publishTime: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', blogSchema);


