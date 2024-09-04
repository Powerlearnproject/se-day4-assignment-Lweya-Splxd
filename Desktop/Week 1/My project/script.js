document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form fields
        if (username.value.trim() === '') {
            alert('Please enter a username');
            return;
        }

        if (email.value.trim() === '') {
            alert('Please enter an email address');
            email.focus();

            return;
        }

        if (!isValidEmail(email.value)) {
            alert('Please enter a valid email address');
            return;
        }

        if (password.value.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match');
            return;
        }

        // If all validations pass, you can submit the form
        alert('Form submitted successfully!');
        form.reset();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
