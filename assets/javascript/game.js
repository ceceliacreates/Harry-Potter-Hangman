const gifs = {
  hermionie: "https://media.giphy.com/media/SkBfBxSiaSfgQ/giphy.gif",
  harry: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  sirius: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  patronus: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  weasley: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  dementor: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  dumbledore: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  hippogriff: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  gryffindor: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  hogwarts: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  voldemort: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  hagrid: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  wand: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  potion: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  boggart: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  quidditch: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  dragon: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  broom: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  werewolf: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  snape: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif"
};

//creates array of keys from gifs object
const wordBank = Object.keys(gifs);

//creates currentSolution variable
let currentSolution;
//assigns a random word from wordBank as currentSolution
function newPuzzle() {
currentSolution = wordBank[Math.floor(Math.random() * wordBank.length)];
}
newPuzzle();
//sets winCount and triesLeft
let winCount = 0;
let triesLeft = 10;
//displays winCount and triesLeft
document.querySelector("#triesleft").innerText = "Tries Left: " + triesLeft;
document.querySelector("#wincount").innerText = "Wins: " + winCount;
let guessedLetter;

//creates empty array to hold guessed letters THIS WORKS

let guessedWrong = [];
let guessedRight = [];

//creates string of blanks based on length of currentSolution THIS WORKS
let currentWord;

function resetBlanks() {
currentWord = currentSolution.toString().replace(/[a-z]/g, " _ ");
}
resetBlanks();
//displays blanks in currentword div
document.querySelector("#currentword").innerText = currentWord;

//function that runs when key is pressed
document.onkeypress = function(e) {
  //transforms entered key to lowercase
  guessedLetter = e.key.toLowerCase();
  //checks guessed letter against solution
if (currentSolution.includes(guessedLetter)) {
  //adds guessed letter to array of correctly guessed letters ISSUE HERE!!!! Letter is not pushing, guessedRight returns 1???!!
  //guessedRight is an empty array BEFORE this, this breaks it
guessedRight = guessedRight.push(guessedLetter);
//creates regex of correctly guessed letters ERROR HERE!!! guessedRight.join() is not a function???!!
const regexp = new RegExp("[^" + guessedRight.join("") + "]", "gi");

//NOTHING AFTER THIS RUNS BECAUSE OF ERROR SO I DON'T KNOW IF IT WORKS
//resets currentword to include all correctly guessed letters
currentWord = currentWord.replace(regexp, "_");
//checks if puzzle is solved
if (currentSolution == currentWord) {
  document.querySelector("gif").src = gifs[currentSolution];
  winCount++;
  triesLeft = 10;
  newPuzzle();
  resetBlanks();
  //displays solution in solution div
  document.querySelector("#solution").innerText = currentSolution.toString().replace(/,/g, "");
}
else if (triesLeft == 0) {
  newPuzzle();
  resetBlanks();
  //displays try again message
  document.querySelector("#solution)").innerText = "You ran out of tries! Here's a new word."
}
}
else {
  guessedWrong = guessedWrong.push(guessedLetter);
  triesLeft = triesLeft - 1;
  document.querySelector("#lettersguessed").innerText = "Letters Guessed: " + guessedWrong.toString().replace(/,/g, "  ");
}
}
