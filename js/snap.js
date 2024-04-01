const openMenu = document.querySelector('.menu-img')
const closeMenu = document.querySelector('.close-menu-icon')

const featureArrow = document.querySelector('.features-arrow')
const companyArrow = document.querySelector('.company-arrow')

const menuArea = document.querySelector('.menu-area')
const featureArea = document.querySelector('.feature-links')
const companyArea = document.querySelector('.company-area-links')
const featuresDrop = document.querySelector('.features-drop')
const companyDrop = document.querySelector('.company-drop')






const featureArrowDesktop = document.querySelector('.features-arrow-desktop')
const companyArrowDesktop = document.querySelector('.company-arrow-desktop')

const featureAreaDesktop = document.querySelector('.feature-links-desktop')
const companyAreaDesktop = document.querySelector('.company-area-links-desktop')
const featuresDropDesktop = document.querySelector('.features-drop-desktop')
const companyDropDesktop = document.querySelector('.company-drop-desktop')



openMenu.addEventListener('click', () => {
    menuArea.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    menuArea.style.display = 'none'
    
})  

featuresDrop.addEventListener('click', () => {
    changeArrowFeature()
})

companyDrop.addEventListener('click', () => {
    changeArrowCompany()
})

function changeArrowFeature() {
    console.log(featureArrow.src)
    if (featureArrow.src == 'http://127.0.0.1:5500/Images/Snap-images/icon-arrow-down.svg') {
        featureArea.style.display = 'flex'
        featureArrow.src = '../Images/Snap-images/icon-arrow-up.svg'
    } else if (featureArrow.src == 'http://127.0.0.1:5500/Images/Snap-images/icon-arrow-up.svg') {
        featureArea.style.display = 'none'
        featureArrow.src = '../Images/Snap-images/icon-arrow-down.svg'
    }
    
    
}

function changeArrowCompany() {
    
    if (companyArrow.src == 'http://127.0.0.1:5500/Images/Snap-images/icon-arrow-down.svg') {
        companyArea.style.display = 'flex'
        companyArrow.src = '../Images/Snap-images/icon-arrow-up.svg'
    } else if (companyArrow.src == 'http://127.0.0.1:5500/Images/Snap-images/icon-arrow-up.svg') {
        companyArea.style.display = 'none'
        companyArrow.src = '../Images/Snap-images/icon-arrow-down.svg'
    }
    
    
}






featuresDropDesktop.addEventListener('click', () => {
    changeArrowFeatureDesktop()
})

companyDropDesktop.addEventListener('click', () => {
    changeArrowCompanyDesktop()
})

function changeArrowFeatureDesktop() {
    
    if (featureArrowDesktop.src == 'http://127.0.0.1:5500/Images/Snap-images/icon-arrow-down.svg') {
        featureAreaDesktop.style.display = 'flex'
        featureArrowDesktop.src = '../Images/Snap-images/icon-arrow-up.svg'
    } else if (featureArrowDesktop.src == 'http://127.0.0.1:5500/Images/Snap-images/icon-arrow-up.svg') {
        featureAreaDesktop.style.display = 'none'
        featureArrowDesktop.src = '../Images/Snap-images/icon-arrow-down.svg'
    }
    
    
}

function changeArrowCompanyDesktop() {
    
    if (companyArrowDesktop.src == 'http://127.0.0.1:5500/Images/Snap-images/icon-arrow-down.svg') {
        companyAreaDesktop.style.display = 'flex'
        companyArrowDesktop.src = '../Images/Snap-images/icon-arrow-up.svg'
    } else if (companyArrowDesktop.src == 'http://127.0.0.1:5500/Images/Snap-images/icon-arrow-up.svg') {
        companyAreaDesktop.style.display = 'none'
        companyArrowDesktop.src = '../Images/Snap-images/icon-arrow-down.svg'
    }
    
    
}