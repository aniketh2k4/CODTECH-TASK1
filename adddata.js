const mongoose = require('mongoose');
const Project = require('./models/Project'); // Ensure there are no spaces in the path
const Blog = require('./models/Blog');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const addData = async () => {
    try {
        // Adding a new project
        const newProject = new Project({
            title: "My New Project",
            description: "This is a description of my new project.",
            link: "http://example.com"
        });
        await newProject.save();
        console.log('Project added successfully!');

        // Adding a new blog
        const newBlog = new Blog({
            title: "My First Blog",
            content: "This is the content of my first blog post."
        });
        await newBlog.save();
        console.log('Blog added successfully!');
    } catch (error) {
        console.error('Error adding data:', error);
    } finally {
        mongoose.connection.close();
    }
};

addData();