const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const results = document.querySelector('.result') 
const compImg = document.querySelector('.comp-img') 
const userImg = document.querySelector('.user-img') 



function rockBtnClick() {
    results.innerText = 'rock clicked'
}

function paperBtnClick() {
    results.innerText = 'paper clicked'
}

function scissorsBtnClick() {
    results.innerText = 'scissors clicked'
}


rockButton.addEventListener('click', rockBtnClick)
paperButton.addEventListener('click', paperBtnClick)
scissorsButton.addEventListener('click', scissorsBtnClick)

