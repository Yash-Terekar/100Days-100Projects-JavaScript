const btn = document.querySelector(".btn");
const code = document.querySelector(".code");
const toggle = document.querySelector(".toggle");
const h1 = document.querySelector("h1");

toggle.addEventListener("click", () => {
  toggle.textContent = toggle.textContent === "HEX" ? "RGB" : "HEX";
});

btn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const randomHex = Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0");

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = brightness > 128 ? "#000000" : "#FFFFFF";

  if (toggle.textContent === "HEX") {
    code.textContent = `HEX #${randomHex}`;
    document.body.style.backgroundColor = `#${randomHex}`;
  }
  if (toggle.textContent === "RGB") {
    code.textContent = `RGB(${r} ${g} ${b})`;
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
  }
  h1.style.color = textColor;
});
