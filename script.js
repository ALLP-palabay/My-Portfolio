const profile.data {
      
     "name": "Allyssa P. Palabay",
     "course": "Bachelor of Scince in Information Technology",
     "about": "I am a dedicated student passionate about learning and building creative projects. I enjoy developing skills in technology and design. This portfolio showcases my school achievements.",
     "email": "prttyallyssa17@gmail.com",
     "facebook": "https://facebook.com/allyssa.palabay.10",
     "github": "https://github.com/ALLP.palabay",
     "skills": [
         "CSS",
         "JavaScript",
         "Communication",
         "Teamwork",
         "Problem Solving",
         "Creativity",
         "Time Management",
         "Active Listening"
     ],
     "projects": [
         {
         "title": "📝 Research Paper",
         "description": "Conducted research, gathered data, and wrote a complete academic paper on a chosen topic.",
         "image": "images/project1.jpg"
     }
   ]
 }

 function loadProfile() {
     try {
         document.getElementById('student-name').textContent = profileData.name;
         document.getElementById('student-course').textContent = profileData.course;
         document.getElementById('about-text').textContent = profileData.about;
         document.getElementById('contact-email').textContent = `Email: ${profileData.email}`;
         document.getElementById('fb-link').href = profileData.facebook;

         // Display skills
         const skillsList = document.getElementById('skills-list');
         profileData.skills.forEach(skill => {
             const span = document.createElement('span');
             span.className = 'skill-tag';
             span.textContent = skill;
             skillsList.appendChild(span);
         });
         // Display projects
         const container = document.getElementById('projects-container');
         container.innerHTML = '';
         profileData.projects.forEach(proj => {
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
 // Smooth scrolling for navigation links
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