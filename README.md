# Password Generator Using Java Script


## Technology Used
- HTML - Used to generate the skeleton of the application
- CSS - Used to style the HTML
- Java Script - Used for building the algorithm for the password generator
- Git - Used for pushing the application to the GitHub repository
- GitHub - The repository used to store the application  

## Summary
This application is used to generate a random password using certain criterias. Upon loading of the application, the user starts it by pressing the "generate password" button. Once the application is started, the user is prompted with a pop up windows asking the user how many characters to use. Next, the user is prompted with several questions asking if the user would like to use upper case letters, lower case letters, numbers or special characters. Depending on what the user selects as the criteria, that's what the application will use to generate the password. 

## Screen Shot
![Site](/assets/images/site.png)

## Code Snippet
This code snippet represents the if else used to prompt the user for the specific criterias to be met for the password generator.

function characterNumber()  {<br>
  userInput = prompt("Enter amount of characters between 8 and 128");<br>
  if (userInput < minCharacters || userInput > maxCharacters) {  <br> 
    alert("Password must be between 8 and 128 characters");<br>
    characterNumber()<br>
  }  else {<br>
    var useUpper = confirm("Would you like capital letters?");<br> 
    var useLower = confirm("Would you like lower case letters?");<br>
    var useNumbers = confirm("Would you like to use numbers?");<br>
    var useSpecialCharacters = confirm("Would you like special characters?")<br>
};<br>

## Repository Link
https://github.com/javimarashall/Password-Generator

## Deploy Link
https://javimarashall.github.io/Password-Generator/
