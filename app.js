const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const modeBtn = document.getElementById("mode-btn");
const initializeBtn = document.getElementById("initialize-btn");
const eraserBtn = document.getElementById("eraser-btn");

canvas.width = 600;
canvas.height = 600;
ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

const onMove = (event) => {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
};

const startPainting = (event) => {
  isPainting = true;
};

const canclePainting = (event) => {
  isPainting = false;
};

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleave", canclePainting);
canvas.addEventListener("click", () => {
  if (isFilling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
});

lineWidth.addEventListener("change", () => {
  ctx.lineWidth = lineWidth.value;
});

color.addEventListener("change", () => {
  ctx.strokeStyle = color.value;
  ctx.fillStyle = color.value;
});

colorOptions.forEach((colour) =>
  colour.addEventListener("click", (event) => {
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
  })
);

modeBtn.addEventListener("click", () => {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Draw";
  } else {
    isFilling = true;
    modeBtn.innerText = "Fill";
  }
});

initializeBtn.addEventListener("click", () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

eraserBtn.addEventListener("click", () => {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Draw";
});
