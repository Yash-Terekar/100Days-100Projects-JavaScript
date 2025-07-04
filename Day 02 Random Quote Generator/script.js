const quotes = [
  {
    text: "You have the right to work, but never to the fruit of work.",
    author: "Bhagavad Gita",
  },
  {
    text: "Arise, awake, and stop not till the goal is reached.",
    author: "Swami Vivekananda",
  },
  {
    text: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Take risks in your life. If you win, you can lead! If you lose, you can guide.",
    author: "Swami Vivekananda",
  },
  {
    text: "Do not be led by others, awaken your own mind, amass your own experience, and decide for yourself your own path.",
    author: "Atharva Veda",
  },
  {
    text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    author: "Bhagavad Gita",
  },
  {
    text: "Success is 99% perspiration and 1% inspiration.",
    author: "Dr. A.P.J. Abdul Kalam",
  },
  {
    text: "Dream is not that which you see while sleeping; it is something that does not let you sleep.",
    author: "Dr. A.P.J. Abdul Kalam",
  },
  {
    text: "A person becomes great by his deeds, not by his birth.",
    author: "Chanakya",
  },
];

const quote = document.querySelector(".quote");
const auth = document.querySelector(".auth");
const btn = document.querySelector(".btn");

function quoteChange() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quote.style.opacity = 0;
  auth.style.opacity = 0;
  setTimeout(() => {
    quote.textContent = randomQuote.text;
    auth.textContent = randomQuote.author;
    quote.style.opacity = 1;
    auth.style.opacity = 1;
  }, 500);
}
btn.addEventListener("click", () => {
  quoteChange();
});
btn.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    quoteChange();
  }
});
