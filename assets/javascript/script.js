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
  
  
