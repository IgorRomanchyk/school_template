const container = document.querySelector('.container')

const renderForm = () => {
  const weatherForm = document.createElement('div')
  weatherForm.className = 'weather_form'

  const inputCity = document.createElement('input')
  inputCity.type = 'text'
  inputCity.name = 'city'
  inputCity.placeholder = 'Enter your city here...'

  const inputCountry = document.createElement('input')
  inputCountry.type = 'text'
  inputCountry.name = 'country'
  inputCountry.placeholder = 'Enter your country here...'

  const buttonCreate = document.createElement('button')
  buttonCreate.innerText = 'Submit'
  buttonCreate.className = 'weather_submit'

  const weatherError = document.createElement('div')
  weatherError.className = 'weather_error'
  weatherError.innerText = 'Error. Please fill in both lines'

  weatherForm.append(inputCity, inputCountry, buttonCreate)
  container.append(weatherForm, weatherError)
}

renderForm()

const renderWeatherContainer = () => {
  const weatherContainer = document.createElement('div')
  weatherContainer.id = 'weather_container'
  container.append(weatherContainer)
}

renderWeatherContainer()

const renderWeather = (data) => {
  const weatherImg = document.createElement('div')
  weatherImg.className = 'weather_img'
  weatherImg.style.background = `url(${data.current.weather_icons})`

  const weatherTemperature = document.createElement('div')
  weatherTemperature.className = 'weather_temperature'
  weatherTemperature.innerText = `${data.current.temperature}°C`

  const weatherLocation = document.createElement('div')
  weatherLocation.className = 'weather_location'
  weatherLocation.innerText = `${data.location.name}, ${data.location.country}`

  const weatherData = document.createElement('div')
  weatherData.className = 'weather_data'

  const dataTime = document.createElement('div')
  dataTime.className = 'data_time'
  dataTime.innerText = `${data.current.observation_time}`

  const dataFeelsLike = document.createElement('div')
  dataFeelsLike.className = 'data_feels-like'
  dataFeelsLike.innerText = `Feels like: ${data.current.feelslike}°C`

  const dataTodayIs = document.createElement('div')
  dataTodayIs.className = 'data_today-is'
  dataTodayIs.innerText = `Today is ${data.current.weather_descriptions}`

  const dataWind = document.createElement('div')
  dataWind.className = 'data_wind'
  dataWind.innerText = `Wind: ${data.current.wind_dir}`

  const dataSpeed = document.createElement('div')
  dataSpeed.className = 'data_speed'
  dataSpeed.innerText = `Speed: ${data.current.wind_speed} km/h`

  const dataPressure = document.createElement('div')
  dataPressure.className = 'data_pressure'
  dataPressure.innerText = `Pressure: ${data.current.pressure} MB`

  weatherData.append(dataTime, dataFeelsLike, dataTodayIs, dataWind, dataSpeed, dataPressure)
  document.getElementById('weather_container').append(weatherImg, weatherTemperature, weatherLocation, weatherData)
  container.append(document.getElementById('weather_container'))
}

const removeWeather = () => {
  document.getElementById('weather_container').innerHTML = ''
}

const getWeather = (city, country) => {
  const inputCityValue = document.querySelector('input[name=city]').value
  const inputCountryValue = document.querySelector('input[name=country]').value

  const error = document.querySelector('.weather_error')

  const accessKey = '275648e5d6c0cd4333b290867b451363'

  if (!inputCityValue || !inputCountryValue) {
    error.style.display = 'block'
  } else {
    error.style.display = 'none'
    fetch(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${city},${country}`)
      .then((res) => res.json())
      .then((data) => {
        removeWeather()
        renderWeather(data)
      })
      .catch(() => {
        console.log('Error')
      })
  }
}

const button = document.querySelector('.weather_submit')
button.addEventListener('click', (event) => {
  event.preventDefault()

  const city = document.querySelector('input[name=city]').value
  const country = document.querySelector('input[name=country]').value
  getWeather(city, country)
})
