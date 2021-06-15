
// Assignment code here

const specialCharacters = "~!@#$%^&*()_-=+{}[]|\:<?/>.,";
const generateBtn = document.getElementById('generate')




// When clicking button

function generatePassword(){
  var passwordLength = prompt("How many characters do you want? (Must-be between 8 and 128.");

  var numbers = confirm("Add numbers?");
  var lowerCases = confirm("Add lower cases?");
  var upperCases = confirm("Add upper cases?");
  var special = confirm("Add special characters?");

  console.log("length: "+passwordLength);
   

  // If not correct lenght, run the code again

    if(passwordLength>=8 && passwordLength<=128){
        return;
    } else {
        promptLength();
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

// Minimums

  var minimumCount = 0;

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


// The functions





// Get references to the #generate element




// Add event listener to generate button


