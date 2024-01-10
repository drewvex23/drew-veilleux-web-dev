const imageList = document.querySelectorAll('.image')
const imageTwoList = document.querySelectorAll('.image-two')
const textList = document.querySelectorAll('.text')
const hamburgerMenu = document.querySelector('.hamburger-menu')
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
})
hamburgerMenu