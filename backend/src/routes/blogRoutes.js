// backend/routes/blogRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { getBlogs } = require('../controllers/blogController');


// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Image upload endpoint
router.post('/upload', upload.single('image'), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` });
});

// Create blog endpoint
router.post('/create', async (req, res) => {
  // Your logic to save the blog post in the database
});

router.get('/', getBlogs);


module.exports = router;
