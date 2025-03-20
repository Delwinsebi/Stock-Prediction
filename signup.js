// Password toggle functionality
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordToggle = document.getElementById('passwordToggle');
const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');

// Function to toggle password visibility
function togglePasswordVisibility(input, toggle) {
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
    toggle.className = `bx ${type === 'password' ? 'bx-hide' : 'bx-show'} password-toggle`;
}

// Add click event listeners for password toggles
passwordToggle.addEventListener('click', () => togglePasswordVisibility(passwordInput, passwordToggle));
confirmPasswordToggle.addEventListener('click', () => togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggle));

// Form submission handler
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return;
    }
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a successful signup
    alert('Account created successfully!');
    
    // Store user data in localStorage (for demo purposes)
    localStorage.setItem('userFullName', fullName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('isLoggedIn', 'true');
    
    // Redirect to the main page
    window.location.href = 'index.html';
}); 