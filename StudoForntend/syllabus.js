        const standardYears = [
            {
                year: 'First Year',
                subjects: [
                    { name: 'Applied Mathematics I & II', materials: ['Calculus Notes', 'Linear Algebra Videos'] },
                    { name: 'Engineering Physics & Chemistry', materials: ['Physics Core Concepts', 'Chemistry Basic Principles'] },
                ]
            },
            {
                year: 'Second Year',
                subjects: [
                    { name: 'Data Structures', materials: ['DSA Algorithms Guide', 'Practice Problems Set 1'] },
                    { name: 'Database Management Systems', materials: ['Normalization Theory', 'SQL Queries Examples'] },
                ]
            },
            {
                year: 'Third Year',
                subjects: [
                    { name: 'Operating Systems', materials: ['OS Concepts Summary', 'Memory Management Lecture'] },
                    { name: 'Computer Networks', materials: ['Network Protocols Slides', 'Layered Architecture Diagram'] },
                ]
            },
            {
                year: 'Fourth Year',
                subjects: [
                    { name: 'Cloud Computing', materials: ['Cloud Models Guide', 'AWS Basics Tutorial'] },
                    { name: 'Big Data Analytics', materials: ['Hadoop Ecosystem Overview', 'Data Mining Algorithms'] },
                ]
            }
        ];
        const mechanicalYears = [
            {
                year: 'First Year',
                subjects: [
                    { name: 'Applied Mathematics I & II', materials: ['Calculus Notes', 'Linear Algebra Videos'] },
                    { name: 'Engineering Mechanics', materials: ['Statics and Dynamics notes', 'Forces and Vectors problems'] },
                ]
            },
            {
                year: 'Second Year',
                subjects: [
                    { name: 'Thermodynamics', materials: ['Heat Transfer Formulas', 'First Law Problems'] },
                    { name: 'Fluid Mechanics', materials: ['Fluid Flow Principles', 'Bernoulli\'s Equation notes'] },
                ]
            },
        ];
        const civilYears = [
             {
                year: 'First Year',
                subjects: [
                    { name: 'Applied Mathematics I & II', materials: ['Calculus Notes', 'Linear Algebra Videos'] },
                    { name: 'Engineering Graphics', materials: ['CAD Software Tutorial', 'Technical Drawing standards'] },
                ]
            },
            {
                year: 'Second Year',
                subjects: [
                    { name: 'Structural Analysis', materials: ['Load Bearing Calculations', 'Beam deflection problems'] },
                    { name: 'Geotechnical Engineering', materials: ['Soil Mechanics Basics', 'Foundation Design principles'] },
                ]
            },
        ];
        const mockData = {
            universities: [
                {
                    name: 'Mumbai University', 
                    branches: [
                        { name: 'Computer Engineering', years: standardYears },
                        { name: 'Information Technology', years: standardYears },
                        { name: 'Mechanical Engineering', years: mechanicalYears },
                        { name: 'Civil Engineering', years: civilYears },
                    ]
                },
                {
                    name: 'Pune University (SPPU)', 
                    branches: [
                        { name: 'Computer Engineering', years: standardYears },
                        { name: 'Information Technology', years: standardYears },
                        { name: 'Mechanical Engineering', years: mechanicalYears },
                        { name: 'Civil Engineering', years: civilYears },
                    ]
                },
                {
                    name: 'Delhi University (DU)', 
                    branches: [
                        { name: 'Computer Engineering', years: standardYears },
                        { name: 'Information Technology', years: standardYears },
                        { name: 'Mechanical Engineering', years: mechanicalYears },
                        { name: 'Civil Engineering', years: civilYears },
                    ]
                },
                {
                    name: 'Other / Not Listed',
                    branches: [
                        {
                            name: 'Request Your University/Branch',
                            years: [
                                { year: 'Feature Request', subjects: [{ name: 'Use the Help Desk to request your syllabus!', materials: ['We are constantly adding new content based on user demand.'] }] },
                            ]
                        }
                    ]
                }
            ]
        };
        document.addEventListener('DOMContentLoaded', () => {
            renderSyllabus();
            setupAccordion();
        });
        function renderSyllabus() {
            const container = document.getElementById('syllabus-content');
            mockData.universities.forEach(university => {
                const uniContainer = document.createElement('div');
                uniContainer.className = 'level-container level-1';
                const uniHeader = document.createElement('div');
                uniHeader.className = 'level-header';
                uniHeader.innerHTML = `<span class="icon-symbol">🏛️</span> ${university.name} <span class="chevron-icon">&#9660;</span>`;
                const uniContent = document.createElement('div');
                uniContent.className = 'level-content';
                uniContainer.appendChild(uniHeader);
                uniContainer.appendChild(uniContent);
                container.appendChild(uniContainer);
                university.branches.forEach(branch => {
                    const branchContainer = document.createElement('div');
                    branchContainer.className = 'level-container level-2';
                    const branchHeader = document.createElement('div');
                    branchHeader.className = 'level-header';
                    branchHeader.innerHTML = `<span class="icon-symbol">💻</span> ${branch.name} <span class="chevron-icon">&#9660;</span>`;
                    const branchContent = document.createElement('div');
                    branchContent.className = 'level-content';
                    branchContainer.appendChild(branchHeader);
                    branchContainer.appendChild(branchContent);
                    uniContent.appendChild(branchContainer);
                    branch.years.forEach(yearData => {
                        const yearContainer = document.createElement('div');
                        yearContainer.className = 'level-container level-3';
                        const yearHeader = document.createElement('div');
                        yearHeader.className = 'level-header';
                        yearHeader.innerHTML = `<span class="icon-symbol">📅</span> ${yearData.year} <span class="chevron-icon">&#9660;</span>`;
                        const yearContent = document.createElement('div');
                        yearContent.className = 'level-content';
                        yearContainer.appendChild(yearHeader);
                        yearContainer.appendChild(yearContent);
                        branchContent.appendChild(yearContainer);
                        yearData.subjects.forEach(subject => {
                            const subjectContainer = document.createElement('div');
                            subjectContainer.className = 'level-container level-4';
                            const subjectHeader = document.createElement('div');
                            subjectHeader.className = 'level-header';
                            subjectHeader.innerHTML = `<span class="icon-symbol">📚</span> ${subject.name} Syllabus <span class="chevron-icon">&#9660;</span>`;
                            const subjectContent = document.createElement('div');
                            subjectContent.className = 'level-content';
                            subjectContainer.appendChild(subjectHeader);
                            subjectContainer.appendChild(subjectContent);
                            yearContent.appendChild(subjectContainer);
                            subject.materials.forEach(material => {
                                const materialDiv = document.createElement('div');
                                materialDiv.className = 'level-5';
                                materialDiv.innerHTML = `<span class="icon-symbol" style="font-size: 1rem;">•</span> ${material}`;
                                subjectContent.appendChild(materialDiv);
                            });
                        });
                    });
                });
            });
        }
        function setupAccordion() {
            document.querySelectorAll('.level-header').forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
                    const icon = header.querySelector('.chevron-icon');
                    const isActive = header.classList.contains('active');
                    header.classList.toggle('active');
                    if (isActive) {
                        content.style.maxHeight = '0';
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        content.style.maxHeight = '2000px'; 
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });
        }