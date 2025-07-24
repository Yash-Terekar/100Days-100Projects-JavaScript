const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const diceBox1 = document.querySelector(".dicebox1");
const diceBox2 = document.querySelector(".dicebox2");
const btn = document.querySelector(".btn");
const res = document.querySelector(".res");

function diceRoll() {
  diceBox1.classList.add("roll");
  diceBox2.classList.add("roll");
  setTimeout(() => {
    diceBox1.classList.remove("roll");
    diceBox2.classList.remove("roll");
  }, 1000);

  let die = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  let randomIndex = Math.floor(Math.random() * die.length);
  let randomIndex2 = Math.floor(Math.random() * die.length);

  dice1.style.opacity = "0";
  dice2.style.opacity = "0";
  setTimeout(() => {
    dice1.textContent = die[randomIndex];
    dice1.style.opacity = "1";
    dice2.textContent = die[randomIndex2];
    dice2.style.opacity = "1";
  }, 300);

  const sum = randomIndex + 1 + (randomIndex2 + 1);
  res.textContent = `Sum: ${sum}`;
}
btn.addEventListener("click", diceRoll);
