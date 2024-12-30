const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI; // Ensure this is defined
console.log('MongoDB URI:', MONGODB_URI); // Debugging line
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import Routes
const projectRoutes = require('./routes/projects');
const blogRoutes = require('./routes/blogs'); // Import blog routes
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes); // Use blog routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



