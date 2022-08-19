"Use strict";

function startQuiz() {
  let name = prompt(
    "Hi, Welcome to my quiz. Let's start. What is your name?"
  ).toLowerCase();

  alert("Hi " + name + " What a great name");
  // console.log("Hi" + " " + name);

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
  } else {
    // console.log("Its not for everyone");
    alert(name + "Its not for everyone");
  }
  let game = prompt(
    "Lets play a number guessing game. Pick a number between 1-10"
  ).toLowerCase();
  let number = 7;

  for (let i = 0; i <= 4; i++) {
    if (i === 4)
      alert(
        "You have exceed your maximum amount of trys. Better luck next time"
      );
    break;
  }

  if (number <= 6) alert("So close but its higher than that");
  {
    game = prompt(
      "Lets play a number guessing game. Pick a number between 1-10"
    ).toLowerCase();
  }
  if (number >= 8) {
    alert("Getting so close. Its lower than that");
    game = prompt(
      "Lets play a number guessing game. Pick a number between 1-10"
    ).toLowerCase();
  } else {
    alert(
      "Well done you got the correct number." + number + " is my lucky number"
    );
  }
}

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
