// scripts.js

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form inputs
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Validate inputs
    validateInput(username, isNotEmpty, "Username is required.");
    validateInput(email, isEmailValid, "Invalid email format.");
    validateInput(password, isPasswordValid, "Password must be at least 6 characters long.");
    validateInput(confirmPassword, value => value === password.value, "Passwords do not match.");
});

function validateInput(input, validationFn, errorMessage) {
    const errorElement = input.nextElementSibling;
    if (validationFn(input.value)) {
        input.classList.remove('error');
        errorElement.classList.remove('visible');
    } else {
        input.classList.add('error');
        errorElement.classList.add('visible');
        errorElement.textContent = errorMessage;
    }
}

function isNotEmpty(value) {
    return value.trim() !== '';
}

function isEmailValid(value) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
}

function isPasswordValid(value) {
    return value.length >= 6;
}
