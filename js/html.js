const firstGroupImg1 = document.querySelector('.first-group-img')
const secondGroupImg1 = document.querySelector('.second-group-img')
const thirdGroupImg1 = document.querySelector('.third-group-img')
const fourthGroupImg1 = document.querySelector('.fourth-group-img')
const firstGroupImg2 = document.querySelector('.first-group-img2')
const secondGroupImg2 = document.querySelector('.second-group-img2')
const thirdGroupImg2 = document.querySelector('.third-group-img2')
const fourthGroupImg2 = document.querySelector('.fourth-group-img2')
const firstGroupText = document.querySelector('.first-group-text')
const secondGroupText = document.querySelector('.second-group-text')
const thirdGroupText = document.querySelector('.third-group-text')
const fourthGroupText = document.querySelector('.fourth-group-text')


firstGroupImg1.addEventListener('click', () => {
    firstGroupImg1.style.display = 'none'
    firstGroupImg2.style.display = 'block'
    firstGroupText.style.display = 'block'
})

firstGroupImg2.addEventListener('click', () => {
    firstGroupImg2.style.display = 'none'
    firstGroupImg1.style.display = 'block'
    firstGroupText.style.display = 'none'
})

secondGroupImg1.addEventListener('click', () => {
    secondGroupImg1.style.display = 'none'
    secondGroupImg2.style.display = 'block'
    secondGroupText.style.display = 'block'
})

secondGroupImg2.addEventListener('click', () => {
    secondGroupImg2.style.display = 'none'
    secondGroupImg1.style.display = 'block'
    secondGroupText.style.display = 'none'
})

thirdGroupImg1.addEventListener('click', () => {
    thirdGroupImg1.style.display = 'none'
    thirdGroupImg2.style.display = 'block'
    thirdGroupText.style.display = 'block'
})

thirdGroupImg2.addEventListener('click', () => {
    thirdGroupImg2.style.display = 'none'
    thirdGroupImg1.style.display = 'block'
    thirdGroupText.style.display = 'none'
})

fourthGroupImg1.addEventListener('click', () => {
    fourthGroupImg1.style.display = 'none'
    fourthGroupImg2.style.display = 'block'
    fourthGroupText.style.display = 'block'
})

fourthGroupImg2.addEventListener('click', () => {
    fourthGroupImg2.style.display = 'none'
    fourthGroupImg1.style.display = 'block'
    fourthGroupText.style.display = 'none'
})