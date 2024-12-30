const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blogs
router.get('/', async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);    
});

// Create a new blog
router.post('/', async (req, res) => {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.json(newBlog);
});

module.exports = router;