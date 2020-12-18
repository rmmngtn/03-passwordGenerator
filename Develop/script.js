// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

 var chosenChar = []; 
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//Generating password 
function generatePassword (){
  var options = getPasswordOptions();

}


function getPasswordOptions(){
  var length = parseInt(prompt("Enter desired length of password"))
  //Conditional statement to ensure user input 
  //Check password length
    if (length >= 8 && length <= 128) {

  var hasSpecialChar = confirm("Click ok to confirm allowing special characters in your password");
 
    
     
  var hasNumbers = confirm("Click ok to confirm allowing numbers in your password"); 
     
     

  var hasUpperCase = confirm("Click ok to confirm upper case letters in your password"); 
     

  var hasLowerCase = confirm("Click ok to confirm lower case letters in your password!"); 
    

    }

    else { 
      alert("Password length must be between 8 and 128 characters!")
    }

   
     

} 


console.log(chosenChar);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
