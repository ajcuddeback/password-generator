// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
var randomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var characters = [lowerCase, upperCase, specialCharacters, randomNumber];
var finalPw = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var generatePassword = function() {
        var passwordLength = prompt('How many characters would you like your password to be? (a good password is at least 8 characters and no more than 128 characters)');
        var interger = parseInt(passwordLength);
        var confirmLowerCase = confirm('Would you like lower case characters?');
        var confirmUpperCase = confirm('Would you like upper case characters?');
        var confirmSpecial = confirm('Would you like special characters?');
        var confirmNumber = confirm('Would you like numbers?');
        

        for(i = 0; i < interger; i++) {
            var characterSelect = Math.floor(Math.random() * characters.length) + 1;
            if(characterSelect === 1) {
                var lowerCaseValue = Math.floor(Math.random() * lowerCase.length);
                finalPw += lowerCase[lowerCaseValue]
            }
            else if(characterSelect === 2) {
                var upperCaseValue = Math.floor(Math.random() * upperCase.length);
                finalPw += upperCase[upperCaseValue]
            }
            else if(characterSelect === 3) {
                var specialValue = Math.floor(Math.random() * specialCharacters.length);
                finalPw += specialCharacters[specialValue]
            }
            else {
                var numberValue = Math.floor(Math.random() * randomNumber.length);
                finalPw += randomNumber[numberValue]
            }

        }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
