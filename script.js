
// Assignment code here

const specialCharacters = "~!@#$%^&*()_-=+{}[]|\:<?/>.,";
const generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// When clicking button

function generatePassword(){
  var passwordLength = prompt("How many characters you want for the password? It must be between 8 and 128 characters.");

  var numbers = confirm("Add numbers?");
  var lowerCases = confirm("Add lower cases?");
  var upperCases = confirm("Add upper cases?");
  var special = confirm("Add special characters?");


// Minimums

  var minimumCount = 0;

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
}

// The functions







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button


