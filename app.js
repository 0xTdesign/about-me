"Use strict";

let score = 0;

function startQuiz() {
  let name = prompt("Hi, Welcome to my quiz. Let's start. What is your name?");

  alert("Hi " + name + " What a great name");
  console.log("Hi" + " " + name);

  let question = prompt(
    "Lets get to know each other better. I will ask a few YES or NO questions and lets see how we get on. Type Yes to start :)"
  ).toLowerCase();
  while (question !== "yes" && question !== "no") {
    // console.log("Please only anwser yes or no");
    alert("Please only anwser yes or no");
    question = prompt(
      "Lets get to know each other better. I will ask a few YES or NO questions and lets see how we get on. Type Yes to start"
    );
  }

  if (question === "yes") {
    alert("Great," + " " + name + " " + "Lets get started");
    // console.log("Great lets get started");
  } else {
    // console.log("You sure you dont wanna try");
    alert(name + "You sure you dont wanna try");
  }

  let dubai = prompt("Have you ever been to Dubai? Yes or No").toLowerCase();
  while (dubai !== "yes" && dubai !== "no") {
    // console.log("Please only anwser yes or no");
    alert("Please only anwser yes or no");
    dubai = prompt("Have you ever been to Dubai? Yes or No").toLowerCase();
  }
  if (dubai === "yes") {
    // console.log(dubai);
    alert("Amazing hope you liked it");
    score++;
  } else {
    console.log("Maybe some other time");
    alert("Maybe you can go next holiday");
  }

  let cat = prompt("Do you have a cat?").toLowerCase();
  while (cat !== "yes" && cat !== "no") {
    // console.log("Please only anwser yes or no");
    alert("Please only anwser yes or no");
    dubai = prompt("Do you have a cat?").toLowerCase();
  }
  if (cat === "yes") {
    // console.log(cat);
    alert(name + " I love cats as well");
    score++;
  } else {
    // console.log("Maybe some other time");
    alert("Not everyone likes cats");
  }

  let course = prompt(
    "Are you interested in Software Developemnt"
  ).toLowerCase();
  while (course !== "yes" && course !== "no") {
    // console.log("Please only anwser yes or no");
    alert("Please only anwser yes or no");
    course = prompt("Are you interested in Software Developemnt").toLowerCase();
  }
  if (course === "yes") {
    // console.log(course);
    alert(name + " That's amazing. There are so many videos and course online");
    score++;
  } else {
    // console.log("Its not for everyone");
    alert("Its not for everyone");
  }

  let crypto = prompt("Have you ever bought any Crypto?").toLowerCase();
  while (crypto !== "yes" && crypto !== "no") {
    // console.log("Please only anwser yes or no");
    alert("Please only anwser yes or no");
    crypto = prompt("Have you ever bought any Crypto?").toLowerCase();
  }
  if (crypto === "yes") {
    // console.log(crypto);
    alert(name + "That's great hope it moons hard");
    score++;
  } else {
    // console.log("Its not for everyone");
    alert(name + "Its not for everyone");
  }

  // Game starts
  let game = prompt(
    "Lets play a number guessing game. Pick a number between 1-10"
  );

  for (let i = 0; i <= 4; i++) {
    if (i === 4) {
      alert(
        "You have exceed your maximum amount of trys. Better luck next time"
      );
      break;
    }
    if (game <= 6) {
      alert("So close bit its higher than that");
      game = prompt(
        "Lets play a number guessing game. Pick a number between 1-10"
      );
    } else if (game >= 8) {
      alert("So close. But its lower than that");
      game = prompt(
        "Lets play a number guessing game. Pick a number between 1-10"
      );
    } else {
      alert(" Well done you got it");
      score++;
    }
  }

  // Colour game

  let answers = ["yellow", "green", "black"];
  let guess = prompt("What is my favourite colour?");
  let won = false;
  let answersString = "";

  for (let i = 0; i < answers.length; i++) {
    if (i === 0) {
      answersString += answers[i];
    } else {
      answersString += ", " + answers[i];
    }
  }

  for (let i = 1; i <= 6; i++) {
    if (i === 6) {
      alert("Better luck next time");
      break;
    }

    for (let i = 0; i < answers.length; i++) {
      if (guess === answers[i]) {
        won = true;
        alert(
          "Well done you got it correct. All the correct answers are " +
            answersString
        );
        score++;
        break;
      }
    }

    if (won === true) {
      break;
    } else {
      guess = prompt("Nope, Sorry not the correct answer!");
    }
  }
  alert("Well done in the game. You final score is " + score + "/7");
}

// if (game <= 6) {
// alert("So close but its higher than that");
// }
// {
// game = prompt(
// "Lets play a number guessing game. Pick a number between 1-10"
// ).toLowerCase();
// }
// if (game >= 8) {
//   alert("Getting so close. Its lower than that");
//   game = prompt(
//     "Lets play a number guessing game. Pick a number between 1-10"
//   ).toLowerCase();
// } else {
//   alert(
//     "Well done you got the correct number." + number + " is my lucky number"
//   );
// }

// while (question !== "yes" && !== "no") {
//   console.log
//   alert =
// }

// document.write(name)

// function getUsername() {
//   let username = prompt("What is your name");
//   alert = "hello";

//   document.write(name);
// }

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
//
