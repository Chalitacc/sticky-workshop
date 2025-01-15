const storedNotes = (notesArray) => {
  localStorage.setItem("notes", JSON.stringify(notesArray)); //has to convert the array to json before storing in localstorage by using stringify
};

export default storedNotes;
