"use strict";

const navbar = document.querySelector("#navbar");
const navbarLists = document.querySelector(".navbar__lists");
const navbarList = document.querySelector(".navbar__list");
const serviceFeatures = document.querySelector("#service__features");
const serviceFeaturesFlag = document.querySelectorAll(".service__features__flag");
let index = 0;

console.log(serviceFeaturesFlag);
const navbarMoveScroll = (event) => {
  const location = document.querySelector(`#${event.target.dataset.link}`).offsetTop;
  window.scrollTo({top: location - 110,behavior: "smooth" } );
};

const navbarRepaint = () => {
  if (window.pageYOffset > 300) {
    navbar.classList.add("navbar__move");
  } else {
    navbar.classList.remove("navbar__move");
  }
}

const changeFeatures = () => {
  serviceFeaturesFlag[index % 3].classList.remove("on");
  index = (index + 1) % 3;
  serviceFeaturesFlag[index].classList.add("on");
}


navbarLists.addEventListener("click", navbarMoveScroll);
window.addEventListener("scroll", navbarRepaint);
serviceFeatures.addEventListener("click", changeFeatures);
