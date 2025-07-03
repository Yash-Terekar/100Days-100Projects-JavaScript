const formatter = document.querySelector(".formatter");
const theme = document.querySelector(".theme");
const time = document.querySelector(".time");
const format = document.querySelector(".format");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const date = document.querySelector(".date");
const year = document.querySelector(".year");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const yearMonths = [
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

let is24Hour = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const days = now.getDay();
  const monthdate = now.getDate();
  const months = now.getMonth();
  const years = now.getFullYear();

  const daytext = weekDays[days];
  const monthtext = yearMonths[months];
  const datetext = monthdate;
  const yeartext = years;

  let formatTime;
  if (is24Hour) {
    formatTime = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
    format.textContent = "";
  } else {
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight
    formatTime = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
    format.textContent = ampm;
  }

  time.textContent = formatTime;
  day.textContent = daytext;
  date.textContent = datetext;
  month.textContent = monthtext;
  year.textContent = yeartext;
}

formatter.addEventListener("click", () => {
  is24Hour = !is24Hour;
  formatter.textContent = is24Hour ? "24 Hrs" : "12 Hrs";
  formatter.classList.toggle("active");
  updateClock();
});

theme.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.classList.toggle("light");
  theme.textContent = container.classList.contains("light") ? "Dark" : "Light";
  theme.classList.toggle("active");
});

setInterval(updateClock, 1000);
updateClock();
