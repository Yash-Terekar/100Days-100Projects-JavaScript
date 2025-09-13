const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const userValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPass = pass2.value;

  if (userValue === "") {
    alert("Username is required");
  } else if (userValue.length < 3) {
    alert("Username must be at least 3 characters");
  }

  if (emailValue === "") {
    alert("Please enter email");
  }

  if (passwordValue === "") {
    alert("Please provide Password");
  } else if (passwordValue.length < 6) {
    alert("Password should long than 6 characters");
  }

  if (confirmPass !== passwordValue) {
    alert("Password does not match with confirm password");
  }
});
