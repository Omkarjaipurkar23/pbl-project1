function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordMatchMessage = document.getElementById("passwordMatchMessage");

    if (password === confirmPassword) {
        passwordMatchMessage.innerHTML = "Passwords match";
        passwordMatchMessage.style.color = "green";
    } else {
        passwordMatchMessage.innerHTML = "Passwords do not match";
        passwordMatchMessage.style.color = "red";
    }
}

// Add event listener to the confirmPassword field
document.getElementById("confirmPassword").addEventListener("input", validatePassword);