const max = prompt("Enter the value of maximum number, computer will generate a random number between 1 to max-number :");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Let predict the number :");

while (true) {
  if (guess == "quit") {
    alert("You 'quit' the game");
    console.log("User 'quit' the game");
    break;
  }

  
  
  if (guess == random) {
    alert(`You are right! Congrats!! The random number was ${random}`);
    console.log("You are right! Congrats!! Random number was", random);
    break;
  }
  
  else if (guess < random) {
    guess = prompt("Hint: Your guess was too small. Please try greater one");
  }
  
  else {
    guess = prompt("Hint: Your guess was too large. Please try smaller one");
  }
}
