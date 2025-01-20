const validateNotes = (subject, date, text) => {
  const errorParagraph = document.querySelector(".form__error-text");
  const formattedSubject = subject.value.trim(); //WHATEVER IS IN THERE IS FORMATTED TO BE VALIDATED WITHOUT ANY EMPTY SPACE
  const formattedDate = date.value.trim();
  const formattedText = text.value.trim();

  // VALIDATE SUBJECT

  if (!formattedSubject) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Subject is required 😊";

    //preventing it to be stored or submitted
    return false; //if not false here, it will either return true (passing it) or false if do not specify but here it should not pass
  }

  //VALIDATE DATE
  if (!formattedDate) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Date is required 😊";

    return false;
  }

  //VALIDATE TEXT
  if (!formattedText) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Text is required 😊";

    return false;
  }

  // IF VALIDATION PASSED, PROVIDE A SUCCESS FEEDBACK
  errorParagraph.style.visibility = "visible";
  errorParagraph.textContent = "Note submitted succesfully ✅";

  // hide the success message after 2 seconds
  setTimeout(() => {
    errorParagraph.style.visibility = ""; //settting it as a an empty string
  }, 2000); //in milli seconds
  return true;
};

export default validateNotes;
