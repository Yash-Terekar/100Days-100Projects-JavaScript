const uppercaseCheckbox = document.querySelector(".capital-checkbox");
const lowercaseCheckbox = document.querySelector(".lower-checkbox");
const numberCheckbox = document.querySelector(".num-checkbox");
const symbolCheckbox = document.querySelector(".symbol-checkbox");
const length = document.querySelector(".length");

const generateBtn = document.querySelector(".btn");
const resultDisplay = document.querySelector(".result");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
  let allAllowedChars = ""; // This will store the pool of characters to choose from
  let generatedPassword = ""; // This will build our final password

  // Define a password length (you can make this an input later)
  let passwordLength = length.value; // For example, 12 characters

  // 1. Build the pool of allowed characters based on checked checkboxes
  if (uppercaseCheckbox.checked) {
    allAllowedChars += uppercaseChars;
  }
  if (lowercaseCheckbox.checked) {
    allAllowedChars += lowercaseChars;
  }
  if (numberCheckbox.checked) {
    allAllowedChars += numberChars;
  }
  if (symbolCheckbox.checked) {
    allAllowedChars += symbolChars;
  }

  // 2. Handle the case where no checkboxes are selected
  if (allAllowedChars === "") {
    alert("Please select at least one character type!");
    resultDisplay.textContent = "Select options"; // Clear previous result or show a message
    return; // Exit the function
  }

  // 3. Generate the password character by character
  for (let i = 0; i < passwordLength; i++) {
    // Get a random index from the allAllowedChars string
    const randomIndex = Math.floor(Math.random() * allAllowedChars.length);

    // Get the character at that random index
    const randomChar = allAllowedChars[randomIndex];

    // Add the random character to our generated password
    generatedPassword += randomChar;
  }

  // 4. Display the generated password
  resultDisplay.textContent = generatedPassword;
}

// Event listener for the button
generateBtn.addEventListener("click", generatePassword);
