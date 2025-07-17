const uppercaseCheckbox = document.querySelector(".uppercase-checkbox");
const lowercaseCheckbox = document.querySelector(".lowercase-checkbox");
const numberCheckbox = document.querySelector(".number-checkbox");
const symbolCheckbox = document.querySelector(".symbol-checkbox");
const passLength = document.querySelector(".length");

const generateBtn = document.querySelector(".btn");
const resultDisplay = document.querySelector(".result");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function randomPassword() {
  let allAllowedChars = "";
  let randomPassword = "";

  let passwordLength = passLength.value;
  if (passwordLength === "") {
    alert("Please enter length of password");
    resultDisplay.textContent = "Enter Length";
    return;
  }

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

  if (allAllowedChars === "") {
    alert("Please select atleast one option");
    resultDisplay.textContent = "Select Option";
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allAllowedChars.length);
    const randomChars = allAllowedChars[randomIndex];
    randomPassword += randomChars;
  }

  resultDisplay.textContent = randomPassword;
}
generateBtn.addEventListener("click", randomPassword);
