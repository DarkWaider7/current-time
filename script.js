"use strict";
const dayWeek = document.querySelector(".Today");
const currentTime = document.querySelector(".currentTime");
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const deg = 6;

setInterval(() => {
  const today = new Date();

  let hour = today.getHours() * 30;
  let minute = today.getMinutes() * deg;
  let second = today.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  mn.style.transform = `rotateZ(${minute + 32}deg)`;
  sc.style.transform = `rotateZ(${second}deg)`;
  console.log(sc.style.transform);
}, 2);

setInterval(() => {
  const today = new Date();
  const day = today.getDay();
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const prepend = hour >= 12 ? "PM" : "AM";

  dayWeek.innerHTML = `Today is ${dayList[day]}`;
  currentTime.innerHTML = `Current time: ${hour} ${
    " " + prepend
  }: ${minute}: ${second}`;
});
