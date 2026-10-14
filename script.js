async function loadProfile() {
     try {
         const res = await fetch('project.json');
         const data = await res.json();
         document.getElementById('student-name').textContent = data.name;
         document.getElementById('student-course').textContent = data.course;
         document.getElementById('about-text').textContent = data.about;
         document.getElementById('contact-email').textContent = `Email: ${data.email}`;
         document.getElementById('fb-link').href = data.facebook;
         document.getElementById('gh-link').href = data.github;
         // Skills
         const skillsList = document.getElementById('skills-list');
         data.skills.forEach(skill => {
             const span = document.createElement('span');
             span.className = 'skill-tag';
             span.textContent = skill;
             skillsList.appendChild(span);
         });
         // Projects
         const container = document.getElementById('projects-container');
         container.innerHTML = '';
         data.projects.forEach(proj => {
             const card = document.createElement('div');
             card.className = 'project-card';
             card.innerHTML = `
                 <img src="${proj.image}" alt="${proj.title}">
                 <h3>${proj.title}</h3>
                 <p>${proj.description}</p>
             `;
             container.appendChild(card);
         });
     } catch (err) {
         console.error('Error loading data:', err);
     }
 }
 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         const targetSection = document.querySelector(targetId);
         if (targetSection) {
             targetSection.scrollIntoView({ behavior: 'smooth' });
         }
     });
 });
 // Start loading when page is ready

document.addEventListener('DOMContentLoaded', loadProfile);
