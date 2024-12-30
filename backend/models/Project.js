const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
});

module.exports = mongoose.model('Project', ProjectSchema);