const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); // Database configuration

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const blogRoutes = require('./routes/blogRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const userRoutes = require('./routes/userRoutes');

// Use Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
