async function fetchProjects() {
    const response = await fetch('http://localhost:5000/api/projects');
    const projects = await response.json();
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project';
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><img src="${project.image}"></a>`;
        projectList.appendChild(projectItem);
    });
}

async function fetchBlogs() {
    const response = await fetch('http://localhost:5000/api/blogs');
    const blogs = await response.json();
    const blogList = document.getElementById('blog-list');
    blogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.className = 'blog';
        blogItem.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p><small>${new Date(blog.date).toLocaleDateString()}</small>`;
        blogList.appendChild(blogItem);
    });
}





document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
    fetchBlogs(); 

});




