const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// Create a new project
router.post('/', async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
});

module.exports = router;