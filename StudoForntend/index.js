        const authModal = document.getElementById('authModal');
        const closeModal = document.querySelector('.close-btn');
        const loginSection = document.getElementById('login-section');
        const registerSection = document.getElementById('register-section');
        const showRegisterLink = document.getElementById('show-register');
        const showLoginLink = document.getElementById('show-login');
        const showLoginModalLink = document.getElementById('show-login-modal');
        const showRegisterModalLink = document.getElementById('show-register-modal');
        function openModal(section) {
            authModal.style.display = 'flex';
            if (section === 'register') {
                loginSection.style.display = 'none';
                registerSection.style.display = 'block';
            } else { 
                registerSection.style.display = 'none';
                loginSection.style.display = 'block';
            }
        }
        showLoginModalLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login');
        });
        showRegisterModalLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('register');
        });
        closeModal.addEventListener('click', () => {
            authModal.style.display = 'none';
        });
        window.addEventListener('click', (event) => {
            if (event.target == authModal) {
                authModal.style.display = 'none';
            }
        });
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('register');
        });
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login');
        });
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login attempted. (Functionality for demonstration purposes)');
            authModal.style.display = 'none';
        });
        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registration attempted. (Functionality for demonstration purposes)');
            authModal.style.display = 'none';
        });