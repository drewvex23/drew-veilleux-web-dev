const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const results = document.querySelector('.result') 
const compImg = document.querySelector('.comp-img') 
const userImg = document.querySelector('.user-img') 

const choices = ['rock','paper','scissors']
let comp

rockButton.addEventListener('click', () => {
    userImg.src = "../Images/Rps-images/" + rockButton.id + ".png"
    compChoice()
    winLose(rockButton.id)
})
paperButton.addEventListener('click', () => {
    userImg.src = "../Images/Rps-images/" + paperButton.id + ".png"
    compChoice()
    winLose(paperButton.id)
})
scissorsButton.addEventListener('click', () => {
    userImg.src = "../Images/Rps-images/" + scissorsButton.id + ".png"
    compChoice()
    winLose(scissorsButton.id)
})

function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../Images/Rps-images/" + comp + ".png"
}

function winLose(userChoice) {
    if (comp == userChoice) {
        results.innerText = 'Tie'
    }
        
}