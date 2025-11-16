        document.getElementById('supportForm').addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Your support message has been submitted. We will contact you soon!');
            document.getElementById('supportForm').reset();
        });