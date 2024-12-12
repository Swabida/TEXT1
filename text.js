// Show Register Form
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Show Login Form
function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Login function
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        alert('Login successful!');
        // Add your login logic here (e.g., API call or redirection)
    }
}

// Register function
function register() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        alert('Registration successful!');
        // Add your registration logic here (e.g., API call or redirection)
    }
}
