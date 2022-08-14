// #1 Секундомір
let timer = 0;
let timerInterval;
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ms = document.querySelector("#ms");

let display = document.querySelector(".stopwatch-display");

let btnStart = document.querySelector(".btn1");
btnStart.onclick = function () {
  display.classList.remove("default");
  display.classList.remove("red");
  display.classList.remove("silver");
  display.classList.add("green");

  stop();
  timerInterval = setInterval(start, 1000 / 60);
};

let btnStop = document.querySelector(".btn2");
btnStop.onclick = function () {
  display.classList.remove("default");
  display.classList.remove("green");
  display.classList.remove("silver");
  display.classList.add("red");

  stop();
};

let btnReset = document.querySelector(".btn3");
btnReset.onclick = function () {
  display.classList.remove("default");
  display.classList.remove("green");
  display.classList.remove("red");
  display.classList.add("silver");

  reset();
};

let start = () => {
  timer += 1 / 60;

  let ms_ = Math.floor((timer - Math.floor(timer)) * 100);
  let sec_ = Math.floor(timer) - Math.floor(timer / 60) * 60;
  let min_ = Math.floor(timer / 60);

  ms.textContent = ms_ < 10 ? "0" + ms_.toString() : ms_;
  sec.textContent = sec_ < 10 ? "0" + sec_.toString() : sec_;
  min.textContent = min_ < 10 ? "0" + min_.toString() : min_;
};

let stop = () => {
  clearInterval(timerInterval);
};

let reset = () => {
  stop();
  timer = 0;
  ms.textContent = "00";
  sec.textContent = "00";
  min.textContent = "00";
};

document.write(`<div class="task1"></div>`);


// #2 
let task1 = document.querySelector(".task1");

let tel = document.createElement("input");
tel.placeholder = "000-000-00-00";

task1.after(tel);

let btnSave = document.createElement("button");
btnSave.innerText = "Save";
btnSave.style.cursor = "pointer";

tel.after(btnSave);

btnSave.onclick = () => {
  let pattern = /\d{3}-\d{3}-\d{2}-\d{2}/;
  if (pattern.test(tel.value)) {
    tel.style.background = "rgba(39, 211, 76, 0.5)";
    document.location = "https://www.pexels.com/photo/seaside-994605/";
  } else {
    tel.style.background = "rgba(255, 104, 44, 0.753)";
    tel.value = "Ведіть правильний номер!!!";
  }
};

document.write(`<div class="task2">`);


// #3 Slider
let task2 = document.querySelector(".task2");
let slider = document.querySelector("#gallery");

task2.after(slider);

let btnPrev = document.querySelector("#gallery .buttons .prev");
let btnNext = document.querySelector("#gallery .buttons .next");
let images = document.querySelectorAll("#gallery .photos img");

let i = 0;

btnPrev.onclick = function () {
  images[i].className = "";
  i--;

  if (i < 0) {
    i = images.length - 1;
  }

  images[i].className = "show";
};

btnNext.onclick = function () {
  images[i].className = "";
  i++;

  if (i >= images.length) {
    i = 0;
  }

  images[i].className = "show";
};

function carousel() {
  for (let i = 0; i < images.length; i++) {
    images[i].className = "";
  }
  i++;

  if (i > images.length) {
    i = 1;
  }

  images[i - 1].className = "show";
  setTimeout(carousel, 3000);
}
carousel();
