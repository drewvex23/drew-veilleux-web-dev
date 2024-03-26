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






async function getWeather(coords) {
    let lat = coords[0]
    let lon = coords[1]
    let apiKey = 'b58560c26d543a0b3de36f6fa5553882'
    let units = 'imperial'
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        let currentTemp = data.main.temp;
        currentTemp = Math.round(currentTemp).toString() + '°F'
        temperatureText.textContent = currentTemp
        const conditionData = data.weather[0].description
        conditionText.textContent = conditionData

        const clouds = ['overcast clouds','broken clouds','scattered clouds','few clouds']
        const rain = ['shower rain','rain','mist','light rain', 'moderate rain']

        if (clouds.includes(conditionData)) {
            weatherImgText.src = './Images/Html-images/partly-cloudy.png'
        } else if (rain.includes(conditionData)) {
            weatherImgText.src = './Images/Html-images/rain.png'
        } else if (conditionData == 'thunderstorm'){
            weatherImgText.src == './Images/Html-images/rain-storm.png'
        } else if (conditionData == 'snow'){
            weatherImgText.src == './Images/Html-images/snow.png'
        } else if (conditionData == 'clear sky'){
            weatherImgText.src == './Images/Html-images/sunny.png'
        }


    } catch (error) {
        console.log(error)
    }
}

let ipKey = 'd4a9e1c9d2914ba98f7c9735cff39628'
let ipUrl = `https://api.geoapify.com/v1/ipinfo?&apiKey=${ipKey}`

async function getIp() {
    try {
        const response = await fetch(ipUrl);
        const ipData = await response.json();
        console.log(ipData)
        let ipCity = ipData.city.name
        let ipState = ipData.state.name
        let ipLat = ipData.location.latitude
        let ipLong = ipData.location.longitude 
        locationText.textContent = `${ipCity}, ${ipState}`  
        const coords = [ipLat, ipLong]
        return coords


    } catch (error) {
        console.log(error)
    }

    
    

}

async function timeDate(coords) {
    let lat = coords[0]
    let lon = coords[1]
    let timeApi = 'a3dn7fPR/nDO5oyr3RAPqg==VCk3sUpGYdRiK8av'
    
    
    try {
        const timeUrl = `https://api.api-ninjas.com/v1/worldtime?lat=${lat}&lon=${lon}`
        const options = {
            method: 'GET',
            headers: {
                'X-Api-Key': timeApi
            }
        }
        const response = await fetch(timeUrl, options);
        const timeData = await response.json();
        let hour = timeData.hour
        let minute = timeData.minute
        let month = timeData.month
        let day = timeData.day
        let year = timeData.year

        let refinedHour = hour
        let amPm = 'AM'

        if (hour > 12) {
            refinedHour = hour - 12
        }

        if (hour >= 12) {
            amPm = 'PM'
        }
        
        let time = `${refinedHour}:${minute} ${amPm}`
        weatherTime.textContent = time
        let date = `${month}/${day}/${year}`
        dateText.textContent = date
        copyYear.textContent = year
        
        } catch (error) {
            console.log(error)
        }
}

getIp()
    .then(c => timeDate(c))

getIp()
    .then(c => getWeather(c))