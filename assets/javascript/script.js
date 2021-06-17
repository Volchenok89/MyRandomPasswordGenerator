// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", "#", "@", "%", "\\", "[", "]", "{", "}"];

function random(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex];
  return randomElement;

}

// Function for the password
function generatePassword() {
    let passwordArray = [];
    let resultPassword = [];
    let theCharacters = [];
  
    let totalCharacters = prompt(" How many characters would you like your password to have? ");
  
    if (totalCharacters < 8 || totalCharacters > 128) {
      alert("Must have minimum 8 characters and a maximum of 128 characters!.");
      return;
    }
  
  
    if (confirm("Do you want your password to contain upper cases?")) {
      Array.prototype.push.apply(passwordArray, upperCase);
      theCharacters.push(random(upperCase));
     
    }
  
  
  if (confirm("Lower cases?")) {
    Array.prototype.push.apply(passwordArray, lowerCase);
    theCharacters.push(random(lowerCase));
   
  }


  if (confirm("Numbers?")) {
    Array.prototype.push.apply(passwordArray, numbers);
    theCharacters.push(random(numbers));
 
  }

  if (confirm("Special characters?")) {
    Array.prototype.push.apply(passwordArray, special);
    theCharacters.push(random(special));


  }

  if (passwordArray.length === 0) {
    alert("Please select at least one type of characters!");
  }


  // For the loops and password generator.


  for (let i = 0; i < totalCharacters; i++) {
    let posibleCharacters = random(passwordArray);

    resultPassword.push(posibleCharacters);
    
  }
  for (let i = 0; i < theCharacters.length; i++) {
    resultPassword[i] = theCharacters[i];

  }
 
  return resultPassword.join("");
}



// Write password to imput
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
