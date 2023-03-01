"use strict";

const btnsShow = document.querySelectorAll(".btns");
const modalShow = document.querySelector(".hiden");
const container = document.querySelector(".container");
const btnsClose = document.querySelector(".close");

for (let i = 0; i < btnsShow.length; i++)
  btnsShow[i].addEventListener("click", function () {
    modalShow.classList.remove("hiden");
  });

btnsClose.addEventListener("click", function () {
  modalShow.classList.add("hiden");
});
