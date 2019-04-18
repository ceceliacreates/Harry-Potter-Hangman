// prevents user from accessing code
(function () {
const gifs = {
  hermionie: "https://media.giphy.com/media/SkBfBxSiaSfgQ/giphy.gif",
  harry: "https://media.giphy.com/media/pYCZPDymIVjeo/giphy.gif",
  sirius: "https://media.giphy.com/media/WyWlG5GhRbV9m/giphy.gif",
  patronus: "https://media.giphy.com/media/aNdy0Kv7CJ5kY/giphy.gif",
  weasley: "https://media.giphy.com/media/X7byz3vE1NRGU/giphy.gif",
  dementor: "https://media.giphy.com/media/5dPoghNughWUg/giphy.gif",
  dumbledore: "https://media.giphy.com/media/720g7C1jz13wI/giphy.gif",
  hippogriff: "https://media.giphy.com/media/fU9XxqhlksFP2/giphy.gif",
  gryffindor: "https://media.giphy.com/media/Tl2AK8HOHj7SU/giphy.gif",
  hogwarts: "https://media.giphy.com/media/7LfFXBn4we96o/giphy.gif",
  voldemort: "https://media.giphy.com/media/54Q8WBE4zDN5e/giphy.gif",
  hagrid: "https://media.giphy.com/media/7hnNiwfkYsPFC/giphy.gif",
  wand: "https://media.giphy.com/media/6CovzgyTig7M4/giphy.gif",
  potion: "https://media.giphy.com/media/I3fMGFf4cAhP2/giphy.gif",
  boggart: "https://media.giphy.com/media/rfmaZEQQgJhYs/giphy.gif",
  quidditch: "https://media.giphy.com/media/MkNqwo86yT7y0/giphy.gif",
  dragon: "https://media.giphy.com/media/uEfXnYLC4hEaY/giphy.gif",
  broom: "https://media.giphy.com/media/4Fh74HLRtEfiU/giphy.gif",
  werewolf: "https://media.giphy.com/media/alazzPN0EJtQs/giphy.gif",
  snape: "https://media.giphy.com/media/8Sb9YY4bfIiY0/giphy.gif"
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

const guessedWrong = [];
const guessedRight = [];

//creates string of blanks based on length of currentSolution THIS WORKS
let currentWord;

function resetBlanks() {
  currentWord = currentSolution.toString().replace(/[a-z]/g, " _ ");
  document.querySelector("#currentword").innerText = currentWord;
}
resetBlanks();
//displays blanks in currentword div THIS WORKS

//function that runs when key is pressed
document.onkeypress = function(e) {
  //transforms entered key to lowercase
  guessedLetter = e.key.toLowerCase();

  //checks guessed letter against solution
  if (currentSolution.includes(guessedLetter)) {
    console.log("Yes");
    //adds guessed letter to array of correctly guessed letters
    guessedRight.push(guessedLetter);
    //creates regex of correctly guessed letters
    const regexp = new RegExp("[^" + guessedRight.join("") + "]", "gi");
    //resets currentword to include all correctly guessed letters
    currentWord = currentSolution.replace(regexp, "_");
    document.querySelector("#currentword").innerText = currentWord;
    //checks if puzzle is solved
    if (currentSolution === currentWord) {
      //resets guessedRight array
      guessedRight.splice(0);
      //displays solution in solution div
      document.querySelector(
        "#solution"
      ).innerText = `You guessed ${currentWord.toString().replace(/,/g, "")} right! Here's a new word!`;
      //changes gif image to match solution
      document.querySelector("#gif").src = gifs[currentWord];
      //updates win count and displays on page
      winCount++;
      document.querySelector("#wincount").innerText = "Wins: " + winCount;
      //resets tries left and displays on page
      triesLeft = 10;
      document.querySelector("#triesleft").innerText = "Tries Left: " + triesLeft;
      //updates letters guessed and displays on page 
      guessedWrong.splice(0);
      document.querySelector("#lettersguessed").innerText =
    "Letters Guessed: " + guessedWrong.toString().replace(/,/g, "  ");
    //resets currentWord
      newPuzzle();
      resetBlanks();
    } 
  }
  else if (triesLeft === 0) {
    //resets guessedRight array
    guessedRight.splice(0);
    //removes all values from guessedWrong array
    guessedWrong.splice(0);
    //resets triesLeft to 10
    triesLeft = 10;
    //displays reset tries left and letters guessed
    document.querySelector("#triesleft").innerText = "Tries Left: " + triesLeft;
  document.querySelector("#lettersguessed").innerText =
    "Letters Guessed: " + guessedWrong.toString().replace(/,/g, "  ");
    //displays try again message
    document.querySelector("#solution").innerText =
      "You ran out of tries! Here's a new word.";
    //selects a new currentSolution
      newPuzzle();
      //resets currentWord for new solution
      resetBlanks();
    }
  else {
    //decrements tries left
  triesLeft = triesLeft - 1;
  //adds guessed letter to guessedWrong array
    guessedWrong.push(guessedLetter);
    //updates triesLeft and GuessedWrong on page
    document.querySelector("#triesleft").innerText = "Tries Left: " + triesLeft;
    document.querySelector("#lettersguessed").innerText =
      "Letters Guessed: " + guessedWrong.toString().replace(/,/g, "  ");
  }
};

})()
