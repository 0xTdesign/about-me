"Use strict";

let score = 0;

function startName() {
  let name = prompt(
    "Hi, Weclome to my website. My name is Tim. What is yours?"
  );
  alert("Hi, " + name + ". Nice to meet you");
}

function start() {
  let start = prompt(
    "lets play a yes and no Quiz. I will ask a few questions and lets see how many you can get right"
  ).toLowerCase();

  while (start !== "yes" && start !== "no") {
    alert("Pleas only answer yes or no");
    start = prompt(
      "lets play a yes and no Quiz. I will ask a few questions and lets see how many you can get right"
    );
  }
  if (start === "yes") {
    alert("great lets get started");
    score++;
  } else {
    alert("Maybe we can do it another time");
  }
}

function q1() {
  let fish = prompt("Do you like to fish?");

  while (fish !== "yes" && fish !== "no") {
    alert("Please only answer yes or no");
    fish = prompt("Do you like to fish?");
  }
  if (fish === "yes") {
    alert("I love to fish aswell");
    score++;
  } else {
    alert("Fishing is not for everyone");
  }
}

function numberGame() {
  let numberGame;
  let number = Math.floor(Math.random() * 10 + 1);
  console.log(number);

  for (let i = 0; i <= 4; i++) {
    if (i === 4) {
      alert("Sorry but you have run out of trys the number was " + number);
      break;
    }

    numberGame = prompt(
      "Lets play a number guessing game. Pick a number between 1 - 10"
    );

    if (numberGame < number) {
      alert("So close but its higher than that");
    } else if (numberGame > number) {
      alert("So close but its lower");
    } else {
      score++;
      alert("Good job you got it right. Your final score is " + score + "/3");
      break;
    }
  }
}

function welcomeQuiz() {
  startName();
  start();
  q1();
  numberGame();
}
