import "./styles.css";

const next = document.querySelector(".next");
const imgs = document.querySelectorAll(".img");
let index = 0;
const imgContainer = document.querySelector(".image-container");
console.log(imgs.length);
let interval = null;

interval = setInterval(() => {
  const val = imgContainer.style.transform;

  console.log(val);
  if (!interval) return;

  if (index < imgs.length && index > 0) {
    index++;
    imgContainer.style.transform = `translateX(-${
      parseInt(imgContainer.style.transform.substr(12, 15)) + 100
    }%)`;
  } else if (index === imgs.length) {
    console.log("heyyy");
    index = 0;
    imgContainer.style.transform = `translateX(0)`;
  } else if (index === 0) {
    imgContainer.style.transform = `translateX(-100%)`;
    index++;
  }
}, 1000);

next.addEventListener("click", () => {
  if (interval) {
    console.log(index);
    clearInterval(interval);
  }
  const val = imgContainer.style.transform;

  console.log(val);
  if (index < imgs.length && index > 0) {
    index++;
    imgContainer.style.transform = `translateX(-${
      parseInt(imgContainer.style.transform.substr(12, 15)) + 100
    }%)`;
  } else if (index === imgs.length) {
    console.log("heyyy");
    index = 0;
    imgContainer.style.transform = `translateX(0)`;
  } else if (index === 0) {
    imgContainer.style.transform = `translateX(-100%)`;
    index++;
  }
});
