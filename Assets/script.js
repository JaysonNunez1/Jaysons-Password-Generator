document.getElementById('generate').addEventListener("click", function() {
    const length = parseInt(prompt('Choose password length (8-128):', '8'), 10);
    if (length < 8 || length > 128) {
        alert('Password length must be between 8 and 128 Characters.');
        return;
    }

    const hasLowerCase = confirm('Include lowercase letters?');
    const hasUpperCase = confirm('Include uppercase letters?');
    const hasNumbers = confirm('Include numbers?');
    const hasSpecialChars = confirm('Include special characters?');

    if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialChars) {
        alert('At least one character type should be selected.');
        return;
    }

    const password = generatePassword(length, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChars);
    document.getElementById( "password" ).value = password;
});
    