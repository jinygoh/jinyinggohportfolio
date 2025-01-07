document.addEventListener('DOMContentLoaded', function() {
    const projectData = [
      {
            title: "Project 1",
            description: "Description for project 1 here.",
            image: "project1.png",
            tech: ["HTML", "CSS", "JS"],
            github: "https://github.com/your-github-username/project1",
        },
        {
            title: "Project 2",
            description: "Description for project 2 here.",
            image: "project2.png",
            tech: ["Python", "Django", "PostgreSQL"],
            github: "https://github.com/your-github-username/project2",
        },
        {
            title: "Project 3",
            description: "Description for project 3 here.",
            image: "project3.png",
            tech: ["React", "Node.js", "Express"],
            github: "https://github.com/your-github-username/project3",
        }
    ];

    const projectCardsContainer = document.getElementById('project-cards');

    projectData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
          <div class="card h-100">
              <img src="${project.image}" alt="${project.title}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <p class="card-text"><strong>Tech:</strong> ${project.tech.join(', ')}</p>
                    <a href="${project.github}" target="_blank" class="btn btn-primary">GitHub</a>
                </div>
           </div>
        `;
      projectCardsContainer.appendChild(card);
    });
});