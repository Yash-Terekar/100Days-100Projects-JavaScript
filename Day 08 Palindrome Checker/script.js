const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".output");

function checkPalindrome() {
  let num = input.value.trim();

  if (num == "") {
    alert("Enter a Number");
    result.textContent = "Enter a Number";
    return;
  }

  num = parseInt(num);

  if (isNaN(num)) {
    alert("Please Enter a Valid Number");
    return;
  }

  let reverseNum = num.toString().split("").reverse().join("");

  if (num == reverseNum) {
    result.textContent = `${num} is Palindrome Number`;
  } else {
    result.textContent = `${num} is not a Palindrome`;
  }
}
btn.addEventListener("click", checkPalindrome);
