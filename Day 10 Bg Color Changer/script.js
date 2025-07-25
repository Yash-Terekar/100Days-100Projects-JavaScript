const btn = document.querySelector(".btn");
const code = document.querySelector(".code");

btn.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16666666).toString(16);
  code.textContent = `HEX #${randomColor}`;
  document.body.style.backgroundColor = randomColor;
});
