"use strict";

const navbar = document.querySelector("#navbar");
const navbarLists = document.querySelector(".navbar__lists");
const navbarList = document.querySelector(".navbar__list");
const hambuger1 = document.querySelector(".navbar__hambuger1");
const hambuger2 = document.querySelector(".navbar__hambuger2");
const serviceFeatures = document.querySelector("#service__features");
const serviceFeaturesFlag = document.querySelectorAll(".service__features__flag");


let index = 0;

//네비게이션 바 - 요소 클릭시 페이지 이동.
const navbarMoveScroll = (event) => {
  const location = document.querySelector(`#${event.target.dataset.link}`).offsetTop;
  window.scrollTo({top: location - 110,behavior: "smooth" } );
};

//네비게이션 바 - 스크롤의 따른 네비게이션바 배경,요소 색상 변경.
const navbarRepaint = () => {
  if (window.pageYOffset > 200) {
    navbar.classList.add("navbar__move");
    hambuger1.classList.remove("on");
    hambuger2.classList.add("on");
  } else {
    navbar.classList.remove("navbar__move");
    hambuger1.classList.add("on");
    hambuger2.classList.remove("on");
  }
}

//서비스 특징 - 무료 와이파이 리스트 클릭시 변경.
const changeFeatures = () => {
  serviceFeaturesFlag[index % 3].classList.remove("on");
  index = (index + 1) % 3;
  serviceFeaturesFlag[index].classList.add("on");
}

navbarLists.addEventListener("click", navbarMoveScroll);
window.addEventListener("scroll", navbarRepaint);
serviceFeatures.addEventListener("click", changeFeatures);
