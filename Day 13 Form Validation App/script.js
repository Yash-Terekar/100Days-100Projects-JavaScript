const form = document.querySelector("#myForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Reset error messages
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));

  let isValid = true;

  // Username validation
  if (username.value === "") {
    setError(username, "Username is required");
    isValid = false;
  } else if (username.value.length < 3) {
    setError(username, "Username must be at least 3 characters");
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "") {
    setError(email, "Email is required");
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    setError(email, "Please enter a valid email");
    isValid = false;
  }

  // Password validation
  if (password.value === "") {
    setError(password, "Password is required");
    isValid = false;
  } else if (password.value.length < 6) {
    setError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  // Confirm password validation
  if (pass2.value === "") {
    setError(pass2, "Please confirm your password");
    isValid = false;
  } else if (pass2.value !== password.value) {
    setError(pass2, "Passwords do not match");
    isValid = false;
  }

  // If all validations pass, you can proceed (e.g., submit to server)
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset(); // Clear form
  }
});

// Helper function to set error message
function setError(input, message) {
  const formGroup = input.parentElement;
  const errorElement = formGroup.querySelector(".error");
  errorElement.textContent = message;
}
