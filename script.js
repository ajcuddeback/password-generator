// Character Types
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
var randomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Character select variables
var characters1 = [lowerCase, upperCase, specialCharacters, randomNumber];
var characters2 = [lowerCase, upperCase, specialCharacters,];
var characters3 = [lowerCase, upperCase, randomNumber];
var characters4 = [upperCase, specialCharacters, randomNumber];
var characters5 = [lowerCase, specialCharacters, randomNumber];
var characters6 = [lowerCase, upperCase];
var characters7 = [lowerCase, specialCharacters];
var characters8 = [lowerCase, randomNumber];
var characters9 = [ upperCase, specialCharacters];
var characters10 = [upperCase, randomNumber];
var characters11 = [specialCharacters, randomNumber];

//Final Password that will be displayed
var finalPw = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate Password Function
var generatePassword = function() {
        //Asking for password length logic
        var passwordLength = prompt('How many characters would you like your password to be (i.e. 10, 50, 121)? (a good password is at least 8 characters and no more than 128 characters)');
        var interger = parseInt(passwordLength);
        if(interger < 8 || interger > 128) {
            alert('please input a number that is at least 8 and no more than 128')
            generatePassword()
        }
        
        // Confirmation of what type of characters the user would like
        alert('Please select ok if you would like the character type in your password or cancel if you do not want the character type in you password');
        var confirmLowerCase = confirm('Would you like lower case characters?');
        var confirmUpperCase = confirm('Would you like upper case characters?');
        var confirmSpecial = confirm('Would you like special characters?');
        var confirmNumber = confirm('Would you like numbers?');

        // Logic for every possibility the user could chose
        if(confirmLowerCase === true && confirmUpperCase === true && confirmSpecial === true && confirmNumber === true) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters1.length) + 1;
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
        } else if(confirmLowerCase === true && confirmUpperCase === true && confirmSpecial === true && confirmNumber === false) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters2.length) + 1;
                if(characterSelect === 1) {
                    var lowerCaseValue = Math.floor(Math.random() * lowerCase.length);
                    finalPw += lowerCase[lowerCaseValue]
                }
                else if(characterSelect === 2) {
                    var upperCaseValue = Math.floor(Math.random() * upperCase.length);
                    finalPw += upperCase[upperCaseValue]
                }
                else {
                    var specialValue = Math.floor(Math.random() * specialCharacters.length);
                    finalPw += specialCharacters[specialValue]
                }
            }
        } else if(confirmLowerCase === true && confirmUpperCase === true && confirmSpecial === false && confirmNumber === true) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters3.length) + 1;
                if(characterSelect === 1) {
                    var lowerCaseValue = Math.floor(Math.random() * lowerCase.length);
                    finalPw += lowerCase[lowerCaseValue]
                }
                else if(characterSelect === 2) {
                    var upperCaseValue = Math.floor(Math.random() * upperCase.length);
                    finalPw += upperCase[upperCaseValue]
                }
                else {
                    var numberValue = Math.floor(Math.random() * randomNumber.length);
                    finalPw += randomNumber[numberValue]
                }
            }
        } else if(confirmLowerCase === false && confirmUpperCase === true && confirmSpecial === true && confirmNumber === true) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters4.length) + 1;
                if(characterSelect === 1) {
                    var upperCaseValue = Math.floor(Math.random() * upperCase.length);
                    finalPw += upperCase[upperCaseValue]
                }
                else if(characterSelect === 2) {
                    var specialValue = Math.floor(Math.random() * specialCharacters.length);
                    finalPw += specialCharacters[specialValue]
                }
                else {
                    var numberValue = Math.floor(Math.random() * randomNumber.length);
                    finalPw += randomNumber[numberValue]
                }
            }
        } else if(confirmLowerCase === true && confirmUpperCase === false && confirmSpecial === true && confirmNumber === true) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters5.length) + 1;
                if(characterSelect === 1) {
                    var lowerCaseValue = Math.floor(Math.random() * lowerCase.length);
                    finalPw += lowerCase[lowerCaseValue]
                }
                else if(characterSelect === 2) {
                    var specialValue = Math.floor(Math.random() * specialCharacters.length);
                    finalPw += specialCharacters[specialValue]
                }
                else {
                    var numberValue = Math.floor(Math.random() * randomNumber.length);
                    finalPw += randomNumber[numberValue]
                }
            }
        } else if(confirmLowerCase === true && confirmUpperCase === true && confirmSpecial === false && confirmNumber === false) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters6.length) + 1;
                if(characterSelect === 1) {
                    var lowerCaseValue = Math.floor(Math.random() * lowerCase.length);
                    finalPw += lowerCase[lowerCaseValue]
                }
                else {
                    var upperCaseValue = Math.floor(Math.random() * upperCase.length);
                    finalPw += upperCase[upperCaseValue]
                }
            }
        } else if(confirmLowerCase === true && confirmUpperCase === false && confirmSpecial === true && confirmNumber === false) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters7.length) + 1;
                if(characterSelect === 1) {
                    var lowerCaseValue = Math.floor(Math.random() * lowerCase.length);
                    finalPw += lowerCase[lowerCaseValue]
                }
                else {
                    var specialValue = Math.floor(Math.random() * specialCharacters.length);
                    finalPw += specialCharacters[specialValue]
                }
            }
        } else if(confirmLowerCase === true && confirmUpperCase === false && confirmSpecial === false && confirmNumber === true) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters8.length) + 1;
                if(characterSelect === 1) {
                    var lowerCaseValue = Math.floor(Math.random() * lowerCase.length);
                    finalPw += lowerCase[lowerCaseValue]
                }
                else {
                    var numberValue = Math.floor(Math.random() * randomNumber.length);
                    finalPw += randomNumber[numberValue]
                }
            }
        } else if(confirmLowerCase === false && confirmUpperCase === true && confirmSpecial === true && confirmNumber === false) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters9.length) + 1;
                if(characterSelect === 1) {
                    var upperCaseValue = Math.floor(Math.random() * upperCase.length);
                    finalPw += upperCase[upperCaseValue]
                }
                else{
                    var specialValue = Math.floor(Math.random() * specialCharacters.length);
                    finalPw += specialCharacters[specialValue]
                }
            }
        } else if(confirmLowerCase === false && confirmUpperCase === true && confirmSpecial === false && confirmNumber === true) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters10.length) + 1;
                if(characterSelect === 1) {
                    var upperCaseValue = Math.floor(Math.random() * upperCase.length);
                    finalPw += upperCase[upperCaseValue]
                }
                else {
                    var numberValue = Math.floor(Math.random() * randomNumber.length);
                    finalPw += randomNumber[numberValue]
                }
            }
        } else if(confirmLowerCase === false && confirmUpperCase === false && confirmSpecial === true && confirmNumber === true) {
            for(i = 0; i < interger; i++) {
                var characterSelect = Math.floor(Math.random() * characters11.length) + 1;
                if(characterSelect === 1) {
                    var specialValue = Math.floor(Math.random() * specialCharacters.length);
                    finalPw += specialCharacters[specialValue]
                }
                else {
                    var numberValue = Math.floor(Math.random() * randomNumber.length);
                    finalPw += randomNumber[numberValue]
                }
            }
        } else if(confirmLowerCase === true && confirmUpperCase === false && confirmSpecial === false && confirmNumber === false) {
            for(i = 0; i < interger; i++) {
                var lowerCaseValue = Math.floor(Math.random() * lowerCase.length);
                finalPw += lowerCase[lowerCaseValue]
            }
        } else if(confirmLowerCase === false && confirmUpperCase === true && confirmSpecial === false && confirmNumber === false) {
            for(i = 0; i < interger; i++) {
                var upperCaseValue = Math.floor(Math.random() * upperCase.length);
                finalPw += upperCase[upperCaseValue]
            }
        }else if(confirmLowerCase === false && confirmUpperCase === false && confirmSpecial === true && confirmNumber === false) {
            for(i = 0; i < interger; i++) {
                var specialValue = Math.floor(Math.random() * specialCharacters.length);
                finalPw += specialCharacters[specialValue]
            }
        }else if(confirmLowerCase === false && confirmUpperCase === false && confirmSpecial === false && confirmNumber === true) {
            for(i = 0; i < interger; i++) {
                    var numberValue = Math.floor(Math.random() * randomNumber.length);
                    finalPw += randomNumber[numberValue]
            }
        } else {
            alert('Please select at least one character value');
            generatePassword()
        }

}
// Write password to the #password input
function writePassword() {
  generatePassword()
  var password = finalPw;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
