"use strict";

const navbar = document.querySelector("#navbar");
const navbarLists = document.querySelector(".navbar__lists");
const navbarList = document.querySelector(".navbar__list");

const navbarMoveScroll = (event) => {
  const location = document.querySelector(`#${event.target.dataset.link}`).offsetTop;
  window.scrollTo({top: location,behavior: "smooth" } );
};

const navbarRepaint = (event) => {
  if (window.pageYOffset > 300) {
    navbar.classList.add("navbar__move");
  } else {
    navbar.classList.remove("navbar__move");
  }
}
navbarLists.addEventListener("click", navbarMoveScroll);
window.addEventListener("scroll", navbarRepaint)