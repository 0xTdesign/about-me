"Use strict";

let score = 0;

/*
Question 1
*/
function questionOne() {
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
    alert(name + "You sure you dont wanna try!");
  }
}

/*
Question 2
*/

function questionTwo() {
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
}

/*
Question 3
*/

function questionThree() {
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
}

/*
Question 4
*/

function questionFour() {
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
}

/*
Question 5
*/

function questionFive() {
  let crypto = prompt("Have you ever bought any Crypto?").toLowerCase();
  while (crypto !== "yes" && crypto !== "no") {
    // console.log("Please only anwser yes or no");
    alert("Please only anwser yes or no");
    crypto = prompt("Have you ever bought any Crypto?").toLowerCase();
  }
  if (crypto === "yes") {
    // console.log(crypto);
    alert(name + " That's great hope it moons hard");
    score++;
  } else {
    // console.log("Its not for everyone");
    alert(name + " Its not for everyone");
  }
}

/*
Question 6
*/

function questionSix() {
  //  alert("Lets play a number guessing game. Pick a number between 1-10");

  let game; // prompt(
  // "Lets play a number guessing game. Pick a number between 1-10");
  let favNumber = Math.floor(Math.random() * 10) + 1;
  console.log(favNumber);

  for (let i = 0; i <= 4; i++) {
    console.log(i);
    if (i === 4) {
      alert(
        `You have exceeded your maximum amount of tries. Better luck next time. The number was ${favNumber}.`
      );
      break;
    }

    game = prompt(
      "Lets play a number guessing game. Pick a number between 1-10"
    );
    if (game < favNumber) {
      alert("Its higher than that");
    } else if (game > favNumber) {
      alert("Its lower than that");
    } else {
      score++;
      alert(" Well done you got it " + favNumber);
      break;
    }
  }
}

/*
Question 7
*/

function questionSeven() {
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
    // alert("Well done in the game. You final score is " + score + "/7");
  }
}

function startQuiz() {
  let name = prompt("Hi, Welcome to my quiz. Let's start. What is your name?");

  alert("Hi " + name + " What a great name");
  console.log(`Hi ${name}`);

  questionOne();
  console.log("q1");
  questionTwo();
  console.log("q2");
  questionThree();
  console.log("q3");
  questionFour();
  console.log("q4");
  questionFive();
  console.log("q5");
  questionSix();
  console.log("q6");
  questionSeven();
  console.log("q7");
  alert("Well done in the game. You final score is " + score + "/7");
  // let question = prompt(
  //   "Lets get to know each other better. I will ask a few YES or NO questions and lets see how we get on. Type Yes to start :)"
  // ).toLowerCase();
  // while (question !== "yes" && question !== "no") {
  //   // console.log("Please only anwser yes or no");
  //   alert("Please only anwser yes or no");
  //   question = prompt(
  //     "Lets get to know each other better. I will ask a few YES or NO questions and lets see how we get on. Type Yes to start"
  //   );
  // }

  // if (question === "yes") {
  //   alert("Great," + " " + name + " " + "Lets get started");
  //   // console.log("Great lets get started");
  // } else {
  //   // console.log("You sure you dont wanna try");
  //   alert(name + "You sure you dont wanna try");
  // }

  // let dubai = prompt("Have you ever been to Dubai? Yes or No").toLowerCase();
  // while (dubai !== "yes" && dubai !== "no") {
  //   // console.log("Please only anwser yes or no");
  //   alert("Please only anwser yes or no");
  //   dubai = prompt("Have you ever been to Dubai? Yes or No").toLowerCase();
  // }
  // if (dubai === "yes") {
  //   // console.log(dubai);
  //   alert("Amazing hope you liked it");
  //   score++;
  // } else {
  //   console.log("Maybe some other time");
  //   alert("Maybe you can go next holiday");
  // }

  // let cat = prompt("Do you have a cat?").toLowerCase();
  // while (cat !== "yes" && cat !== "no") {
  //   // console.log("Please only anwser yes or no");
  //   alert("Please only anwser yes or no");
  //   dubai = prompt("Do you have a cat?").toLowerCase();
  // }
  // if (cat === "yes") {
  //   // console.log(cat);
  //   alert(name + " I love cats as well");
  //   score++;
  // } else {
  //   // console.log("Maybe some other time");
  //   alert("Not everyone likes cats");
  // }

  // let course = prompt(
  //   "Are you interested in Software Developemnt"
  // ).toLowerCase();
  // while (course !== "yes" && course !== "no") {
  //   // console.log("Please only anwser yes or no");
  //   alert("Please only anwser yes or no");
  //   course = prompt("Are you interested in Software Developemnt").toLowerCase();
  // }
  // if (course === "yes") {
  //   // console.log(course);
  //   alert(name + " That's amazing. There are so many videos and course online");
  //   score++;
  // } else {
  //   // console.log("Its not for everyone");
  //   alert("Its not for everyone");
  // }

  // let crypto = prompt("Have you ever bought any Crypto?").toLowerCase();
  // while (crypto !== "yes" && crypto !== "no") {
  //   // console.log("Please only anwser yes or no");
  //   alert("Please only anwser yes or no");
  //   crypto = prompt("Have you ever bought any Crypto?").toLowerCase();
  // }
  // if (crypto === "yes") {
  //   // console.log(crypto);
  //   alert(name + " That's great hope it moons hard");
  //   score++;
  // } else {
  //   // console.log("Its not for everyone");
  //   alert(name + " Its not for everyone");
  // }

  // Game starts

  // alert("Lets play a number guessing game. Pick a number between 1-10");

  // let game; // prompt(
  // // "Lets play a number guessing game. Pick a number between 1-10");
  // let favNumber = Math.floor(Math.random() * 10 + 1);
  // console.log(favNumber);
  // for (let i = 0; i <= 4; i++) {
  //   if (i === 4) {
  //     alert(
  //       "You have exceed your maximum amount of trys. Better luck next time the number is" +
  //         favnumber
  //     );
  //     break;
  //   }

  //   game = prompt(
  //     "Lets play a number guessing game. Pick a number between 1-10"
  //   );
  //   if (game < favNumber) {
  //     alert("So close but its higher than that");
  //   } else if (game > favNumber) {
  //     alert("So close. But its lower than that");
  //   } else {
  //     alert(" Well done you got it " + favNumber);
  //     score++;
  //     break;
  //   }
  // }

  // Colour game

  // let answers = ["yellow", "green", "black"];
  // let guess = prompt("What is my favourite colour?");
  // let won = false;
  // let answersString = "";

  // for (let i = 0; i < answers.length; i++) {
  //   if (i === 0) {
  //     answersString += answers[i];
  //   } else {
  //     answersString += ", " + answers[i];
  //   }
  // }

  // for (let i = 1; i <= 6; i++) {
  //   if (i === 6) {
  //     alert("Better luck next time");
  //     break;
  //   }

  //   for (let i = 0; i < answers.length; i++) {
  //     if (guess === answers[i]) {
  //       won = true;
  //       alert(
  //         "Well done you got it correct. All the correct answers are " +
  //           answersString
  //       );
  //       score++;
  //       break;
  //     }
  //   }

  //   if (won === true) {
  //     break;
  //   } else {
  //     guess = prompt("Nope, Sorry not the correct answer!");
  //   }
  //   alert("Well done in the game. You final score is " + score + "/7");
  // }
}

//   let input; // users input
//   let myFavnumber = Math.floor(Math.random() * 5 + 1); // random number no higher that 30
//   console.log(myFavnumber); // this allows us to see what the random generated number is in the console.

//   for (let i = 1; i < 4; i++) {
//     // it starts at 1 then if it is less than 4 it will + 1 every time

//     if (i === 4) {
//       // The user has 4 turns only
//       alert(
//         "Sorry but you have run out of trys. Better luck next time. The answer was " +
//           myFavnumber
//       ); // Alert saything that you have run out of trys. This happens once i has hit 4
//       break; // by putting break it exits the for loop. This is needed to stop it from looping
//     }

//     input = prompt(
//       "Lets play a number guessing game. Pick a number between 1-30"
//     ); // We then need to add the promt again for them to pick a number or nothing will show up on the screen

//     if (input < myFavnumber) {
//       // By comparing the user input numner to check if it is lower to the Fav mumber
//       alert("Sorry that is to low"); // An alert will display if it is lower
//     } else if (input > myFavnumber) {
//       // This Else if then checks the input to see if it is greater than the number.
//       alert("Good guess but that is to high"); // An alert will pop on the screen to let the user know if it is to high
//     } else {
//       // this Else statement is used to show when the user has guessed the numbeer correctly
//       alert("Well done you got it. The number was " + myFavnumber); // The final alert message lets the user know that the number is correct and by adding myFavnumber at the end will show the number in the alert message
//       break; // finally the brrak to exit the loop and it has ended
//     }
//   }

//   let car = ["red", "pink", "brown"]; // These are my colours that are in a array.
//   let userGuess = prompt(
//     "Lets see how well you know me. What colour is my car?"
//   ); // This will prompt on the screen
//   let correct = false; // This is use to exit For loop. Once it is set to true it is correct.
//   let correctString = ""; // This is used to check the answers to the string above.

//   for (let i = 0; i < car.length; i++) {
//     // [i] starts at 0 so it goes throw the array. Car.length checks all the items in the Array
//     if (i === 0) {
//       // starts at 0 and moves up
//       correctString += car[i]; //
//     } else {
//       correctString += " ," + correct[i];
//     }

//     for (i = 1; i <= 6; i++) {
//       // It will start at 1 and it gives the user 6 trys
//       if (i === 6) {
//         // This gives the user 6 attempts
//         alert("Sorry but that is not correct");
//         break; // I need the break here so that it does not keep looping
//       }
//     }

//     for (i = 0; i < car.length; i++) {
//       if (userGuess === car[i]) {
//         correct = true;
//         alert("Well done you got it correct " + correctString);
//         break;
//       }
//     }
//     if ((correct = true)) {
//       break;
//     } else correct = false;
//     alert(" Sorry that is not correct");
//   }

//   alert("Well done in the game. You final score is " + score + "/7");
// }

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
