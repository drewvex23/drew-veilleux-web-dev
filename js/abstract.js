const searchBox = document.querySelector('.search-box')
const searchArrow = document.querySelector('.search-button')
const searchArea = document.querySelector('.search-area')
const headerTitle = document.querySelector('.abstract-header-title')
const headerIcon = document.querySelector('.header-left-icon')

searchArea.addEventListener('mouseover', () => {
    searchBox.style.border = '1px solid #4C5FD5'
    searchArrow.style.color = '#4C5FD5'
})

searchArea.addEventListener('mouseout', () => {
    searchBox.style.border = '1px solid black'
    searchArrow.style.color = 'black'
})

searchArrow.addEventListener('mouseover', () => {
    searchBox.style.border = '1px solid black'
    searchArrow.style.color = '#4C5FD5'
})

searchArrow.addEventListener('mouseout', () => {
    searchArrow.style.color = 'black'
})

headerTitle.addEventListener('mouseover', () => {
    headerTitle.style.color = '#dadbf1'
    headerIcon.style.backgroundColor = '#dadbf1'
})

headerTitle.addEventListener('mouseout', () => {
    headerTitle.style.color = '#fff'
    headerIcon.style.backgroundColor = '#fff'
})

headerIcon.addEventListener('mouseover', () => {
    headerTitle.style.color = '#dadbf1'
    headerIcon.style.backgroundColor = '#dadbf1'
})

headerIcon.addEventListener('mouseout', () => {
    headerTitle.style.color = '#fff'
    headerIcon.style.backgroundColor = '#fff'
})