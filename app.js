"Use strict";

function startQuiz() {
  let name = prompt("Hi, Welcome to my quiz. Let's start. What is your name?");

  alert("Hi" + " " + name + "" + "What a great name");
  console.log("Hi" + " " + name);

  let question = prompt(
    "Lets get to know each other better. I will ask a few YES or NO questions and lets see how we get on. Type Yes to start :)"
  );

  if (question === "yes") {
    alert("Great," + " " + name + " " + "Lets get started");
    console.log("Great lets get started");
  } else {
    console.log("You sure you dont wanna try");
    alert(name + "You sure you dont wanna try");
  }

  let dubai = prompt("Have you ever been to Dubai? Yes or No");
  let DUBAI = dubai.toUpperCase();

  if (dubai === "yes") {
    console.log(dubai);
    alert("Amazing hope you liked it");
  } else {
    console.log("Maybe some other time");
    alert("Maybe you can go next holiday");
  }

  let cat = prompt("Do you have a cat?");
  let CAT = cat.toUpperCase();

  if (cat === "yes") {
    console.log(cat);
    alert(name + " " + " I love cats as well");
  } else {
    console.log("Not everyone likes cats");
    alert("Not everyone likes cats");
  }
}
