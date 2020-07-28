let userScore = 0
let compScore = 0
let userScoreSpan = document.getElementById("user-score")
let compScoreSpan = document.getElementById("computer-score")
const scoreSpanDiv = document.querySelector(".score-board")
const resultDiv = document.querySelector(".result p")
const rockDiv = document.getElementById("r")
const paperDiv = document.getElementById("p")
const scissorDiv = document.getElementById("s")
const btn = document.getElementById('btn')


const convertToWord = (letter) => {
  if (letter === 'r') { return 'Rock' }
  if (letter === 'p') { return 'Paper' }
  if (letter === 's') { return 'Scissors' }
}

const win = (userChoice, computerChoice) => {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  resultDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
  document.getElementById(userChoice).classList.add('win');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('win');
  }, 500)
}

const lose = (userChoice, computerChoice) => {
  compScore++;
  compScoreSpan.innerHTML = compScore;
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  resultDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses against ${convertToWord(computerChoice)}${smallCompWord}. You Lose!`;
  document.getElementById(userChoice).classList.add('lose');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('lose');
  }, 500)

}

const draw = (userChoice, computerChoice) => {
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  resultDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord} is equal to ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
  document.getElementById(userChoice).classList.add('draw');
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove('draw');
  }, 500)
}

const resetScore = () => {
  userScore = 0;
  compScore = 0;
  userScoreSpan.innerHTML = 0;
  compScoreSpan.innerHTML = 0;
}

const getCompChoice = () => {
  const choices = ["r", "p", "s"]
  const randNum = Math.floor(Math.random() * 3)
  return choices[randNum]
}

const game = (userChoice) => {
  const computerChoice = getCompChoice()
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      console.log("User Wins!");
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      console.log('User Loses!');
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      console.log('It\'s a draw!');
      break;
  }
}
game()

const main = () => {
  rockDiv.addEventListener("click", () => {
    game("r")
  })

  paperDiv.addEventListener("click", () => {
    game("p")
  })

  scissorDiv.addEventListener("click", () => {
    game("s")
  })

  btn.addEventListener('click', resetScore);
}

main()
