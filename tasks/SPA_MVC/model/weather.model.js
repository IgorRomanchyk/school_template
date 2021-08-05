/* eslint-disable import/prefer-default-export */
import { renderWeather } from '../view/weather'

function removeWeather() {
  document.getElementById('weather_container').innerHTML = ''
}

export function getWeather(city, country) {
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
