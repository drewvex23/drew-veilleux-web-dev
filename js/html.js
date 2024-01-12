const imageList = document.querySelectorAll('.image')
const imageTwoList = document.querySelectorAll('.image-two')
const textList = document.querySelectorAll('.text')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerMenuOpen = document.querySelector('.hamburger-menu-open')
const linkArea = document.querySelector('.link-area')

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