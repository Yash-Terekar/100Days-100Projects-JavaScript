const form = document.querySelector("#myForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));

  let isValid = true;

  if (username.value === "") {
    setError(username, "Username is required");
    isValid = false;
  } else if (username.value.length < 3) {
    setError(username, "Username must be at least 3 characters");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "") {
    setError(email, "Email is required");
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    setError(email, "Please enter a valid email");
    isValid = false;
  }

  if (password.value === "") {
    setError(password, "Password is required");
    isValid = false;
  } else if (password.value.length < 6) {
    setError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (pass2.value === "") {
    setError(pass2, "Please confirm your password");
    isValid = false;
  } else if (pass2.value !== password.value) {
    setError(pass2, "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function setError(input, message) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.textContent = message;
}
