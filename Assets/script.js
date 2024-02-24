//event listener on the "Generate " button
document.getElementById('generate').addEventListener('click', function () {
   //prompt the user to choose a password length  between 8 and 128 characters.
    const length = parseInt(prompt('Choose password length (8-128):', '8'), 10);
    //if the user enters a length outside the valid range show an error message and return.
    if (length < 8 || length > 128) {
      alert('Password length must be between 8 and 128 characters.');
      return;
    }
  //confirm whether to include uppercase letters, lowercase letters, numbers, and special characters.
    const hasLowerCase = confirm('Include lowercase letters?');
    const hasUpperCase = confirm('Include uppercase letters?');
    const hasNumbers = confirm('Include numbers?');
    const hasSpecialChars = confirm('Include special characters?');
  //If the user doesn't select any character types, show an  error message and return.
    if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialChars) {
      alert('At least one character type must be selected.');
      return;
    }
  // Generates the password based on the users selected options.
    const password = generatePassword(length, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChars);
    document.getElementById('password').value = password;
  });
  // Define a function to generate a password based on the given options
  function generatePassword(length, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChars) {
    // Defines the different character sets
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}|[]\\:;"<>?,./';
  
    let password = '';
  //Define a helper function to get a random character from a given character set
    const getRandomChar = (chars) => {
      const randomIndex = Math.floor(Math.random() * chars.length);
      return chars[randomIndex];
    };
  //loop through the desired password length and add a random character from the selected  character sets.
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
      //adds the randomly chosen character to the password string
      password += character;
    }
  // Returns the completed password
    return password;
  };