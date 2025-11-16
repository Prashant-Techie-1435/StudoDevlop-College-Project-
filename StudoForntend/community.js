        const mockData = {
            forumPosts: [
                { id: 1, title: 'Best resources for DSA?', author: 'Anya', content: 'Looking for a good book or YouTube series to learn data structures and algorithms.' },
                { id: 2, title: 'Internship at XYZ Corp.', author: 'John', content: 'Just got an internship offer at XYZ Corp. Happy to answer questions about the process.' },
                { id: 3, title: 'Managing burnout during Sem V', author: 'Rajesh', content: 'Any tips on how to balance projects, exams, and social life without crashing?' }
            ],
        };
        document.addEventListener('DOMContentLoaded', () => {
            renderForumPosts();
        });
        function renderForumPosts() {
            const container = document.getElementById('forum-posts');
            mockData.forumPosts.forEach(post => {
                const blogPost = document.createElement('div');
                blogPost.className = 'blog-post';
                blogPost.innerHTML = `
                    <h4>${post.title}</h4>
                    <p><em>By ${post.author}</em></p>
                    <p>${post.content}</p>
                `;
                container.appendChild(blogPost);
            });
        }