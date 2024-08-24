document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy validation (Replace with actual validation logic)
    if (username === '999' && password === '123') {
        // Success
        window.location = "modulos/menu/index.html";
    } else {
        // Error
        document.getElementById('error-message').innerText = 'Usuario o contraseña incorrectos';
    }
});
