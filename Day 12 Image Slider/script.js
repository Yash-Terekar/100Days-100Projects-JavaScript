const img = document.querySelector("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = [
  "https://images.pexels.com/photos/33202739/pexels-photo-33202739.jpeg",
  "https://images.pexels.com/photos/32542488/pexels-photo-32542488.jpeg",
  "https://images.pexels.com/photos/32542560/pexels-photo-32542560.jpeg",
  "https://images.pexels.com/photos/32542489/pexels-photo-32542489.jpeg",
  "https://images.pexels.com/photos/32542556/pexels-photo-32542556.jpeg",
  "https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg",
  "https://images.pexels.com/photos/1118861/pexels-photo-1118861.jpeg",
];

let currentIndex = 0;
img.src = images[currentIndex];

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  img.src = images[currentIndex];
});
prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex >= images.length) currentIndex = 0;
  img.src = images[currentIndex];
});
setInterval(() => {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  img.src = images[currentIndex];
}, 2000);

// function imageChanger() {}
// function imageChanger() {
//   const currentSrc = img.getAttribute("src");
//   let currentIndex = images.indexOf(currentSrc);

//   // Increment index and wrap around if necessary
//   currentIndex = (currentIndex + 1) % images.length;

//   // Update the image source
//   img.setAttribute("src", images[currentIndex]);
// }
// img.setAttribute("src", images[0]); // Set initial image
// btn.addEventListener("click", imageChanger);
