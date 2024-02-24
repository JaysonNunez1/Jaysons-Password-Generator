document.getElementById('generate').addEventListener('click', function () {
    const length = parseInt(prompt('Choose password length (8-128):', '8'), 10);
    if (length < 8 || length > 128) {
      alert('Password length must be between 8 and 128 characters.');
      return;
    }
  
    const hasLowerCase = confirm('Include lowercase letters?');
    const hasUpperCase = confirm('Include uppercase letters?');
    const hasNumbers = confirm('Include numbers?');
    const hasSpecialChars = confirm('Include special characters?');
  
    if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialChars) {
      alert('At least one character type must be selected.');
      return;
    }
  
    const password = generatePassword(length, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChars);
    document.getElementById('password').value = password;
  });
  
  function generatePassword(length, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChars) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}|[]\\:;"<>?,./';
  
    let password = '';
  
    const getRandomChar = (chars) => {
      const randomIndex = Math.floor(Math.random() * chars.length);
      return chars[randomIndex];
    };
  
    for (let i = 0; i < length; i++) {
      let character;
      
      if (hasLowerCase){
        character = getRandomChar(lowerCaseChars);
      } else if (hasUpperCase) {
        character = getRandomChar(upperCaseChars);
      } else if (hasNumbers) {
        character = getRandomChar(numberChars);
      } else if (hasSpecialChars) {
        character = getRandomChar(specialChars);
      }
      password += character;
    }
  
    return password;
  };