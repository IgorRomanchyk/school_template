import { renderForm } from './view/weather.input'
import { weatherController } from './controller/weather.controller'
import { renderWeatherContainer } from './view/weather.container'
import './style.css'

function initWeather() {
  renderForm()

  renderWeatherContainer()

  weatherController()
}

initWeather()
