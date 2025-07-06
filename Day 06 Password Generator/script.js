const uppercase = document.querySelector(".capital");
const lowercase = document.querySelector(".lower");
const number = document.querySelector(".num");
const symbol = document.querySelector(".symbol");

const btn = document.querySelector(".btn");
const res = document.querySelector(".result");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
  let password = "";
  console.log("clicked");
  if (uppercase.checked != true) {
    alert("Please Select all Checkboxes");
  } else {
    res.textContent =
      uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  }
}

btn.addEventListener("click", () => {
  generatePassword();
});
