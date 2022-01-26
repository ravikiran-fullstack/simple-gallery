let i = 2;
let images = [];
let time = 1000;

images[0] = "1.jpeg";
images[1] = "2.jpeg";
images[2] = "3.jpeg";
images[3] = "4.jpeg";

function changeImage() {
  document.getElementById("sliderImg").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

setInterval(changeImage, time);
