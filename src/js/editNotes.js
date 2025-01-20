// VARIABELS TO TRACK THE EDIT STATUS/MODE AND THE ID OF ELEMENT BEING EDITED
const editState = { isEditMode: false, currentEditId: null };

//POPULATING FORM with detail of sticker and return them
const editNote = (id) => {
  const notesLists = JSON.parse(localStorage.getItem("notes"));

  //selecting the input fields
  const subjectInput = document.querySelector(".form__subject-input");
  const dateInput = document.querySelector(".form__date-input");
  const noteInput = document.querySelector(".form__note-input");

  // this is an object
  const noteToEdit = notesLists.find((note) => note.id === id);

  subjectInput.value = noteToEdit.subject;
  dateInput.value = noteToEdit.date;
  noteInput.value = noteToEdit.text;

  return noteToEdit;
};

// edit mode

const enterEditMode = (id) => {
  const noteToEdit = editNote(id); //calling this here as we have returned it
  editState.currentEditId = noteToEdit.id;
  editState.isEditMode = true;
};

export { editNote, enterEditMode, editState };
