import addNotes, { generateRandomNumber } from "./addNotes.js"; //if not using a bundler, have to add .js, but add it anyways just in case
import { editState, enterEditMode } from "./editNotes.js";
import renderNotes from "./renderNotes.js";
import storedNotes from "./storedNotes.js";
import validateNotes from "./validation.js";

//SELECTING ELEMENTS
const form = document.querySelector(".form");
const subjectInput = document.querySelector(".form__subject-input");
const dateInput = document.querySelector(".form__date-input");
const noteText = document.querySelector(".form__note-input");
const submitButton = document.querySelector(".form__submit-button");
//INITIAL RECORDS: When refreshing everything is still there
document.addEventListener("DOMContentLoaded", renderNotes);

// ADD SUBMIT EVENT TO THE FORM
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if validation fails, prevent form submission
  if (!validateNotes(subjectInput, dateInput, noteText)) {
    return; //will stop it to execute the other codes if this is true
  }

  //CHECKS IF WE ARE NOT IN EDIT MODE, THEN:

  if (!editState.isEditMode) {
    addNotes(subjectInput, dateInput, noteText);
    renderNotes(); //import in here for when the button is submitted
  } else {
    const notesList = JSON.parse(localStorage.getItem("notes")); //access all the notes
    const editedNote = {
      id: editState.currentEditId,
      subject: subjectInput.value.trim(),
      date: dateInput.value.trim(),
      text: noteText.value.trim(),
      rotation: generateRandomNumber(),
    };

    const updatedNoteList = notesList.map((note) => {
      return note.id === editState.currentEditId ? editedNote : note; //turnery ? - means what is inside the form is being edited if not do not do anything??
    });

    storedNotes(updatedNoteList);
    renderNotes();

    // THEN SWITCH IT OUT OF EDIT MODE
    editState.currentEditId = null;
    editState.isEditMode = false;
    submitButton.classList.remove("note-card--edited");
    submitButton.textContent = "Add note";
  }
});
//()=> - this is an anonymous function so that it will wait until the form is submitted before executing the function. therefore dont add the parameters (subjectinput etc.) without this anonymous function is added
