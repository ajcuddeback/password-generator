// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
var randomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var characters = [lowerCase, upperCase, specialCharacters, randomNumber]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
    var passwordLength = prompt('How many characters would you like your password to be? (a good password is at least 8 characters and no more than 128 characters)');
    var confirmLowerCase = confirm('Would you like lower case characters?');
    var confirmUpperCase = confirm('Would you like upper case characters?');
    var confirmSpecial = confirm('Would you like special characters?');
    var confirmNumber = confirm('Would you like numbers?')

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
