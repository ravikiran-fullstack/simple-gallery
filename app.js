let i = 2;
let images = [];
let time = 1000;

images[0] = "1.jpeg";
images[1] = "2.jpeg";
images[2] = "3.jpeg";
images[3] = "4.jpeg";

document.getElementById("sliderImg").src = images[0];
function changeImage() {
  document.getElementById("sliderImg").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

// setInterval(changeImage, time);

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

leftBtn.addEventListener("click", () => {
  console.log("left clicked");
  if (i === 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  document.getElementById("sliderImg").src = images[i];
});

rightBtn.addEventListener("click", () => {
  console.log("left clicked");
  if (i === images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("sliderImg").src = images[i];
});
