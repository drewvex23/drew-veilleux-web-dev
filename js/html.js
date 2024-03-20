const imageList = document.querySelectorAll('.image')
const imageTwoList = document.querySelectorAll('.image-two')
const textList = document.querySelectorAll('.text')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerMenuOpen = document.querySelector('.hamburger-menu-open')
const linkArea = document.querySelector('.link-area')
const locationText = document.querySelector('.city-weather')
const weatherTime = document.querySelector('.weather-time')
const dateText = document.querySelector('.weather-date')
const weatherImgText = document.querySelector('.weather-img')
const temperatureText = document.querySelector('.temperature')
const conditionText = document.querySelector('.condition')
const copyYear = document.querySelector('.copy-year')

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






const dateObject = new Date()
let month = dateObject.getMonth() + 1
const year = dateObject.getFullYear()
let day = dateObject.getDate()
let hour = dateObject.getHours()
let minute = dateObject.getMinutes()
let amPm = 'AM'

if (hour > 12) {
    hour = hour - 12
}

if (hour >= 12) {
    amPm = 'PM'
}


if (minute < 10) {
    minute = '0' + minute.toString()
}






if (month < 10) {
    month = '0' + month.toString()
}

if (day < 10) {
    day = '0' + day.toString()
}

let time = `${hour}:${minute} ${amPm}`
weatherTime.textContent = time
let date = `${month}/${day}/${year}`
dateText.textContent = date
copyYear.textContent = year



let apiKey = 'b58560c26d543a0b3de36f6fa5553882'
let lat = '43.6591'
let lon = '-70.2568'
let units = 'imperial'
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`

async function getWeather() {

    
    try {
        const response = await fetch(url);
        const data = await response.json();
        let currentTemp = data.main.temp;
        currentTemp = Math.round(currentTemp).toString() + '°F'
        temperatureText.textContent = currentTemp
        const conditionData = data.weather[0].description
        conditionText.textContent = conditionData
        const location = data.name
        locationText.textContent = location


        const clouds = ['overcast clouds','broken clouds','scattered clouds','few clouds']
        const rain = ['shower rain','rain','mist']

        if (clouds.includes(conditionData)) {
            weatherImgText.src = '../Images/Html-images/partly-cloudy.png'
        } else if (rain.includes(conditionData)) {
            weatherImgText.src = '../Images/Html-images/rain-storm.png'
        } else if (conditionData == 'thunderstorm'){
            weatherImgText.src == '../Images/Html-images/rain-storm.png'
        } else if (conditionData == 'snow'){
            weatherImgText.src == '../Images/Html-images/snow.png'
        } else if (conditionData == 'clear sky'){
            weatherImgText.src == '../Images/Html-images/sunny.png'
        }


    } catch (error) {
        console.log(error)
    }
}


getWeather()
