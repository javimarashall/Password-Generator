//Step 1: Prompt user for input on how many characters
//Step 2: save input from user
//Step 3: create a boolean to accept characters between 8 and 128



// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["~", "!", "@", "#", "$", "^", "&", "*"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function  characterNumber() {
  var response = prompt("Enter amount of characters between 8 and 128");
  log(response);
}
characterNumber()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
