const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

const formButton = document.querySelector(".form-feedback__button");
const modalSuccess = document.querySelector(".modal-form--success");
const modalFailure = document.querySelector(".modal-form--failure");
const buttonSuccess = document.querySelector(".modal-form__button--success");
const buttonFailure = document.querySelector(".modal-form__button--failure");
const formFeedback = document.querySelector(".form-feedback");
const email = formFeedback.querySelector("[name = email]");
const lastname = formFeedback.querySelector("[name = lastname]");
const firstname = formFeedback.querySelector("[name = firstname]");


formButton.addEventListener("click", function(evt) {
  if (!lastname.value || !firstname.value || !email.value) {
    evt.preventDefault();
    modalFailure.classList.add("modal-form--failure-show")}
  else {
    evt.preventDefault();
    modalSuccess.classList.add("modal-form--success-show");
  }
});
buttonFailure.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFailure.classList.remove("modal-form--failure-show");
});
buttonSuccess.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSuccess.classList.remove("modal-form--success-show");
});
