function generatePassword(){

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["~", "!", "@", "#", "$", "^", "&", "*"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var minCharacters = 8;
var maxCharacters = 128;

var useUpper;
var userInput;
var useLower;
var userPassword = ""
var userSelect;

function characterNumber()  {
  userInput = prompt("Enter amount of characters between 8 and 128");
  if (userInput < minCharacters || userInput > maxCharacters) {   
    alert("Password must be between 8 and 128 characters");
    characterNumber()
  }  else {
    var useUpper = confirm("Would you like capital letters?"); 
    var useLower = confirm("Would you like lower case letters?");
    var useNumbers = confirm("Would you like to use numbers?");
    var useSpecialCharacters = confirm("Would you like special characters?")
};

if (useUpper && useLower && useNumbers && useSpecialCharacters){
  userSelect = upperCaseLetters.concat(lowerCaseLetters) 
  userSelect = numbers.concat(specialCharacters);  
} 
 else if (useLower && useNumbers && useSpecialCharacters) {
  userSelect = lowerCaseLetters.concat(numbers, specialCharacters)
} else if (useUpper && useNumbers && useSpecialCharacters){
  userSelect = upperCaseLetters.concat(numbers, specialCharacters);
}  else if (useUpper && useLower && useSpecialCharacters){
  userSelect = upperCaseLetters.concat(lowerCaseLetters, specialCharacters);
} else if (useUpper && useLower && useNumbers) {
  userSelect = upperCaseLetters.concat(lowerCaseLetters, numbers);
} else if (useUpper && useLower) {
  userSelect = upperCaseLetters.concat(lowerCaseLetters);
} else if (useUpper && useNumbers) {
  userSelect = upperCaseLetters.concat(numbers);
} else if (useUpper && useSpecialCharacters){
  userSelect = upperCaseLetters.concat(specialCharacters);
}  else if (useNumbers && useSpecialCharacters){
    userSelect = numbers.concat(specialCharacters);    
} else if (useLower && useNumbers){
  userSelect = lowerCaseLetters.concat(numbers);
} else if (useLower && useSpecialCharacters){
  userSelect = lowerCaseLetters.concat(specialCharacters);
} else if (useUpper){
  userSelect = upperCaseLetters;
} else if (useLower){
  userSelect = lowerCaseLetters;
} else if (useNumbers) {
  userSelect = numbers;
} else if (useSpecialCharacters){
  userSelect = specialCharacters
}


for (var i = 0; i < userInput; i++){
   userPassword = userPassword + userSelect[Math.floor(Math.random() * (userSelect.length))];
   
  } 
}
characterNumber()
return userPassword
}

 var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword)
