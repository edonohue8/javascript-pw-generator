// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var passwordText = document.querySelector("#password");

// Password characters in arrays
const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', '[', ']', ':', '"', ';', '<', '>', '?', ',', '.', '/'];

// Main function
function generatePassword() {
  
  // Empty arrays
  let resultArray = [];
  let userArray = [];

  // Initial prompt
  let passwordLengthChoice = prompt("Please choose a password length of at least 8 characters and no more than 128 characters.");

  if (Number(passwordLengthChoice < 8) | Number(passwordLengthChoice > 128) | isNaN (passwordLengthChoice)) {
  alert("Error: Please choose a password length of at least 8 characters and no more than 128 characters.");
  return;
  }

  // Confirm questions for password criteria
  let lowercase = confirm ("Would you like lowercase characters in your password?");
  let uppercase = confirm ("Would you like uppercase characters in your password?");
  let numeric = confirm ("Would you like numerical characters in your password?");
  let specialCharacters = confirm ("Would you like special characters in your password?");

  // If statements to build array
  if (lowercase) {
    resultArray = resultArray.concat(lowercaseArray);
  }

  if (uppercase) {
    resultArray = resultArray.concat(uppercaseArray);
  }

  if (numeric) {
    resultArray = resultArray.concat(numbersArray);
  }

  if (specialCharacters) {
    resultArray = resultArray.concat(specialCharactersArray);
  }

  for (var i = 0; i < passwordLengthChoice; i++) {
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  
  {
    return userArray.join("");
  };
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
};

function copyPassword() {
  passwordText.select();
  document.execCommand("copy");
  passwordText.innerHTML = "";
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Event listener to copy pw button
copyBtn.addEventListener("click", copyPassword);