// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment code here





const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};




const passwordElement = document.getElementById('password');



// Generate random characters
function generatePassword() {
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*()){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
} 



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const length = Number(window.prompt("Type a number between 8 and 128 to specify how many characters you would like your password to be.")); 
  const hasLower = window.confirm("Would you like to include lowercase letters?");
  const hasUpper = window.confirm("Would you like to include uppercase letters?");
  const hasNumber = window.confirm("Would you like to include numbers?");
  const hasSymbol = window.confirm("Would you like to include special characters?");

  const results = document.getElementById('password');
  results.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  

}

function generatePassword(lower, upper, number, symbol, length) {

    let mockPassword = '';

    const typesCount = lower + upper + number + symbol;

    const typesArr = [{ lower }, { upper }, { number } , { symbol }].filter
    (item => Object.values(item)[0]);

    if(typesCount === 0) {
      return '';
    }

    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
      
        
        mockPassword += randomFunc[funcName]();

      });
    }

    const finalPW = mockPassword.slice(0, length);
 
    console.log(finalPW);
    return finalPW;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

