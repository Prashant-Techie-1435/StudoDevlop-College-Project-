        const mockData = {
            jobs: [
                { id: 1, company: 'Google', role: 'Software Engineer Intern', deadline: '2025-12-01' },
                { id: 2, company: 'Boeing', role: 'Mechanical Engineering Intern', deadline: '2025-11-15' },
                { id: 3, company: 'Siemens', role: 'Data Analyst Trainee', deadline: '2025-11-20' }
            ]
        };
        document.addEventListener('DOMContentLoaded', () => {
            renderJobs();
        });
        function renderJobs() {
            const container = document.getElementById('job-opportunities');
            const grid = document.createElement('div');
            grid.className = 'card-grid';
            mockData.jobs.forEach(job => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${job.role}</h3>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Deadline:</strong> ${job.deadline}</p>
                    <a href="#" class="cta-button">Apply Now</a>
                `;
                grid.appendChild(card);
            });
            container.appendChild(grid);
        }