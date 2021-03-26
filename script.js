function generatePassword(){


//Step 1: Prompt user for input on how many characters
//Step 2: save input from user
//Step 3: create a boolean to accept characters between 8 and 128
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["~", "!", "@", "#", "$", "^", "&", "*"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var minCharacters = 8;
var maxCharacters = 128;


var indexUpper = Math.floor(Math.random() * upperCaseLetters.length);
var capitalArray = upperCaseLetters[indexUpper];

var indexLower = Math.floor(Math.random() * lowerCaseLetters.length);
var lowerArray = lowerCaseLetters[indexLower];

var indexCharacter = Math.floor(Math.random() * specialCharacters.length);
var characterArray = specialCharacters[indexCharacter]; 

var indexNumber = Math.floor(Math.random() * numbers.length);
var numberArray = numbers[indexNumber];

var useUpper;
var userInput;
var useLower;
var numbers;
var specialCharacters;
var userPassword;
var useSelect;

function characterNumber()  {
  userInput = prompt("Enter amount of characters between 8 and 128");
  if (userInput < minCharacters || userInput > maxCharacters) {   
    alert("Password must be between 8 and 128 characters");
    characterNumber()
  }  else {
    var useUpper = confirm("Would you like capital letters?"); 
    var useLower = confirm("Would you like lower case letters?");
    var numbers = confirm("Would you like to use numbers?");
    var specialCharacters = confirm("Would you like special characters?")
};

if (useUpper && useLower && numbers && specialCharacters){
  userSelect = upperCaseLetters.concat(lowerCaseLetters, specialCharacters, numbers); 
}  else if (useLower && numbers && specialCharacters) {
  userSelect = lowerCaseLetters.concat(numbers, specialCharacters)
} else if (useUpper && numbers && specialCharacters){
  userSelect = capitalLetters.concat(numbers, speciaalCharacters);
}  else if (useUpper && useLower && specialCharacters){
  userSelect = upperCaseLetters.concat(lowerCaseLetters, specialCharacters);
} else if (useUpper && useLower && numbers) {
  userSelect = upperCaseLetters.concat(lowerCaseLetters, numbers);
} else if (useUpper && useLower) {
  userSelect = capitalLetters.concat(lowerCaseLetters);
}
for (var i = 0; i < userInput; i++){
   userPassword = userSelect[Math.floor(Math.random()) * userSelect.length];
    console.log(userPassword)
  } 
}
characterNumber()
return userPassword
}

 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input


function writePassword() {
  var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
