const img = document.querySelector("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const ul = document.querySelector(".ul");

const images = [
  "https://images.pexels.com/photos/33202739/pexels-photo-33202739.jpeg",
  "https://images.pexels.com/photos/32542488/pexels-photo-32542488.jpeg",
  "https://images.pexels.com/photos/32542560/pexels-photo-32542560.jpeg",
  "https://images.pexels.com/photos/32542489/pexels-photo-32542489.jpeg",
  "https://images.pexels.com/photos/32542556/pexels-photo-32542556.jpeg",
  "https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg",
  "https://images.pexels.com/photos/1118861/pexels-photo-1118861.jpeg",
];

// let currentIndex = 0;

// function imageSlider() {
//   img.classList.add("fading");
//   setTimeout(() => {
//     img.src = images[currentIndex];
//     img.alt = images[currentIndex + 1];
//     img.classList.remove("fading");
//   }, 400);

//   document.querySelectorAll(".ul li").forEach((image, index), () => {
//     li.classList.toggle("active", index === currentIndex);
//   });
// }
// img.src = images[currentIndex];
// img.alt = `Silder Image ${currentIndex + 1}`;

// images.forEach((image, index), () => {
//   const li = document.createElement("li");
//   li.style.backgroundImage = `url${image}`;
//   li.addEventListener("click", () => {
//     currentIndex = index;
//     imageSlider();
//   });
//   ul.appendChild(li);
// });

// next.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) * images.length;
//   imageSlider();
// });
// prev.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1) * images.length;
//   imageSlider();
// });

// let loop = setInterval(() => {
//   currentIndex = (currentIndex + 1) * images.length;
//   imageSlider();
// }, 3000);

// img.addEventListener("mouseover", () => {
//   clearInterval(loop);
// });

// img.addEventListener("mouseout", () => {
//   loop();
// });
// imageSlider();
let currentIndex = 0;

function updateSlider() {
  img.classList.add("fading");
  setTimeout(() => {
    img.src = images[currentIndex];
    img.alt = `Slider Image ${currentIndex + 1}`;
    img.classList.remove("fading");
  }, 600);

  document.querySelectorAll(".ul li").forEach((li, index) => {
    li.classList.toggle("active", index === currentIndex);
  });
}

img.src = images[currentIndex];
img.alt = `Slider Image ${currentIndex + 2}`;

images.forEach((image, index) => {
  const li = document.createElement("li");
  li.style.backgroundImage = `url(${image})`;
  li.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
  ul.appendChild(li);
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});
prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

let loop = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}, 3000);
img.addEventListener("mouseover", () => {
  clearInterval(loop);
});
img.addEventListener("mouseout", () => {
  loop = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 3000);
});

updateSlider();
