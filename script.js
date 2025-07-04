document.addEventListener('DOMContentLoaded', function () {
    // Generate Navbar
    // Check if navLinks is defined (it should be if data.js is loaded)
    if (typeof navLinks !== 'undefined') {
        generateNavbar(navLinks);
    }

    // Generate Project Cards (only on index.html which has body id 'page-index')
    const projectsRow = document.getElementById('projects-row');
    const bodyId = document.body.id;

    if (typeof projects !== 'undefined' && projectsRow && bodyId === 'page-index') {
        generateProjectCards(projects, projectsRow);
    }
    // If you want to load different projects on other pages, you would add more conditions here.
    // For example, you could add specific project data arrays to data.js:
    // else if (typeof artShopProjects !== 'undefined' && projectsRow && bodyId === 'page-artshops') {
    //     generateProjectCards(artShopProjects, projectsRow);
    // }
    // else if (typeof vibeCodedProjects !== 'undefined' && projectsRow && bodyId === 'page-vibecoded') {
    //     generateProjectCards(vibeCodedProjects, projectsRow);
    // }
});

function generateNavbar(linksData) {
    const navbarNavUl = document.querySelector('#navbarNav ul.navbar-nav');
    if (!navbarNavUl) {
        console.error('Navbar UL element not found!');
        return;
    }

    navbarNavUl.innerHTML = ''; // Clear existing nav items

    linksData.forEach(linkInfo => {
        const li = document.createElement('li');
        li.className = 'nav-item mx-2';

        const a = document.createElement('a');
        a.className = 'nav-link text-white';
        a.href = linkInfo.href;
        a.textContent = linkInfo.text;
        if (linkInfo.target) {
            a.target = linkInfo.target;
        }

        li.appendChild(a);
        navbarNavUl.appendChild(li);
    });
}

function generateProjectCards(projectsData, containerElement) {
    containerElement.innerHTML = ''; // Clear existing project cards

    projectsData.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const cardDiv = document.createElement('div'); // Renamed from 'card' to 'cardDiv' to avoid conflict
        cardDiv.className = 'card h-100';

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title; // Consider a more descriptive alt text or use project.description
        img.className = 'card-img-top';
        cardDiv.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = project.title;
        cardBody.appendChild(title);

        const description = document.createElement('p');
        description.className = 'card-text';
        description.innerHTML = project.description; // Using innerHTML to allow <br> tags from data
        cardBody.appendChild(description);

        if (project.languages) {
            const languages = document.createElement('p');
            languages.className = 'card-text';
            languages.innerHTML = `<strong>Languages:</strong><br>${project.languages}`;
            cardBody.appendChild(languages);
        }

        if (project.tools) {
            const tools = document.createElement('p');
            tools.className = 'card-text';
            tools.innerHTML = `<strong>Tools:</strong><br>${project.tools}`;
            cardBody.appendChild(tools);
        }

        if (project.links && project.links.length > 0) {
            project.links.forEach(linkInfo => {
                const link = document.createElement('a');
                link.href = linkInfo.href;
                link.textContent = linkInfo.text;
                link.className = 'btn btn-primary mr-2 mb-2'; // Added margin for spacing
                if (linkInfo.target) {
                    link.target = linkInfo.target;
                }
                cardBody.appendChild(link);
            });
        }

        cardDiv.appendChild(cardBody);
        col.appendChild(cardDiv);
        containerElement.appendChild(col);
    });
}
