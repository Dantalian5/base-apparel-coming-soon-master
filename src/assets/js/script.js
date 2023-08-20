"use strict";
const emailForm = document.getElementById("myForm");
const emailInput = document.getElementById("formInput");
const emailButton = document.getElementById("formButton");
const emailError = document.getElementById("formError");
const emailErrorIcon = document.getElementById("formErrorIcon");

emailButton.addEventListener("click", (event) => {
	if (!emailInput.validity.valid) {
		emailError.innerText = "Please provide a valid email";
		emailErrorIcon.classList.add("js-error");
		event.preventDefault();
		emailInput.focus();
	}
});
emailInput.addEventListener("blur", (event) => {
	if (emailInput.value == "") {
		emailError.innerText = "";
		emailErrorIcon.classList.remove("js-error");
	}
});
