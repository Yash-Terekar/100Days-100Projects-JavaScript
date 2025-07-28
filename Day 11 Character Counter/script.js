const input = document.querySelector("input");
const res = document.querySelector(".result");
const progressBar = document.querySelector(".progress-bar");

const maxChars = 100;
const warning = 80;

function charCounter() {
  let text = input.value;
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    count++;
  }
  res.textContent = `Character Count: ${count}/${maxChars}`;

  let progress = (count / maxChars) * 100;
  progressBar.style.width = `${progress}%`;

  if (count > warning) {
    res.classList.add("warning");
    progressBar.style.backgroundColor = "red";
    input.style.color = "red";
  } else {
    progressBar.style.backgroundColor = "green";
    res.classList.remove("warning");
    input.style.color = "black";
  }
}
input.addEventListener("input", charCounter);
