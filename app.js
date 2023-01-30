const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const armWidth = 30;
const armHeight = 200;

const bodyWidth = 130;
const bodyHeight = 400;

const headRadius = 80;
const eyeRadius = 15;
const betweenEye = 30;
const mouthRadius = 40;

ctx.rect(300 - armWidth / 2, 300, armWidth, armHeight);
ctx.rect(400 - bodyWidth / 2, 300, bodyWidth, bodyHeight);
ctx.rect(500 - armWidth / 2, 300, armWidth, armHeight);

ctx.arc(400, 200, headRadius, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(400, 210, mouthRadius, 0, Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(400 - betweenEye, 180, eyeRadius, Math.PI, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.arc(400 + betweenEye, 180, eyeRadius, Math.PI, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
