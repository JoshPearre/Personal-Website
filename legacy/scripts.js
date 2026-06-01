document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;

        // Error checking for Name
        if (nameInput.value.trim() === '') {
            displayError(nameInput, 'Name is required.');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Error checking for Email
        if (emailInput.value.trim() === '') {
            displayError(emailInput, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError(emailInput, 'Invalid email format.');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Error checking for Phone (optional, but you can add validation if needed)
        // Example: Check if it contains only numbers and optionally hyphens/spaces
        const phoneValue = phoneInput.value.trim();
        if (phoneValue !== '') {
            if (phoneValue.length < 7 || phoneValue.length > 15) {
                displayError(phoneInput, 'Phone number must be between 7 and 15 digits.');
                isValid = false;
            } else if (!/^[0-9\s-]+$/.test(phoneValue)) {
                displayError(phoneInput, 'Invalid phone number format (numbers, spaces, and hyphens allowed).');
                isValid = false;
            } else {
                clearError(phoneInput);
            }
        } else {
            clearError(phoneInput); // Phone is optional, so clear any previous error if it's now empty
        }

        // Error checking for Message
        if (messageInput.value.trim() === '') {
            displayError(messageInput, 'Message is required.');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        if (isValid) {
            // Simulate form submission (replace with your actual submission logic)
            console.log('Form submitted successfully!');
            displaySuccess("Your message has been sent successfully!  We'll be in contact shortly!");
            contactForm.reset(); // Clear the form after successful submission
        }
    });

    function displayError(inputElement, errorMessage) {
        const errorDivId = inputElement.id + 'Error';
        let errorDiv = document.getElementById(errorDivId);
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = errorDivId;
            errorDiv.className = 'error-message';
            errorDiv.style.color = 'red';
            inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
        }
        errorDiv.textContent = errorMessage;
    }

    function clearError(inputElement) {
        const errorDivId = inputElement.id + 'Error';
        const errorDiv = document.getElementById(errorDivId);
        if (errorDiv) {
            errorDiv.textContent = '';
        }
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displaySuccess(successMessage) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = successMessage;
        successDiv.style.color = 'green';
        contactForm.parentNode.insertBefore(successDiv, contactForm);

        // Remove the success message after a few seconds (optional)
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 5000);
    }
});
