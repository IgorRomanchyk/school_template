const container = document.querySelector('.container')

const weatherError = document.createElement('div')
weatherError.className = 'weather_error'

const weatherForm = document.createElement('div')
weatherForm.className = 'weather_form'

container.append(weatherForm, weatherError)

const inputCity = document.createElement('input')
inputCity.type = 'text'
inputCity.name = 'city'
inputCity.placeholder = 'Enter your city here...'

const inputCountry = document.createElement('input')
inputCountry.type = 'text'
inputCountry.name = 'country'
inputCountry.placeholder = 'Enter your country here...'

const button = document.createElement('button')
button.innerText = 'Submit'
button.className = 'weather_submit'

weatherForm.append(inputCity, inputCountry, button)

const weatherInfo = document.createElement('div')
weatherInfo.className = 'weather_info'

container.append(weatherInfo)

const weatherImg = document.createElement('div')
weatherImg.className = 'weather_img'

const weatherTemperature = document.createElement('div')
weatherTemperature.className = 'weather_temperature'

const weatherLocation = document.createElement('div')
weatherLocation.className = 'weather_location'

const weatherData = document.createElement('div')
weatherData.className = 'weather_data'

weatherInfo.append(weatherImg, weatherTemperature, weatherLocation, weatherData)

const dataTime = document.createElement('div')
dataTime.className = 'data_time'

const dataFeelsLike = document.createElement('div')
dataFeelsLike.className = 'data_feels-like'

const dataTodayIs = document.createElement('div')
dataTodayIs.className = 'data_today-is'

const dataWind = document.createElement('div')
dataWind.className = 'data_wind'

const dataSpeed = document.createElement('div')
dataSpeed.className = 'data_speed'

const dataPressure = document.createElement('div')
dataPressure.className = 'data_pressure'

weatherData.append(dataTime, dataFeelsLike, dataTodayIs, dataWind, dataSpeed, dataPressure)

const getWeather = (event) => {
  const inputCityValue = document.querySelector('input[name=city]').value
  const inputCountryValue = document.querySelector('input[name=country]').value

  event.preventDefault()

  const accessKey = '4c1b27c3131aecf9a0985bb9e8405b94'

  if (!inputCityValue || !inputCountryValue) {
    weatherError.style.display = 'block'
    weatherError.innerText = 'Error. Please fill in both lines'
    weatherInfo.style.display = 'none'
  } else {
    weatherError.style.display = 'none'
    weatherInfo.style.display = 'block'
    fetch(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${inputCityValue},${inputCountryValue}`)
      .then((res) => res.json())
      .then((res) => {
        weatherImg.style.background = `url(${res.current.weather_icons})`
        weatherTemperature.innerText = `${res.current.temperature}°C`
        weatherLocation.innerText = `${res.location.name}, ${res.location.country}`
        dataTime.innerText = `${res.current.observation_time}`
        dataFeelsLike.innerText = `Feels like: ${res.current.feelslike}°C`
        dataTodayIs.innerText = `Today is ${res.current.weather_descriptions}`
        dataWind.innerText = `Wind: ${res.current.wind_dir}`
        dataSpeed.innerText = `Speed: ${res.current.wind_speed} km/h`
        dataPressure.innerText = `Pressure: ${res.current.pressure} MB`
      }).catch(() => {
        console.log('Error')
      })
  }
}

button.addEventListener('click', getWeather)
