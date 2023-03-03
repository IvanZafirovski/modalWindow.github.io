"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnsShow = document.querySelectorAll(".show-modal");

// set the function for more dry code
const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const modalOpen = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsShow.length; i++)
  btnsShow[i].addEventListener("click", modalOpen);

btnClose.addEventListener("click", modalClose);
overlay.addEventListener("click", modalClose);

// put the same code in a function expression
// btnsShow[i].addEventListener("click", function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// });

// btnClose.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
