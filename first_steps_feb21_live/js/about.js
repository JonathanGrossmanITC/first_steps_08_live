const snacks = ["peanut butter", "bananas", "chocolate"];

for (let i = 0; i < snacks.length; i++) {
  // This part is the code that runs each time it loops through
  console.log(i, snacks[i]);
}

const string = "This is a string.";

for (let i = 0; i < string.length; i++) {
  if (string[i] === "s") {
    console.log(i, string[i]);
  } else if (string[i] == "g") {
    console.log("gee whiz");
  }
}

const playerName = "Lebron";
const x = 5;

if (playerName === "LeBron" && x === 5) {
  console.log(playerName);
} else {
  console.log("Something else");
}

// if (playerName === "LeBron" || x === 5) {
//   console.log(playerName);
// } else {
//   console.log("Something else");
// }

// const myLimit = 10;
// const x = 8;
// if (x + 3 > myLimit) {
//   // do something
// }

(() => {
  console.log("hello");
  const yourFunction = () => {};
})();

const returnFavoriteNumber = (favoriteNumber) => {
  return "Your favorite number is " + favoriteNumber.toString();
};

function returnHerFunction() {
  // This is the older syntax, but still okay to use
  console.log("Cool");
  return "Her function";
}

returnHerFunction();

// Printing the function definition
// console.log(returnFavoriteNumber);

// Printing function return value
console.log(returnFavoriteNumber(2));

// Other function calls of the same function
// returnFavoriteNumber(5);
// returnFavoriteNumber(7);

// Saving function return value
// const myString = returnFavoriteNumber(2);
// console.log(myString);

const greetUser = (username) => {
  console.log("Welcome to ITC, " + username);
};

// greetUser("Rafael");
// greetUser("Prime Minister Netanyahu");
// greetUser();
const rafaelArray = ["steak", "schnitzel", "lasagna", "peanut butter"];

// Live code task 2
const buildSentence = (foodArray) => {
  let intro = "When I'm really hungry, I like to eat ";
  for (let i = 0; i < foodArray.length; i++) {
    if (i !== foodArray.length - 1) {
      intro = intro + foodArray[i] + ", ";
    } else if (i === foodArray.length - 1) {
      intro = intro + "or " + foodArray[i] + ".";
    }
  }

  const sentenceHTML = document.getElementById("sentence");
  console.log(sentenceHTML.textContent);
  sentenceHTML.textContent = intro;
  // return intro;
};

buildSentence(rafaelArray);

// const sentence = buildSentence(rafaelArray);
// console.log(sentence);
