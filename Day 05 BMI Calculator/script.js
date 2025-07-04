const weight = document.querySelector(".inputWeight");
const height = document.querySelector(".inputHeight");
const calc = document.querySelector(".calc");
const result = document.querySelector(".result");

const weightVal = weight.value;
calc.addEventListener("click", () => {
  const weightVal = parseFloat(weight.value);
  const heightVal = parseFloat(height.value);

  ans = weightVal / ((heightVal / 100) * (heightVal / 100));
  result.textContent = ans.toFixed(2);

  if (
    isNaN(weightVal) ||
    isNaN(heightVal) ||
    weightVal <= 0 ||
    heightVal <= 0
  ) {
    alert("Please enter valid positive numbers for weight and height.");
    result.textContent = "N/A";
    resCon.style.backgroundColor = "white";
    return;
  }

  const resCon = document.querySelector(".res");
  if (ans <= 18.5) {
    resCon.style.backgroundColor = "Yellow";
  } else if (ans <= 25) {
    resCon.style.backgroundColor = "limegreen";
  } else if (ans < 30) {
    resCon.style.backgroundColor = "Orange";
  } else if (ans >= 30) {
    resCon.style.backgroundColor = "Red";
  }
});
