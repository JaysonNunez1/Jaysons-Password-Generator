document.getElementById('generate').addEventListener("click", function() {
    const length = parseInt(prompt('Choose password length (8-128):', '8'), 10);
    if (length < 8 || length > 128) {
        alert('Password length must be between 8 and 128 Characters.');
        return;
    }
    