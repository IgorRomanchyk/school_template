import { getWeather } from '../model/weather.model'

export function weatherController() {
  const button = document.querySelector('.weather_submit')
  button.addEventListener('click', (event) => {
    event.preventDefault()

    const city = document.querySelector('input[name=city]').value
    const country = document.querySelector('input[name=country]').value
    getWeather(city, country)
  })
}
