        const mockData = {
            subjects: [
                { id: 1, name: 'Data Structures & Algorithms', year: 2, description: 'Covers fundamental algorithms and data structures.', prereqs: 'Object-Oriented Programming' },
                { id: 2, name: 'Thermodynamics', year: 2, description: 'Study of heat, work, and energy.', prereqs: 'Physics I, Calculus' },
                { id: 3, name: 'Machine Learning', year: 3, description: 'Introduction to supervised and unsupervised learning.', prereqs: 'Probability & Statistics, Python' }
            ]
        };
        document.addEventListener('DOMContentLoaded', () => {
            renderSubjects();
        });
        function renderSubjects() {
            const container = document.getElementById('subject-guides');
            mockData.subjects.forEach(subject => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${subject.name}</h3>
                    <p><strong>Year:</strong> ${subject.year}</p>
                    <p>${subject.description}</p>
                    <p><strong>Prerequisites:</strong> ${subject.prereqs}</p>
                `;
                container.appendChild(card);
            });
        }