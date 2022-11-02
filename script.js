"use strict";

const openIcon = document.querySelector(".open");
const iconButton = document.querySelector(".icon-button");
const closeIcon = document.querySelector(".close");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelector(".nav-items");
const overlay = document.querySelector(".overlay");

openIcon.addEventListener("click", () => {
  navItem.classList.toggle("active");
  // overlay.classList.toggle("hidden");
});
