import addNotes from "./addNotes.js"; //if not using a bundler, have to add .js, but add it anyways just in case

//SELECTING ELEMENTS
const form = document.querySelector(".form");
const subjectInput = document.querySelector(".form__subject-input");
const dateInput = document.querySelector(".form__date-input");
const noteText = document.querySelector(".form__note-input");

// ADD SUBMIT EVENT TO THE FORM
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNotes(subjectInput, dateInput, noteText);
});
//()=> - this is an anonymous function so that it will wait until the form is submitted before executing the function. therefore dont add the parameters (subjectinput etc.) without this anonymous function is added
