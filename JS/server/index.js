function login() {
    const username = document.getElementById("usernameid").value;
    const password = document.getElementById("passwordid").value;

    try {
        const response = fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password }),
            async: false
        });

        if (response.ok) {
            const data = response.json();
            document.getElementById("loginMessage").innerText = 'Login successful!';
            // Redirect to navOptions.html after a successful login
            window.location.href = 'navOptions.html';
        } else {
            document.getElementById("loginMessage").innerText = 'Invalid username or password';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("loginMessage").innerText = 'An error occurred. Please try again later.';
    }
}
