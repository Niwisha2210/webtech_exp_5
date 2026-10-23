const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const recipeInput = document.getElementById("recipe");
const passwordInput = document.getElementById("password");

// Check whether the field is empty
function isEmpty(value) {
    return value.trim() === "";
}

// Validate email format
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Validate password length
function isStrongPassword(password) {
    return password.length >= 8;
}

// Display error message
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Clear previous error messages
function clearErrors() {
    showError("nameError", "");
    showError("emailError", "");
    showError("recipeError", "");
    showError("passError", "");
    showError("successMessage", "");
}

// Validate all fields
function validateForm() {
    let isValid = true;

    clearErrors();

    // Name validation
    if (isEmpty(nameInput.value)) {
        showError("nameError", "Please enter your name.");
        isValid = false;
    } else if (nameInput.value.trim().length < 3) {
        showError("nameError", "Name must have at least 3 characters.");
        isValid = false;
    }

    // Email validation
    if (isEmpty(emailInput.value)) {
        showError("emailError", "Email address is required.");
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError("emailError", "Please enter a valid email.");
        isValid = false;
    }

    // Favourite recipe validation
    if (isEmpty(recipeInput.value)) {
        showError("recipeError", "Please enter your favourite recipe.");
        isValid = false;
    }

    // Password validation
    if (isEmpty(passwordInput.value)) {
        showError("passError", "Password is required.");
        isValid = false;
    } else if (!isStrongPassword(passwordInput.value)) {
        showError("passError", "Password must be at least 8 characters.");
        isValid = false;
    }

    return isValid;
}

// Handle signup form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
        showError(
            "successMessage",
            "🎉 Welcome to YummyBites! Signup successful."
        );

        form.reset();
    }
});