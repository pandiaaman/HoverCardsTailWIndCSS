"use strict";

const menubtn = document.querySelector(".menu-button");
const menuPhone = document.querySelector(".menu-when-phone");

menubtn.addEventListener("click", function () {
  console.log("hello");
  menuPhone.classList.toggle("hidden");
  // menuPhone.classList.toggle("ease-in");
  // menuPhone.classList.toggle("duration-200");
});

let activeIndex = 0;

const likebtn = document.querySelector(".like-button");
const hatebtn = document.querySelector(".hate-button");

const groups = document.querySelectorAll(".card-group");

likebtn.addEventListener("click", () => {
  console.log("liked");
  // cardgroup.classList.toggle("fade-when-liked");

  /* solution */
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  //active group becomes after
  currentGroup.dataset.status = "after";

  //next group becomes active
  nextGroup.dataset.status = "active";

  activeIndex = nextIndex;
});
hatebtn.addEventListener("click", () => {
  console.log("hated");
  cardgroup.classList.toggle("fade-when-hated");
});
