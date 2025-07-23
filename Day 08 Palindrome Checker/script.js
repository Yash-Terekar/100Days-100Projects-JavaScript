const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".output");

function isAlphanumeric(str) {
  const letters = /^[a-zA-Z0-9]+$/;
  return letters.test(str);
}
function checkPalindrome() {
  let rawInput = input.value.trim();

  if (rawInput == "") {
    alert("Enter Palindrome");
    result.textContent = "Enter a Valid Input";
    return;
  }

  if (!isAlphanumeric(rawInput)) {
    alert("Invalid input: Use only letters and numbers.");
    result.textContent = `Invalid input: ${rawInput}`;
    return;
  }
  let reverseInput = rawInput.toString().split("").reverse().join("");
  if (rawInput === reverseInput) {
    result.textContent = `${rawInput} is a Palindrome `;
  } else {
    result.textContent = `${rawInput} is not a Palindrome`;
  }
}
btn.addEventListener("click", checkPalindrome);
