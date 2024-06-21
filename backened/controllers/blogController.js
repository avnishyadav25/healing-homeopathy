const db = require('../config/db');

exports.getBlogs = (req, res) => {
  const query = 'SELECT * FROM blogs';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
};

exports.createBlog = (req, res) => {
  const { title, content, category, author_id } = req.body;
  const query = 'INSERT INTO blogs (title, content, category, author_id) VALUES (?, ?, ?, ?)';
  db.query(query, [title, content, category, author_id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Blog posted successfully');
  });
};
