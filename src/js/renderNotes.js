import { displayDeleteModal } from "./deleteNotes";
import { enterEditMode } from "./editNotes";

const renderNotes = () => {
  const notesList = JSON.parse(localStorage.getItem("notes")); //converting it back to an array
  const notesContainer = document.querySelector(".notes-container");
  const submitButton = document.querySelector(".form__submit-button");

  if (notesList) {
    notesContainer.innerHTML = ""; //will clear the canvas for us as it can duplicate when you add more notes
    const reversedNotesArray = notesList.slice().reverse(); //the slice clones it, reverse will make that the new notes will come first and not at the end of the array

    // CREATING AND RENDER THE NOTES
    // using a loop to make it continue everytime

    reversedNotesArray.forEach((note) => {
      //create elements
      const noteCard = document.createElement("div");
      const noteSubject = document.createElement("span");
      const noteDate = document.createElement("span");
      const detailsToolsContainer = document.createElement("div");
      const dateSubjectContainer = document.createElement("div");
      const deleteButton = document.createElement("button");
      const editButton = document.createElement("button");
      const editDeleteContainer = document.createElement("div");
      const noteText = document.createElement("p");

      //APPEND ELEMENTS

      notesContainer.append(noteCard);
      noteCard.append(detailsToolsContainer);
      detailsToolsContainer.append(dateSubjectContainer, editDeleteContainer);
      noteCard.append(noteText);
      dateSubjectContainer.append(noteSubject, noteDate);
      editDeleteContainer.append(deleteButton, editButton);

      //INSERTING NOTES DATA
      noteSubject.textContent = note.subject;
      noteDate.textContent = note.date;
      noteText.textContent = note.text;
      deleteButton.textContent = "🗑";
      editButton.textContent = "✎";

      // ADD CLASSES
      noteCard.classList.add("note-card");
      detailsToolsContainer.classList.add("note-card__detail-tools-container");
      dateSubjectContainer.classList.add("note-card__details-container");
      editDeleteContainer.classList.add("note-card__tools-container");
      deleteButton.classList.add("note-card__delete-button");
      editButton.classList.add("note-card__edit-button");
      noteText.classList.add("note-card__text");

      noteCard.style.transform = `rotate(${note.rotation}deg)`; //as this attribute is a function

      // ADDING EVENT LISTENERS
      deleteButton.addEventListener("click", () => {
        displayDeleteModal(note.subject, note.id); //first pass an ananymous function before passing another function here
      });

      editButton.addEventListener("click", () => {
        enterEditMode(note.id);
        document.querySelectorAll(".note-card").forEach((card) => {
          card.classList.remove("note-card--edited");
        });
        noteCard.classList.add("note-card--edited");
        submitButton.textContent = "Confirm edit";
        submitButton.classList.add("note-card--edited");
      });

      //BRINGING THE CARD TO THE TOP/ THE FIRST ON THE ROW WHEN ADDING A NEW CARD
      noteCard.addEventListener("click", () => {
        document.querySelectorAll(".note-card").forEach((card) => {
          card.style.zIndex = 0;
        });
        noteCard.style.zIndex = 1;
      });
    });
  }
};

export default renderNotes;
