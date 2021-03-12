// Character Types
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
var randomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let inclUpper = false;
let inclLower = false;
let inclSpecial = false;
let inclNumber = false;

let chosenChar = [];

const generatePw = () => {

    let confirmLowerCase; 
    let confirmUpperCase;
    let confirmSpecial;
    let confirmNumber;

    // Asking for password length logic
    var passwordLength = prompt('How many characters would you like your password to be (i.e. 10, 50, 121)? (a good password is at least 8 characters and no more than 128 characters)');
    var interger = parseInt(passwordLength);
        if(interger > 8 && interger < 128) {
            // Confirmation of what type of characters the user would like
            alert('Please select ok if you would like the character type in your password or cancel if you do not want the character type in you password');
             confirmLowerCase = confirm('Would you like lower case characters?');
             confirmUpperCase = confirm('Would you like upper case characters?');
             confirmSpecial = confirm('Would you like special characters?');
             confirmNumber = confirm('Would you like numbers?');
        }

        if(confirmLowerCase) {
            chosenChar.push(lowerCase);
        }
        if(confirmUpperCase) {
            chosenChar.push(upperCase);
        }
        if(confirmSpecial) {
            chosenChar.push(specialCharacters);
        }
        if(confirmNumber) {
            chosenChar.push(randomNumber);
        }

        let finArr = Array.prototype.concat.apply([], chosenChar)

        let pw = ''

        for(let i = 0; i < interger; i++) {
            let randomNum = Math.floor(Math.random() * finArr.length);
            pw += finArr[randomNum];
        }

        var password = pw;
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
}
document.getElementById('generate').addEventListener('click', generatePw)