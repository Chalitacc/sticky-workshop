import addNotes from "./addNotes.js"; //if not using a bundler, have to add .js, but add it anyways just in case
import renderNotes from "./renderNotes.js";
import validateNotes from "./validation.js";

//SELECTING ELEMENTS
const form = document.querySelector(".form");
const subjectInput = document.querySelector(".form__subject-input");
const dateInput = document.querySelector(".form__date-input");
const noteText = document.querySelector(".form__note-input");

//INITIAL RECORDS: When refreshing everything is still there
document.addEventListener("DOMContentLoaded", renderNotes);

// ADD SUBMIT EVENT TO THE FORM
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if validation fails, prevent form submission
  if (!validateNotes(subjectInput, dateInput, noteText)) {
    return; //will stop it to execute the other codes if this is true
  }

  addNotes(subjectInput, dateInput, noteText);
  renderNotes(); //import in here for when the button is submitted
});
//()=> - this is an anonymous function so that it will wait until the form is submitted before executing the function. therefore dont add the parameters (subjectinput etc.) without this anonymous function is added
