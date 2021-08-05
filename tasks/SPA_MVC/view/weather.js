/* eslint-disable import/prefer-default-export */
export function renderWeather(data) {
  const container = document.querySelector('.container')
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
