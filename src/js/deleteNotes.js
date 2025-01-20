import renderNotes from "./renderNotes";
import storedNotes from "./storedNotes";

// FUNCTION TO DISPLAY MODAL
const displayDeleteModal = (subject, id) => {
  const deleteModal = document.querySelector(".delete-modal");
  const deleteMessage = document.querySelector(".delete-modal__text");
  deleteModal.classList.add("display-modal");
  deleteMessage.textContent = `Are you sure you want to delete this: ${subject}`;

  const confirmDeleteButton = document.querySelector(
    ".delete-modal__confirm-button"
  );

  confirmDeleteButton.addEventListener("click", () => {
    confirmDelete(id);
  });
};

// FUNCTION TO CLOSE THE MODAL
const closeModal = () => {
  const deleteModal = document.querySelector(".delete-modal");
  deleteModal.classList.remove("display-modal");
};

// CANCEL BUTTON EVENT LISTENER
const initialiseCloseModal = () => {
  const cancelDeleteButton = document.querySelector(
    ".delete-modal__cancel-button"
  );
  cancelDeleteButton.addEventListener("click", closeModal);
};
initialiseCloseModal();

// DELETE BUTTON EVENT LISTENER
// calling it in line 16
const confirmDelete = (id) => {
  const notesList = JSON.parse(localStorage.getItem("notes")); //gets the latest status in the local storage
  const filteredArray = notesList.filter((note) => note.id !== id); // give me and return an array except the one with the same id that i want to delete

  // update then the local storage to store the new collection and we already have a function for that and add the new filtered array in it
  storedNotes(filteredArray);

  //rerender
  renderNotes();

  //close the modal when clicked on confirm, adding the exisiting function for that
  closeModal();
};

export { displayDeleteModal, closeModal }; //importing two functions
