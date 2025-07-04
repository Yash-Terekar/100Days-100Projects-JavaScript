const formatter = document.querySelector(".formatter");
const theme = document.querySelector(".theme");
const time = document.querySelector(".time");
const format = document.querySelector(".format");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let yearMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let is24Hours = true;

function digitalClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const days = now.getDay();
  const dates = now.getDate();
  const months = now.getMonth();
  const years = now.getFullYear();

  const nowday = weekDays[days];
  const nowMonth = yearMonths[months];

  if (is24Hours) {
    time.textContent = `${hours
      .toString()
      .padStart(2, 0)}:${minutes}:${seconds}`;
    format.textContent = "";
  } else {
    let ampm = hours > 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    time.textContent = `${hours
      .toString()
      .padStart(2, 0)}:${minutes}:${seconds}`;
    format.textContent = ampm;
  }

  day.textContent = nowday;
  date.textContent = dates;
  month.textContent = nowMonth;
  year.textContent = years;
}

formatter.addEventListener("click", () => {
  is24Hours = !is24Hours;
  formatter.classList.toggle("active");
  formatter.textContent = formatter.classList.contains("active")
    ? "12 Hrs"
    : "24 Hrs";
});

theme.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.classList.toggle("light");
  theme.textContent = container.classList.contains("light") ? "Dark" : "Light";
  theme.classList.toggle("active");
});

setInterval(() => digitalClock(), 1000);
digitalClock();
