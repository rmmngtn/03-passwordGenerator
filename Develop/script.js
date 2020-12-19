// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// declared for later use 
var randoArr = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate the password 
function generatePassword() {
  var options = getPasswordOptions();
  return options
}
 
// creates all prompts for user input 
function getPasswordOptions() {
  var length = parseInt(prompt("Enter desired length of password"));
  // Conditional statement to ensure user input 
  // Check password length

  if (length < 8 || length > 128) {
    alert("Password must be between 8-128 characters!")
  }

  if (length >= 8 && length <= 128) {

    var hasSpecial = confirm("Click ok to confirm allowing special characters in your password");

    var hasNumbers = confirm("Click ok to confirm allowing numbers in your password");

    var hasUpperCase = confirm("Click ok to confirm upper case letters in your password");

    var hasLowerCase = confirm("Click ok to confirm lower case letters in your password!");


  }

  if (hasSpecial != true && hasNumbers != true && hasUpperCase != true && hasLowerCase != true) {
    alert("You must have at least one type of character in your password!")
  }

  // build array based on chosen options
  var optionsArr = [];

  if (hasSpecial) optionsArr = optionsArr.concat(specialCharacters);

  if (hasNumbers) optionsArr = optionsArr.concat(numericCharacters);

  if (hasUpperCase) optionsArr = optionsArr.concat(upperCasedCharacters);

  if (hasLowerCase) optionsArr = optionsArr.concat(lowerCasedCharacters);

//  creates loop to randomize characters based on user input
  for (var i = 0; i < length; ++i) {
   
    var passCode = optionsArr[Math.floor(Math.random() * optionsArr.length)];

    randoArr.push(passCode);
    
  }

    // sends result password to previous function to be printed in the box 
    var password = randoArr.join(""); 
      return password; 
  }
  
   
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





