const count = document.querySelector(".count");
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const reset = document.querySelector(".reset");

let counter = parseInt(count.textContent);

decrement.addEventListener("mousedown", () => {
  counter--;
  count.textContent = counter;
  decrement.style.backgroundColor = "Red";
});
decrement.addEventListener("mouseup", () => {
  decrement.style.backgroundColor = "White";
});

increment.addEventListener("mousedown", () => {
  counter++;
  count.textContent = counter;
  increment.style.backgroundColor = "Green";
});
increment.addEventListener("mouseup", () => {
  increment.style.backgroundColor = "White";
});

reset.addEventListener("mousedown", () => {
  counter = 0;
  count.textContent = counter;
  reset.style.backgroundColor = "Grey";
});
reset.addEventListener("mouseup", () => {
  reset.style.backgroundColor = "White";
});
