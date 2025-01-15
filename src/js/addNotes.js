import { v4 as uuidv4 } from "uuid"; //importing this url to use uuid
import storedNotes from "./storedNotes.js";

//generating the random number for the rotation function. math.floor will round the number to what i have created
export const generateRandomNumber = () => {
  return Math.floor(Math.random() * (10 - -10 + 1) + -10); //math.random() *  (max - min + 1)+ min
};

const addNotes = (subject, date, text) => {
  const notesArray = JSON.parse(localStorage.getItem("notes")) || []; //you get it from local storage but if not it will be an empty array where everything will be stored
  // for not there are nothing stored in the local storage and therefore have to make a function in storeNotes.js

  const note = {
    id: uuidv4(),
    InputSubject: subject.value.trim(),
    InputDate: date.value.trim(),
    InputText: text.value.trim(),
    rotation: generateRandomNumber(), //making the rotation function on its own instead of here as it will be more clean
  };

  console.log(note);

  notesArray.push(note); //everytime a note is added this function will push it
  console.log(notesArray);

  storedNotes(notesArray); //updating the local storage
};

export default addNotes;
