// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_+~`|}{[];:?<>,./-=";

// Write password to the #password input


function generatePassword() {
  var password = "";
  var passwordLength = prompt("Enter a password length between 8 and 128 charcters");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  } else {
    var lowercaseConfirm = confirm("Include lowercase letters?");
    var uppercaseConfirm = confirm("Include uppercase letters?");
    var numbersConfirm = confirm("Include numbers?");
    var specialConfirm = confirm("Include special characters?");
    var userchoice = "";

    if (lowercaseConfirm) {
      userchoice += lowercaseLetters;
    }

    if (uppercaseConfirm) {
      userchoice += uppercaseLetters;
    }

    if (numbersConfirm) {
      userchoice += numbers;
    }

    if (specialConfirm) {
      userchoice += specialCharacters;
    }
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomCharacters = Math.floor(Math.random() * userchoice.length);
    password += userchoice.charAt(randomCharacters);
  }

  return password;


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
