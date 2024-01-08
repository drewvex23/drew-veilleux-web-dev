const imageList = document.querySelectorAll('.image')
const imageTwoList = document.querySelectorAll('.image-two')
const textList = document.querySelectorAll('.text')


// firstGroupImg1.addEventListener('click', () => {
//     firstGroupImg1.style.display = 'none'
//     firstGroupImg2.style.display = 'block'
//     firstGroupText.style.display = 'block'
// })

// firstGroupImg2.addEventListener('click', () => {
//     firstGroupImg2.style.display = 'none'
//     firstGroupImg1.style.display = 'block'
//     firstGroupText.style.display = 'none'
// })

// secondGroupImg1.addEventListener('click', () => {
//     secondGroupImg1.style.display = 'none'
//     secondGroupImg2.style.display = 'block'
//     secondGroupText.style.display = 'block'
// })

// secondGroupImg2.addEventListener('click', () => {
//     secondGroupImg2.style.display = 'none'
//     secondGroupImg1.style.display = 'block'
//     secondGroupText.style.display = 'none'
// })

// thirdGroupImg1.addEventListener('click', () => {
//     thirdGroupImg1.style.display = 'none'
//     thirdGroupImg2.style.display = 'block'
//     thirdGroupText.style.display = 'block'
// })

// thirdGroupImg2.addEventListener('click', () => {
//     thirdGroupImg2.style.display = 'none'
//     thirdGroupImg1.style.display = 'block'
//     thirdGroupText.style.display = 'none'
// })

// fourthGroupImg1.addEventListener('click', () => {
//     fourthGroupImg1.style.display = 'none'
//     fourthGroupImg2.style.display = 'block'
//     fourthGroupText.style.display = 'block'
// })

// fourthGroupImg2.addEventListener('click', () => {
//     fourthGroupImg2.style.display = 'none'
//     fourthGroupImg1.style.display = 'block'
//     fourthGroupText.style.display = 'none'
// })

console.log(imageList[0].src)

imageList.forEach(eachImg => {
    eachImg.addEventListener('click', () => {
        let index = parseInt(eachImg.id)
        console.log(index)
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