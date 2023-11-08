const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const resetButton = document.getElementById('reset')
const results = document.querySelector('.result') 
const compImg = document.querySelector('.comp-img') 
const userImg = document.querySelector('.user-img')
const userScoreDisplay = document.querySelector('.user-score-display')
const compScoreDisplay = document.querySelector('.comp-score-display')

const choices = ['rock','paper','scissors']
let comp
let userScore = 0
let compScore = 0

rockButton.addEventListener('click', () => {
    userImg.src = "../Images/Rps-images/" + rockButton.id + ".png"
    compChoice()
    winLose(rockButton.id)
    bestFive()
})
paperButton.addEventListener('click', () => {
    userImg.src = "../Images/Rps-images/" + paperButton.id + ".png"
    compChoice()
    winLose(paperButton.id)
    bestFive()
})
scissorsButton.addEventListener('click', () => {
    userImg.src = "../Images/Rps-images/" + scissorsButton.id + ".png"
    compChoice()
    winLose(scissorsButton.id)
    bestFive()
})
resetButton.addEventListener('click', () => {
    resetGame()
})

function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../Images/Rps-images/" + comp + ".png"
}

function winLose(userChoice) {
    if (userChoice == 'rock' && comp == 'paper') {
        results.innerText = 'Computer Wins!'
        compScore = compScore += 1
        compScoreDisplay.innerText = compScore.toString()
    } else if (userChoice == 'paper' && comp == 'rock') {
        results.innerText = 'User Wins!'
        userScore = userScore += 1
        userScoreDisplay.innerText = userScore.toString()
    } else if (userChoice == 'scissors' && comp == 'paper') {
        results.innerText = 'User Wins!'
        userScore = userScore += 1
        userScoreDisplay.innerText = userScore.toString()
    } else if (userChoice == 'paper' && comp == 'scissors') {
        results.innerText = 'Computer Wins!'
        compScore = compScore += 1
        compScoreDisplay.innerText = compScore.toString()
    } else if (userChoice == 'rock' && comp == 'scissors') {
        results.innerText = 'User Wins!'
        userScore = userScore += 1
        userScoreDisplay.innerText = userScore.toString()
    } else if (userChoice == 'scissors' && comp == 'rock') {
        results.innerText = 'Computer Wins!'
        compScore = compScore += 1
        compScoreDisplay.innerText = compScore.toString()
    } else {
        results.innerText = 'Tie'
    }

}

function resetGame() {
    userScore = 0
    compScore = 0
    userScoreDisplay.innerText = userScore
    compScoreDisplay.innerText = compScore
    results.innerText = 'Start Game'
}

function resetScore() {
    userScore = 0
    compScore = 0
    userScoreDisplay.innerText = userScore
    compScoreDisplay.innerText = compScore
}

function bestFive() {
    if (userScore == 3) {
        results.innerText = 'User Won Best of Five!'
        resetScore()
    }
    if (compScore == 3) {
        results.innerText = 'Computer Won Best of Five!'
        resetScore()
    }

    }