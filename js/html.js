const imageList = document.querySelectorAll('.image')
const imageTwoList = document.querySelectorAll('.image-two')
const textList = document.querySelectorAll('.text')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerMenuOpen = document.querySelector('.hamburger-menu-open')
const linkArea = document.querySelector('.link-area')
const theJoke = document.querySelector('.output')
const jokeButton = document.querySelector('.button')

imageList.forEach(eachImg => {
    eachImg.addEventListener('click', () => {
        let index = parseInt(eachImg.id)
        imageList[index].style.display = 'none'
        imageTwoList[index].style.display = 'block'
        textList[index].style.display = 'block'
    })
})

imageTwoList.forEach(eachImg => {
    eachImg.addEventListener('click', () => {
        let index = parseInt(eachImg.id)
        imageList[index].style.display = 'block'
        imageTwoList[index].style.display = 'none'
        textList[index].style.display = 'none'
    })
})

    
hamburgerMenu.addEventListener('click', () => {
    linkArea.style.display = 'block'
    hamburgerMenu.style.display = 'none'
    hamburgerMenuOpen.style.display = 'block'
})

hamburgerMenuOpen.addEventListener('click', () => {
    linkArea.style.display = 'none'
    hamburgerMenu.style.display = 'block'
    hamburgerMenuOpen.style.display = 'none'
})





const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';


async function getJoke() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const joke = result[0].joke;
        theJoke.textContent = joke
    } catch (error) {
        theJoke.textContent = 'Something is off here...'
    }
}



jokeButton.addEventListener('click', ()=> {
    getJoke()
})
