'use strict';
let userScore = (0)


let name = prompt('What is you name?');
if (name) {
  alert('Ayeee I like your name!!');
} 

function checkScore() {
  alert('Your current score: ' + userScore);
}


function q1button() {
  let q1StringFromPrompt = prompt("Where do you think I was born?");
  console.log("User input: " + q1StringFromPrompt);
  switch (q1StringFromPrompt.toLowerCase()) {
    case 'seattle':
      alert('Yup, you got it! :)');
      userScore++;
      break;
    case '':
      alert('Please enter your guess.');
      q1button();
      break;
    case 'new york':
      alert('Nope. I was born here in Seattle!');
      break;
    case 'europe':
      alert('Unfortunately no. I was born here in Seattle!');
      break;
    default:
      alert('No, I was born here in Seattle!');
  }
}

function q2button() {
  let q2StringFromPrompt = prompt("What instrument do you think I play?");
  console.log("User input: " + q2StringFromPrompt);
  switch (q2StringFromPrompt.toLowerCase()) {
    case 'piano':
      alert('Yup! You got it, I play piano.');
      userScore++;
      break;
    case '':
      alert('Please enter your guess.');
      q2button();
      break;
    case 'saxophone':
      alert('No, I played a little clarinet in elementary, but my main instrument is piano! ');
      break;
    case 'guitar':
      alert('I WISH! I play piano now, but if I were to pick up another instrument it would be Guitar!');
      break;
    default:
      alert('No, it would be fun to learn that one, but I only play piano.');
  }
}

function q3button() {
  let q3StringFromPrompt = prompt("What do you think my favorite food is?");
  console.log("User input: " + q3StringFromPrompt);
  switch (q3StringFromPrompt.toLowerCase()) {
    case 'mac and cheese':
      alert('Thats right! I love me some good ole Mac and Cheese');
      userScore++;
      break;
    case '':
      alert('Please enter your guess.');
      q3button();
      break;
    case 'burger':
      alert('I do love a good burger, but good ole Mac and Cheese might be better!');
      break;
    case 'beef pad thai':
      alert('That is a dang good one, but I would have to choose Mac and Cheese');
      break;
    default:
      alert('For me, I love me some good Mac and Cheese!!');
  }
}
function q4button() {
  let q4StringFromPrompt = prompt("How many motorcycles do I own?");
  console.log("User input: " + q4StringFromPrompt);
  switch (q4StringFromPrompt.toLowerCase()) {
    case '1':
      alert('nope, I own 4');
      break;
    case '':
      alert('Please enter your guess.');
      q4button();
      break;
    case '4':
      alert('YEAH! I own 4:D');
      userScore++;
      break;
    case '2':
      alert('nope, I own 4');
      break;
    case '3':
      alert('Close! I own 4 actually:)');
      break;
    default:
      alert('Currently I own 4!:D');
  }
}

function q5button() {
  let q5StringFromPrompt = prompt("What sport do you think I play?");
  console.log("User input: " + q5StringFromPrompt);
  switch (q5StringFromPrompt.toLowerCase()) {
    case 'water polo':
      alert('I did grow up playing, but my sport of choice now is golf!');
      break;
    case '':
      alert('Please enter your guess.');
      q5button();
      break;
    case 'baseball':
      alert('I played as a kid, but now I play golf');
      break;
    case 'basketball':
      alert('I played basketball as a kid, but I play Golf now! :D');
      break;
    case 'golf':
      alert('You got it! I play golf!');
      userScore++;
      break;
    default:
      alert('I play Golf! :D');
  }
}
function q6button() {
  let answer = Math.floor(Math.random() * 100) + 1;
  let attempts = 4;
  console.log("User input: " + answer)
  for (let i = 1; i <= attempts; i++) {
    let guess = parseInt(prompt("Please guess a number between 1 and 100:"));

    if (guess === answer) {
      alert("Congratulations! You guessed the correct number!");
      userScore++;
      return;
    } else if (guess < answer) {
      alert("Guess is too low, try again!");
    } else {
      alert("Guess is too high! Try again.");
    }
  }

  alert("You have exhausted all your attempts. The correct answer was: " + answer);
}

function q7button() {
  let q7a = ["england", "scotland", "wales", "northern ireland", "ireland"];
  let attempts = 6;

  for (let i = 1; i <= attempts; i++) {
    let q7StringFromPrompt = prompt("Which countries are part of the United Kingdom?");
    console.log("User input: " + q7StringFromPrompt);
    let q7r = q7StringFromPrompt.toLowerCase();

    if (q7a.includes(q7r)) {
      alert('That\'s correct!');
      userScore++;
      return;
    } else {
      alert('That is incorrect. Please try again.');
    }
  }

  alert('Darn, you have reached your last attempt. The answers were, England, Scotland, Wales, and Northern Ireland, but just Ireland was acceptable.');
}